const simpleTimer = function(inputTimer) {

  for (let i = 0; i < inputTimer.length; i++) {

    if (inputTimer.length === 0) {
      break;
    } else if (inputTimer[i] > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, inputTimer[i] * 1000);
    }

  }
};

const timer = process.argv.slice(2);
simpleTimer(timer);
