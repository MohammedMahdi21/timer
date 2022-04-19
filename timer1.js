const inputTimer = process.argv.slice(2);
for (let i = 0; i < inputTimer.length; i++) {

  if (inputTimer.length === 0) {
    break;
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, inputTimer[i] * 1000);
  }

}
