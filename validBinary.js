class Node {
	constructor(data) {
		this.value = data;
		this.left = null;
		this.right = null;
		this.parent = null;
	}
}

function isValidBinaryTree(inputTree) {
	let root = null;
	const nodes = new Map();
	for (const val of inputTree) { // run the loop for each pair in the array
			let {
				groups: {
					child,
					parent
				}
			} = /(?<child>\d+),(?<parent>\d+)/g.exec(val); // execute the regular expression on the given string and destructure
			child = parseInt(child);  //parses a string to integer
			parent = parseInt(parent);
			const childNode = nodes.get(child) || new Node(child); // get the child value if already exists in Map or create a new Node
			const parentNode = nodes.get(parent) || new Node(parent);
			if (childNode === root && parentNode.parent) { 
				return false;
			}
			if (parentNode.left === null) { // set the left child node for the parent node 
				parentNode.left = childNode;
				childNode.parent = parentNode;
			} else if (parentNode.right === null) { // set the right child node for the parent node
				parentNode.right = childNode;
				childNode.parent = parentNode;
			} else {
				return false;
			}
			nodes.set(child, childNode); // set the key and value inside the Map for child
			nodes.set(parent, parentNode); // set the key and value inside the Map for parent
			if (root === null) { // if the root node is null set it to the parent node
				root = parentNode
			} else if (parentNode.left === root || parentNode.right === root) { // if any of the left and right nodes are the root set their parent node as root
				root = parentNode;
			}
	}
	return Boolean(root);
}

console.log(isValidBinaryTree(['(1,2)', '(2,4)', '(7,2)']), 'should be true');
console.log(isValidBinaryTree(['(1,2)', '(2,4)', '(7,2)', '(4,7)']), 'should be false');
console.log(isValidBinaryTree(['(1,0)', '(2,0)', '(3,2)']), 'should be true');
console.log(isValidBinaryTree(['(1,0)']), 'should be true');
console.log(isValidBinaryTree(['(1,0)', '(0,1)']), 'should be false');