const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.start = undefined;
    this.end = undefined;
  }

  getUnderlyingList() {
    return this.start;
  }

  enqueue(value) {
    let node = new ListNode(value);
    if (this.start === undefined) {
      this.start = node;
      this.end = node;  
    } else {
      this.end.next = node;
      this.end = node;
    }
  }

  dequeue() {
    let node = this.start;
    this.start = this.start.next;
    return node.value;
  }
}

module.exports = {
  Queue
};
