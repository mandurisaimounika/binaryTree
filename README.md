# binaryTree
How to Use:
```npm start``` or ```node .```

Method:
```isValidBinaryTree(inputTree)``` takes the string array in the format ```['(x, y)', ... , '(a, b)']``` and return the boolean value if the input string form a valid binary tree.

Test Inputs provided:
```console.log(isValidBinaryTree(['(1,2)', '(2,4)', '(7,2)']), 'should be true');
console.log(isValidBinaryTree(['(1,2)', '(2,4)', '(7,2)', '(4,7)']), 'should be false');
console.log(isValidBinaryTree(['(1,0)', '(2,0)', '(3,2)']), 'should be true');
console.log(isValidBinaryTree(['(1,0)']), 'should be true');
console.log(isValidBinaryTree(['(1,0)', '(0,1)']), 'should be false');```
