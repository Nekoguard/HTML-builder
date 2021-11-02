const path = require('path');
const fs = require('fs');
const copyPath = path.join(__dirname, 'files-copy');

function copyDir() {
  // если папки ещё не существует - создаем её

  fs.stat(copyPath, function(err) {
    if (err && err.code === 'ENOENT') {
      fs.mkdir(path.join(__dirname, 'files-copy'), (err) => {
        if (err) {
          throw err;
        }
      });
    }

    // создаем/обновляем содержимое папки

    fs.readdir(path.join(__dirname, 'files'), (err, files) => {
      if (err) {
        throw err;
      }

      files.forEach(file => {
        fs.copyFile(path.join(__dirname, 'files', file), path.join(copyPath, file), (err) => {
          if (err) {
            throw err;
          }
        });
      });

      console.log('Done!');
    });
  });
}

copyDir();
