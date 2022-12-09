// do not use any native array methods
function Queue() {
    this.storage = {};
    this.length = 0;
}

Queue.prototype.enqueue = function(value) {
    this.storage[this.length] = value;
    this.length++;
};

Queue.prototype.dequeue = function() {
    if (!this.length) return undefined;
    let firstVal = this.storage[0];
    for (let i = 0; i < this.length - 1; i++) {
        this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[this.length - 1];
    this.length--;
    return firstVal;
};
