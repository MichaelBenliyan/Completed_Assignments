function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

// adds a node to the specified index
// if index is specified, accepts parameter (value, index)
// if no index is specified then add element to the end of list
LinkedList.prototype.add = function(value, index) {
  if (!this.head) {
    this.head = this.tail = new Node(value);
    return;
  }
  if (index === 0) {
    let newHead = new Node(value);
    newHead.next = this.head
    this.head = newHead
  }
  let currentNode = this.head
      if (index != undefined) {
        for (let i = 0; i < index-1; i++) {
          if (currentNode === null) return -1
          currentNode = currentNode.next
        };
        if (currentNode.next === null) {
          currentNode.next = new Node(value)
          this.tail = currentNode.next
        }
        else {
            let temp = currentNode.next
            currentNode.next = new Node(value);
            currentNode.next.next = temp;
        }
      
      } else {
        this.tail.next = new Node(value);
        this.tail = this.tail.next;
      };

}

// retrieves the node at the specified index
LinkedList.prototype.get = function(index) {
  let currentNode = this.head
  for(let i = 0; i < index; i++) {
    if (currentNode === null) return -1
    currentNode = currentNode.next;
  }
  return currentNode
}

// retrieves and removes the node at the specified index
// if no index is specified, removes the last node (tail)
LinkedList.prototype.remove = function(index) {
  let currentNode = this.head
  if (index != undefined) {
    for (let i = 0; i < index-1; i++) {
      if (currentNode === null) return -1
      currentNode = currentNode.next
    }
    if (currentNode.next === null)return -1;
    else {
      let solution = currentNode.next;
      currentNode.next = currentNode.next.next;
      return solution
    }
  } else {
    let solution = this.tail;
    if (currentNode === this.tail) {
      this.head = null;
      this.tail = null;
    } else if (currentNode.next === this.tail) {
      currentNode.next = null;
      this.tail = currentNode
    } else {
      while (currentNode.next != this.tail){
        currentNode = currentNode.next
      }
      currentNode.next = null;
      this.tail = currentNode
    }
    return solution
  }
}

let linkedList = new LinkedList();
linkedList.add(0);
linkedList.add(1,0);
//1
console.log(linkedList.remove(0).value)
//0
console.log(linkedList.remove(0).value)