const cp = require('child_process');
const os = require('os');

// Skip the node-gyp rebuild step when building NPM tfjs-node-gpu package.
if(!(process.argv[2] === 'compile-npm' && os.platform() === 'linux')) {

  cp.exec('node-gyp rebuild', (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      console.log(err);
      return;
    }
  });
}
