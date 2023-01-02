/**
 * 
 * First, create a Stack which contains the following methods:
 * - push: add value to top (end) of stack
 * - pop: remove value from top (end) of stack
 * 
 * Second, create a Queue which consists of two stacks: stack1 and stack2
 * and contains the following methods:
 * - enqueue: add value to queue
 * - dequeue: remove value from queue
 * Queue methods should follow First In, First Out rule.
 * 
 * DO NOT USE NATIVE JS METHODS
 * 
 */

class Node {
    constructor(val) {
        this.val = val
        this.next = undefined
        this.prev = undefined
    }
}

function Stack() {
    this.stack = []
    this.length = this.stack.length;

    this.push = function(val) {
        this.stack.push(val)
        this.length = this.stack.length
    }
    this.pop = function() {
        let removed_val = this.stack.pop()
        this.length = this.stack.length
        return removed_val
    };

    // this.length = 0; 
    // this.tail = undefined
    // this.push = function(val) {
    //     if (!this.tail) {
    //         this.tail = new Node(val);
    //     }
    //     else {
    //         this.tail.next = new Node(val);
    //         this.tail.next.prev = this.tail;
    //         this.tail = this.tail.next;
    //     }
    //     this.length ++;
    // }
    // this.pop = function() {
    //     if (this.length != 0) {
    //         let removed_value = this.tail.val;
    //         this.tail = this.tail.prev;
    //         this.tail.next = undefined;
    //         this.length --;
    //         return removed_value
    //     }
    // };
}

function Queue() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.enqueue = function(val) {
        if (this.stack2.length > 0) this.stack1.push(val);
        else {
            this.stack1.push(val)
            while (this.stack1.length > 0) {
                let new_val = this.stack1.pop()
                this.stack2.push(new_val);
            }
        }
    }
    this.dequeue = function() {
        if (this.stack1.length === 0 && this.stack2.length === 0) return 
        else if (this.stack2.length != 0) {
            let removed_val = this.stack2.pop();
            return removed_val;
        } 
        else {
            while (this.stack1.length > 0) {
                let new_val = this.stack1.pop()
                this.stack2.push(new_val);
            }
            let removed_val = this.stack2.pop();
            return removed_val;
        }
    }

}

module.exports = { Stack, Queue };
