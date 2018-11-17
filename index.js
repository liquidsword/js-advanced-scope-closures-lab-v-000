function produceDrivingRange(blockRange) {
  return function (startOut, endAt) {
    let begin = parseInt(startOut);
    let end = parseInt(endAt);
    let howFar = Math.abs(end - begin);
    let distance = blockRange - howFar;

    if (distance > 0) {
        return `within range by ${howFar}`
      }
        else {
          return `${Math.abs(distance)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(cost) {
    return cost*percentage;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name){
      this.id = ++driverId;
      this.name = name
    }
  }
}
