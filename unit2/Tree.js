function Tree(value) {
  this.value = value;
  this.children = [];
}

Tree.prototype.add = function(value) {
  this.children.push(new Tree(value))

  // if (this.children.length < 2) this.children.push(new Tree(value));
  // else {
  //   for (i = 0; i < this.children.length; i++) {
  //     if (this.children[i].children.length < 2) this.children[i].children.push(new Tree(value));
  //     break
  //   }
  // }
};

Tree.prototype.contains = function(value) {
  for (let i = 0; i < this.children.length; i++) {
    if (this.children[i].value === value) return true;
    else if (this.children[i].contains(value)) return true;
  }
  return false;
};

// Extra Bonus
//Find the height of a tree. The height is the length of the path from the root to its farthest leaf
Tree.prototype.height = function() {

};

tree = new Tree();
tree.add(5);
console.log(tree.children)
tree.children[0].add(4);
console.log(tree.children)
console.log(tree.contains(4));