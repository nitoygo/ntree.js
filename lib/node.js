
function Node(data) {
  this.data = data
  this.children = []
  this.parent = null
  this.depth = 0
}

function addChild(self, child, index) {
  if (!(child instanceof Node)) {
    throw new TypeError('Child must be of Node type')
  }

  child.parent = self
  child.depth = self.depth + 1

  if (index !== undefined) {
    if (index < 0 || index > self.children.length) {
      throw new Error('Invalid index.');
    }
    self.children.splice(index, 0, child);
  }
  else {
    self.children.push(child)
  }
}

Node.prototype.addChild = function(child) {
  return addChild(this, child)
}

Node.prototype.addChildAtIndex = function(child, index) {
  return addChild(this, child, index)
}

Node.prototype.isRoot = function() {
  return (this.parent === undefined || this.parent === null)
}

Node.prototype.isLeaf = function() {
  return (this.children === undefined || this.children === null)
}

module.exports = Node