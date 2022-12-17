class Head {
  constructor(el) {
    //Add Head to Document
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'head');
    el.appendChild(this.node);

    //Image for Head
    let image = document.createElement('img');
    image.setAttribute('src', 'https://images.vexels.com/media/users/3/162458/isolated/preview/039ecf108cbddcf1893b09a81d23576d-snake-head-forked-tongue-flat-sticker.png')
    image.setAttribute('style', 'margin: 0px; padding: 0px; height: 50px; width: 50px');
    this.node.appendChild(image);
    
    this.currentDirection = 'right';
    this.SPEED = 250;
    this.node.style.top = 0;
    this.node.style.left = 0;

    //Array that stores all Snake Body 
    this.bodyArr = [];
    setTimeout(this.move.bind(this), this.SPEED);
    
  }

  moveTheBody(top, left){
    this.bodyArr[this.bodyArr.length-1].node.style.top = top +'px';
    this.bodyArr[this.bodyArr.length-1].node.style.left = left + 'px';
    
    // we are here  trying to move the last element to the front of the array
    let bodyPart = this.bodyArr.pop();
    this.bodyArr.unshift(bodyPart);
  
  }

  move() {
    const head = this.node;
    const direction = this.currentDirection;

    let topPosition = Number(head.style.top.replace('px', ''));
    let leftPosition = Number(head.style.left.replace('px', ''));
    
    // Here we save previous locations before changing current location because we will pass to moveTheBody()
    let previousTop = topPosition;
    let previousLeft = leftPosition;

    if (direction === 'right' ) {
      head.style.left = `${(leftPosition += 50)}px`;
    }
    if (direction === 'left'){
      head.style.left = `${(leftPosition -= 50)}px`;
    }
    if (direction === 'up' ){
      head.style.top = `${(topPosition -= 50)}px`;
    }
    if (direction === 'down' ){
      head.style.top = `${(topPosition += 50)}px`;
    }
    if (topPosition < 0 || topPosition > 650 || leftPosition < 0 || leftPosition > 650) {
      alert('Game Over');
      return;
      
    };
    
    topPosition = Number(head.style.top.replace('px', ''));
    leftPosition = Number(head.style.left.replace('px', ''));

    //Check if Head Collided with Body
    for (let i =0; i<this.bodyArr.length;i++){
      let top = Number (this.bodyArr[i].node.style.top.replace('px', ''));
      let left = Number (this.bodyArr[i].node.style.left.replace('px', ''));
      
      if (top === topPosition && left === leftPosition){
        alert('Game Over');
        return;
      }
    }
    
    // Move the Body
    if(this.bodyArr.length > 0){
    this.moveTheBody(previousTop,previousLeft);
    }

    setTimeout(this.move.bind(this), this.SPEED);
  }
}
