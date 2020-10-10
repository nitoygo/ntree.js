# NTree

NTree is a JavaScript library for creating and traversing n-ary tree structures.

## Installation

### Node

NTree is available as an npm module so you can install it with `npm install ntree.js` and use it in your code:

```js
const ntree = require('ntree.js')
```

## Usage

By importing ntree, you get access to the following classes:
- ```Node``` - For creating and manipulating node objects to be added to a tree
- ```TreeUtil``` - For utility functions necessary to do something to a tree

```js
const {Node, TreeUtil} = require('ntree.js')
:
let aNode = new Node("A")
let bNode = new Node("B")
:
aNode.addChild(bNode)
:
```

To traverse a tree, get an iterable property of a root node and consume the iterator:

```js
:
let iteratable = TreeUtil.getPreOrderIterable(aNode)
let iterator = iterable[Symbol.iterator]()

console.log(iterator.next())
console.log(iterator.next())
:
```

Or simply use ```for of```

```js
:
let iterable = TreeUtil.getPreOrderIterable(aNode)
for (node of iterable) {
  console.log(node)
}
```

As of this version, only pre-order traversal is supported.  
Other API add-ons to this library are currently under development.
