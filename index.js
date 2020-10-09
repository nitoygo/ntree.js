const Node = require('./lib/node')

const TreeUtil = (function() {

  /**
   * Gets the iterator of the tree from the given root node.
   * This will iterate the nodes like they were traversed in a pre-order fashion
   * 
   * @returns iterable
   */
  function getPreOrderIterable(rootNode) {

    if (!(rootNode instanceof Node)) {
      throw new TypeError('Parameter rootNode must be of Node type')
    }

    // to generate an iterator, a stack data structure will be created
    // the nodes will be pushed to this stack as if they were traversed in pre order

    // initially add the root node to the top of stack
    let nodeStack = [rootNode]

    return {
      [Symbol.iterator]: () => {
        return {
          next: () => {
            // process the "current parent"
            let nextNode = nodeStack.pop()

            // check if there are children to be processed next
            if (nextNode && !nextNode.isLeaf()) {
              while (nextNode.children.length) {
                nodeStack.push(nextNode.children.pop())
              }
            }

            if (nextNode) {
              return {value: nextNode, done: false}
            }
            else {
              return {done: true}
            }
          }
        }
      }
    }
  }

  return {
    getPreOrderIterable : getPreOrderIterable
  }
})()

module.exports = {
  Node : Node,
  TreeUtil : TreeUtil
}