// JSON.parse silently keeps the final duplicate object key. Reject duplicates
// first so counts, source mappings and import decisions cannot be overwritten.
export function parseJsonNoDuplicateKeys(text, source = "JSON") {
  let index = 0;
  const fail = message => { throw new Error(`${source}: ${message} at byte ${index}`); };
  const whitespace = () => {
    while (index < text.length && /[\u0009\u000a\u000d\u0020]/.test(text[index])) index += 1;
  };
  const string = () => {
    if (text[index] !== '"') fail("expected a JSON string");
    const start = index++;
    while (index < text.length) {
      const char = text[index];
      if (char === '"') {
        index += 1;
        try { return JSON.parse(text.slice(start, index)); }
        catch { return fail("invalid JSON string"); }
      }
      if (char === "\\") {
        index += 1;
        if (index >= text.length) fail("unterminated escape");
        if (text[index] === "u") {
          if (!/^[0-9a-fA-F]{4}$/.test(text.slice(index + 1, index + 5))) fail("invalid unicode escape");
          index += 5;
        } else index += 1;
      } else {
        if (text.charCodeAt(index) < 0x20) fail("unescaped control character");
        index += 1;
      }
    }
    return fail("unterminated JSON string");
  };
  const value = at => {
    whitespace();
    const char = text[index];
    if (char === "{") {
      index += 1;
      whitespace();
      const keys = new Set();
      if (text[index] === "}") { index += 1; return; }
      while (index < text.length) {
        whitespace();
        const key = string();
        if (keys.has(key)) fail(`duplicate object key ${JSON.stringify(key)} in ${at}`);
        keys.add(key);
        whitespace();
        if (text[index] !== ":") fail("expected ':' after object key");
        index += 1;
        value(`${at}.${key}`);
        whitespace();
        if (text[index] === "}") { index += 1; return; }
        if (text[index] !== ",") fail("expected ',' or '}' in object");
        index += 1;
      }
      fail("unterminated object");
    }
    if (char === "[") {
      index += 1;
      whitespace();
      if (text[index] === "]") { index += 1; return; }
      let item = 0;
      while (index < text.length) {
        value(`${at}[${item++}]`);
        whitespace();
        if (text[index] === "]") { index += 1; return; }
        if (text[index] !== ",") fail("expected ',' or ']' in array");
        index += 1;
      }
      fail("unterminated array");
    }
    if (char === '"') { string(); return; }
    for (const literal of ["true", "false", "null"]) {
      if (text.slice(index, index + literal.length) === literal) { index += literal.length; return; }
    }
    const number = /-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/y;
    number.lastIndex = index;
    const match = number.exec(text);
    if (match) { index = number.lastIndex; return; }
    fail("expected a JSON value");
  };
  value("$");
  whitespace();
  if (index !== text.length) fail("unexpected trailing content");
  try { return JSON.parse(text); }
  catch (error) { throw new Error(`${source}: invalid JSON syntax (${error})`); }
}
