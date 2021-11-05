const path = require('path');
const fs = require('fs');
let styles = [];

// Читает исходную папку со стилями
fs.readdir(path.join(__dirname, 'styles'), {withFileTypes: true}, (err, files) => {
  if (err) {
    throw err;
  }

  // Проверка является ли объект файлом и имеет ли расширение .css
  files.forEach(file => {
    if (file.isFile() && path.extname(file.name) === '.css') {
      fs.readFile(path.join(__dirname, 'styles', file.name), 'utf-8', (err,data) => {
        if (err) {
          throw err;
        }

        styles.push(data.toString());

        // if (styles.length === 2) {
        //   styles.forEach(style => {
        //     fs.writeFile(path.join(__dirname, 'project-dist', 'bundle.css'), style, (err) => {
        //       if (err) {
        //         throw err;
        //       }
        //       console.log('done');
        //     });
        //   });
        // }
      });
    }
  });
});
