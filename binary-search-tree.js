class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // if there is nothing in the root, then there is no tree so we make the root the new node we take in to start the tree
    if(this.root === null){
      this.root = new Node(val)
      return this
    }

    let current = this.root; // let the current variable we are looking at to be the root

    // console.log(current, "CURRENT")
    while(current){// while there is a current node
      if(current.val > val){ // we look at if the value of that current node is larger than the val of the node we want to insert
        if(current.left === null){ // if so we want to insert it into the left side (the val should go to the smaller side) - first check if there is something in the left
          current.left = new Node(val) // if there issnt we can insert our new node into the .left - this is out BASE CASE
          return this
        }
        else current = current.left // if the left if occupied we are gna run this again by changing the current to the left to see if theres a left of that and so on
      }

      if(current.val < val){
        if(current.right === null){
          current.right = new Node(val)
          return this
        }
        else current = current.right
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if(this.root === null){
      this.root = new Node(val)
      return this
    }
      if(current.val > val){
        if(current.left === null){
          current.left = new Node(val)
          return this
        }
        else this.insertRecursively(val, current.left)
    }

      if(current.val < val){
        if(current.right === null){
          current.right = new Node(val)
          return this
        }
        else this.insertRecursively(val, current.right)
      }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if(this.root === null){
      return this
    }

    let current = this.root; 
      while(current){
        // console.log(current, "CURRENt")
      if(current.val === val){
        return current
      }

      if(current.val > val){
        current = current.left
      }
      if(current.val < val){
      current= current.right
      }
  }
  return undefined

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val,  current = this.root) {

    if(this.root === null){
      return undefined
    }

    if(current.val === val){
      return current
    }

    if( current.val > val){
      if(current.left === null){
        return undefined
      }
      return this.findRecursively(val, current.left)
    }
   
    if(current.val < val){
      if(current.right === null){
        return undefined
      }
      return this.findRecursively(val, current.right)
    }

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    
    let returnArr = []

    function traverse(node){
      returnArr.push(node.val);
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return returnArr

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let returnArr = []

    function traverse(node){
      if(node.left) traverse(node.left)
      returnArr.push(node.val);
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return returnArr

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

    let returnArr = []

    function traverse(node){
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      returnArr.push(node.val);
    }
    traverse(this.root)
    return returnArr


  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let returnArr = []
    let queue = [this.root]

    while(queue.length){
      let current = queue.shift()

      returnArr.push(current.val)

      if(current.left){
        queue.push(current.left)
      }
      if(current.right){
        queue.push(current.right)
      }
    }
    return returnArr
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
