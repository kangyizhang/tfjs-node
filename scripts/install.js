var cp = require('child_process');

if(process.argv[3] !== "compile-npm") {

  cp.exec('node-gyp rebuild', (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      console.log(err);
      return;
    }
  });
}


// for (let j = 0; j < process.argv.length; j++) {
//   console.log(j + ' -> ' + (process.argv[j]));
// }
