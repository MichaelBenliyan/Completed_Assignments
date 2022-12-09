function LinkedList() {
  this.head = null;
  this.tail = null;
  for(i=0; i<arguments.length; i++) {
    this.push(arguments[i]);
  };
}

function Node(val) {
  this.value = val;
  this.next = null;
}

// adds node to end of list
LinkedList.prototype.push = function(value) {
  if (this.head === null) {
    this.head = new Node(value);
    this.tail = this.head;
  } else {
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
  }

  console.log('push')
};
// returns true if value is present in the list
LinkedList.prototype.contains = function(value) {
  console.log('test')
  // let currentNode = this.head.slice()
  let currentNode = this.head
  while (currentNode !== null) {
    if (currentNode.value === value) return true;
    else currentNode = currentNode.next;
  }
  return false;

};

// Bonus
// adds node to beginning of list
LinkedList.prototype.addToHead = function(value) {
  let newHead = new Node(value);
  newHead.next = this.head
  this.head = newHead;
};

// Extra Bonus
// insert an item at the position specified
LinkedList.prototype.insert = function(value, position) {
  let newNode = new Node(value);
  let currentNode = this.head
  if (position === 0) {
    newNode.next = this.head;
    this.head = newNode;
  } else {
    while(position > 0) {
      if (position > 1) currentNode = currentNode.next;
      else {
        newNode.next = currentNode.next
        currentNode.next = newNode
      }
      position--;
    }
  };
};



// Extra Bonus
// remove first occurrence of value from list
LinkedList.prototype.removeItem = function(value) {

};

// Extra Bonus
// remove element at specified position in list
LinkedList.prototype.removePosition = function(position) {

};

const list = new LinkedList()


list.push(3);
list.push(7);
list.push(4);
list.push(8)
// expect(list.contains(2)).to.eql(false);
// expect(list.contains(6)).to.eql(false);
console.log(list)
console.log(list.contains(7))