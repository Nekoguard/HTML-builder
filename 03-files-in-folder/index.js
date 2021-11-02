// I don't know how it works, but it works, don't touch it :D

const path = require('path');
const fs = require('fs');
const dirPath = path.join(__dirname, 'secret-folder');

fs.readdir(dirPath, {withFileTypes: true}, (err, files) => {
  if (err) {
    throw err;
  }

  files.forEach(file => {
    if (file.isFile()) {
      const filePath = path.join(dirPath, file.name);

      fs.stat(filePath, (err, stats) => {
        console.log(`${path.parse(file.name).name} - ${path.extname(file.name).slice(1)} - ${stats.size / 1000}kb`);
      });
    }
  });
});