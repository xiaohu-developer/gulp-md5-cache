const through = require('through2');
const md5File = require('md5-file');
const fs = require('fs');

module.exports = function md5Cache (options = {}) {
  const cache = {};
  const cacheName = options.cacheName || '.md5-cache.json';
  const stream = through.obj(function (file, enc, cb) {
    cache[file.relative] = md5File.sync(file.path);
    cb(null, file);
  });
  stream.on('finish', () => {
    fs.writeFileSync(cacheName, JSON.stringify(cache, null, 2));
  });
  return stream;
};
