const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  root() {
    return this._root;
  }

  add(data) {
    let newNode = new Node(data);
    if (this._root === null) {
      this._root = newNode;
    } else {
      let current = this._root;
      while (current) {
        if (data < current.data) {
          if (current.left === null) {
            current.left = newNode;
            return;
          } else {
            current = current.left;
          }
        } else {
          if (current.right === null) {
            current.right = newNode;
            return;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  has(data) {
    if (this.find(data) === null) return false;
    else return true;
  }

  find(data) {
    let current = this._root;
    while (current) {
      if (current.data === data) {
        return current;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      } 
    }
    return null;
  }

  remove(data) {
    function recursive(node) {
      if (!node) return null;

      if (node.data == data) {
          if (!node.left) return node.right;
          if (!node.right) return node.left;
          let curr = node.right;
          while (curr.left) curr = curr.left;
          curr.left = node.left;
          return node.right;
      }

      if (data > node.data) node.right = recursive(node.right);
      else node.left = recursive(node.left);

      return node;
    }
    this._root = recursive(this._root);
  }

  min() {
    let current = this._root;
    while (current) {
      if (current.left === null) {
        return current.data;
      }
      current = current.left;
    }
    return null;
  }

  max() {
    let current = this._root;
    while (current) {
      if (current.right === null) {
        return current.data;
      }
      current = current.right;
    }
    return null;
  }
}

module.exports = {
  BinarySearchTree
};