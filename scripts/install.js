var cp = require('child_process');

    cp.exec('node-gyp rebuild', (err, stdout, stderr) => {
      if (err) {
        // node couldn't execute the command
        console.log(err);
        return;
      }

      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });


// for (let j = 0; j < process.argv.length; j++) {
//   console.log(j + ' -> ' + (process.argv[j]));
// }
