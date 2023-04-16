const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
    let node = l;
    let prevNode;
    let list = l;
    while (node) {
      if (node.value === k) {
        if (prevNode === undefined) {
          list = node.next;
        } else if (node.next === null) {
          prevNode.next = null;
        } else {
          prevNode.next = node.next;
        }
      } else {
        prevNode = node;
      }
      node = node.next;
    }
    return list;
}

module.exports = {
  removeKFromList
};
