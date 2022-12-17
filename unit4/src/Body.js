class Body {
  constructor(el) {
    this.node = document.createElement('div');
    this.node.setAttribute('class', 'body');
    el.appendChild(this.node);

    this.currentDirection = 'right';
    this.SPEED = 250;

    this.node.style.top = 0;
    this.node.style.left = 0;

    
}
}