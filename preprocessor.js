const tsc = require('typescript');
const JSON5 = require('json5');
const fs = require('fs');
const tsConfig = JSON5.parse(fs.readFileSync('./tsconfig.json', 'UTF-8'));

module.exports = {
  process: function process (src, path) {
    if (/\.tsx?$/.test(path)) {
      return tsc.transpile(src, tsConfig.compilerOptions, path, []);
    }
    return src;
  }
};