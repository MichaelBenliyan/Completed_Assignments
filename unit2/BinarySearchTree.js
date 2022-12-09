function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.add = function(value) {
  if (value === this.value) return;

  function bfs(node) {
    const array = [node];
    let i = 0;
    while (i < array.length) {
      if (array[i].left !== null) {
        array.push(array[i].left);
     }
      if (array[i].right !== null) {
        array.push(array[i].right);
     }
      i++;
    }
    return array
  };

  const array = bfs(this);
  const node = new BinarySearchTree(value)
  array.push(node);

  array.sort((a, b) => a.value - b.value);
  console.log(array)
  // const newBST = new BinarySearchTree(array[array.length/2].value)

  if (value < this.value) {
    if (this.left !== null) {
      this.left.add(value);
    } else this.left = new BinarySearchTree(value);
  } else {
    if (this.right !== null) {
      this.right.add(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  } 

};



BinarySearchTree.prototype.contains = function(value) {
  // if (this === null) return false;
  if (value === this.value) return true //return true;
  if (value < this.value) {
    if (this.left === null) return false;
    return this.left.contains(value);
  } else {
    if (this.right === null) return false;
    return this.right.contains(value);
  } 
  // return false;
};

// applies the callback in the order of depth first (preorder)
BinarySearchTree.prototype.depthFirstPre = function(callback) {
  callback(this.value)
  console.log(this)
  if(this.left != null) {
    this.left.depthFirstPre(callback)
  }
  if (this.right != null) {
    this.right.depthFirstPre(callback)
  }
};

// applies the callback in the order of depth first (inorder)
BinarySearchTree.prototype.depthFirstIn = function(callback) {
  if (this.left === null) callback(this.value);
  if(this.left != null) {
    this.left.depthFirstIn(callback);
    callback(this.value);
  }
  if (this.right != null) {
    this.right.depthFirstIn(callback);
  }
};

// applies the callback in the order of depth first (postorder)
BinarySearchTree.prototype.depthFirstPost = function(callback) {
  if (this.left === null && this.right === null) callback(this.value);
  if(this.left != null) {
    this.left.depthFirstPost(callback);
  }
  if (this.right != null) {
    this.right.depthFirstPost(callback);
  }
  if (this.left != null || this.right != null) callback(this.value);
};

// applies the callback in the order of breath first (level order)
BinarySearchTree.prototype.breadthFirst = function(callback) {
  const array = [this];
  callback(this.value);
  let i = 0;
  while (i < array.length) {
    if (array[i].left !== null) {
      array.push(array[i].left);
      callback(array[i].left.value);
    }
    if (array[i].right !== null) {
      array.push(array[i].right);
      callback(array[i].right.value)
    }
    i++;
  }

};

// Extra Bonus
// Return the minimum stored value
BinarySearchTree.prototype.min = function() {
  if(this.left === null) return this.value;
  else return this.left.min()
};

// Extra Bonus
// Return the maximum stored value
BinarySearchTree.prototype.max = function() {
  if(this.right === null) return this.value;
  else return this.left.max()
};

// Extra Bonus
// Return the height of the tree
BinarySearchTree.prototype.height = function(height = 0, count=0) {
  let heightTracker = height;
  if (height < count) height = count;
  if(this.left !== null) heightTracker = this.left.height(height, count+1);
  height = Math.max(height, heightTracker);
  if(this.right !== null) heightTracker = this.right.height(height, count+1);
  return Math.max(height, heightTracker)
};

// Extra Bonus
// Remove an item from the tree and ensure that the children of the item are properly repositioned
BinarySearchTree.prototype.remove = function(item) {
  function bfs(node) {
    const array = [node];
    let i = 0;
    while (i < array.length) {
      if (array[i].left !== null) {
        array.push(array[i].left);
     }
      if (array[i].right !== null) {
        array.push(array[i].right);
     }
      i++;
    }
    return array
  };

  if (this.left && this.left.value === item) {
    let childrenArray1 = [];
    let childrenArray2 = [];
    if (this.left.left) {
      childrenArray2 = (bfs(this.left.left));
    }
    if (this.left.right) {
      childrenArray1 = (bfs(this.left.right));
    }
    this.left = null;
    childrenArray1.forEach(node => this.add(node.value));
    childrenArray2.forEach(node => this.add(node.value));
  }; 
  if (this.right && this.right.value === item) {
    const childrenArray = [];
    childrenArray.push(this.right.left.depthFirstIn(func = (val) => val));
    childrenArray.push(this.right.right.depthFirstIn(func = (val) => val));
    console.log(childrenArray);
    this.right = null;
    childrenArray.forEach(val => this.add(val));
  }
  if(this.left !== null) this.left.remove(item);
  if(this.right !== null) this.right.remove(item);
};

let binarySearchTree = new BinarySearchTree(8)
console.log(binarySearchTree)
// binarySearchTree.add(8);
binarySearchTree.add(3);
binarySearchTree.add(4);
binarySearchTree.add(2);
// binarySearchTree.add(1);
// binarySearchTree.add(5);


// binarySearchTree.add(7);
// expect(binarySearchTree.contains(7)).to.equal(true);
// expect(binarySearchTree.contains(8)).to.equal(false);
// console.log(binarySearchTree.contains(7))
// console.log(binarySearchTree.contains(8))

// console.log(binarySearchTree)

// const removeNull = new BinarySearchTree(3);

binarySearchTree.remove(3);
// console.log(binarySearchTree)