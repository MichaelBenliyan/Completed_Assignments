class Apple {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'apple');
    this.node.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/sco/d/d4/Mickey_Mouse.png');

    el.appendChild(this.node);

    this.node.style.left = Math.floor(Math.random()*14)*50 + 'px';
    this.node.style.top = Math.floor(Math.random()*14)*50 + 'px';

  }
}
