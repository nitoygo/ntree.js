const ntree = require('../index')
const TreeUtil = ntree.TreeUtil
const Node = ntree.Node

// Construct this sample tree

console.log("               __________A__________      ")
console.log("              |      |        |     |     ")
console.log("            __B__    F        D   __E__   ")
console.log("           |     |            |  |  |  |  ")
console.log("          _K_    J            G  C  H  I  ")
console.log("         |   |                   |     |  ")
console.log("         N   M                   O     L  ")

let ANode = new Node("A")
let BNode = new Node("B")
let CNode = new Node("C")
let DNode = new Node("D")
let ENode = new Node("E")
let FNode = new Node("F")
let GNode = new Node("G")
let HNode = new Node("H")
let INode = new Node("I")
let JNode = new Node("J")
let KNode = new Node("K")
let LNode = new Node("L")
let MNode = new Node("M")
let NNode = new Node("N")
let ONode = new Node("O")

ANode.addChild(BNode)
ANode.addChild(FNode)
ANode.addChild(DNode)
ANode.addChild(ENode)

BNode.addChild(KNode)
BNode.addChild(JNode)

KNode.addChild(NNode)
KNode.addChild(MNode)

DNode.addChild(GNode)

ENode.addChild(CNode)
ENode.addChild(HNode)
ENode.addChild(INode)

CNode.addChild(ONode)

INode.addChild(LNode)

let iterable = TreeUtil.getPreOrderIterable(ANode)

let traversedNodes = Array.from(iterable)
let treeAsList = traversedNodes.map((node) => {
 return node.data
})

console.log(treeAsList)