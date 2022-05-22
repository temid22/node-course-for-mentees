const fs = require('fs');

// reading files 

// fs.readFile('./docs/alaye.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })
// console.log('last fucking line bruh')

// writing files 

// fs.writeFile('./docs/alaye.txt', 'alaye geddifok', () => {
//     console.log('bloody file was written');
// })

// fs.writeFile('./docs/alaye2.txt', 'alaye geddifok', () => {
//     console.log('bloody file was written na');
// })

// directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('your fucking folder is created');
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('your fucking folder is removed');
// })
// }

// deleting files
// if (fs.existsSync('./docs/deleteme.txt')) {
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('fucking file is deleted');
//     })
// }

