/**
* LinkedList costructor
*
* construct a new linked list
* you may modify this constructor as needed to achieve the challenges below
*/
function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0
}

/**
*
* constructor for node in linked list
*/
function Node(val) {
  this.val = val;
  this.next = null;
}

/**
* add - Adds given value to the beginning of the linked list.
*
* @param {string|number|boolean} val - value to be stored in linked list
* @return {number} The new length of the linked list
*/
LinkedList.prototype.add = function(val) {
  if (!this.head) {
    this.head = new Node(val);
    this.tail = this.head;
    this.length ++;
    return this.length;
  }
  const newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.length ++; 
  return this.length;
};

/**
* remove - find and delete the first occurrence of a value
*
* - If an item with the corresponding value does not exist, return undefined
*
* @param {string|number|boolean} val - value to be found and deleted from linked list
* @return {string|number|boolean} The value deleted from the linked list
*/
LinkedList.prototype.delete = function(val) {
  //if list is empty
  if (this.length === 0) return 
  //if head is first occurence
  if (this.head && this.head.val === val) {
    let result = this.head.val;
    this.head = this.head.next;
    this.length--;
    return result;
  }
  //if anything else is first occurence
  let currentNode = this.head; 
  while(currentNode && currentNode.next) {
    if (currentNode.next.val === val) {
      let result = currentNode.next.val;
      currentNode.next = currentNode.next.next;
      this.length--;
      return result;
    }
    currentNode = currentNode.next;
  }
  return undefined;
};

/**
* count - Returns the number of times a given value appears in the linked list
*
* @param {string|number|boolean} val - value to find in linked list
* @return {number} The number of times that value appears in the list
*/
LinkedList.prototype.count = function(val) {
  let currentNode = this.head; 
  let count = 0;
  while(currentNode) {
    if (currentNode.val === val) {
      count++;
    }
    currentNode = currentNode.next;
  }
  return count;
};

// Do not remove!!
module.exports = { LinkedList, Node };
