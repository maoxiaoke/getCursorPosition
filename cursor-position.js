module.exports = function (callback) {
  require('child_process').exec('./cursor-position.sh', (error, stdout, stderr) => {
    callback(error, stdout);
  });
};
