// the following constructor function should create an object with a push and pop method
// do not use the built-in array type or its methods
function Erray() {
  this.contents = {};
  this.length = 0

  this.push = (...args) => {
    let computedEle;
    // This portion is for the bonus/////////
    if (args[args.length-1] === "=") {
      if ([...args][1] === "+") computedEle = Number([...args][0]) + Number([...args][2]);
      else if ([...args][1] === "-") computedEle = Number([...args][0]) - Number([...args][2]);
      else if ([...args][1] === "*") computedEle = Number([...args][0]) * Number([...args][2]);
      else if ([...args][1] === "/") computedEle = Number([...args][0]) / Number([...args][2]);
    }
    //////////////////////////////////
    for (i=0; i<args.length;i++){
      let ele = args[i]
      this.contents[this.length] = ele
      this.length++;
    };
    if (computedEle !== undefined) return computedEle
  }
  this.pop = () => {
    let result = this.contents[this.length-1];
    delete this.contents[this.length];
    if (this.length > 0) this.length--;
    return result
  }
  this.unshift = (...args) => {
    let computedEle;

    // This portion is for the bonus/////////
    if (args[args.length-1] === "=") {
      if ([...args][1] === "+") computedEle = Number([...args][0]) + Number([...args][2]);
      else if ([...args][1] === "-") computedEle = Number([...args][0]) - Number([...args][2]);
      else if ([...args][1] === "*") computedEle = Number([...args][0]) * Number([...args][2]);
      else if ([...args][1] === "/") computedEle = Number([...args][0]) / Number([...args][2]);
    }
    //////////////////////////////////
    let prevVal;
    let temp;
    for (i=args.length-1; i>=0;i--){
      let ele = args[i]
      prevVal = ele
      for (j=0; j<=this.length;j++) {
        temp = this.contents[j];
        this.contents[j] = prevVal;
        prevVal = temp;
      }
      this.length++;
    };
    if (computedEle !== undefined) return computedEle

  }
  this.shift = () => {
    let prevVal, temp;
    let result = this.contents[0];
    for(i=this.length-1; i >= 0; i--) {
      temp = this.contents[i];
      this.contents[i] = prevVal;
      prevVal = temp;
    }
    delete this.contents[this.length-1];
    if (this.length > 0) this.length--;
    return result
  }
}

var array = new Erray;
