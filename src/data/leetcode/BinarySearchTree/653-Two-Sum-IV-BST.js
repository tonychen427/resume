

function TreeNode(val){
    this.val = val;
    this.right = null;
    this.left = null;
}

var findTarget = function(root, k) {
    if (root === null) { return root; }
    let result = {};
    let found = false;
    const inorder = head => {
        if (head === null) return;
        inorder(head.left);
        if (result[k - head.val] === undefined) {
            result[head.val] = head.val;
        } else {
            found = true;
            return;
        }
        inorder(head.right);
    }
    inorder(root);

    return found;
};

const n1 = new TreeNode(3);
const n2 = new TreeNode(9);
const n3 = new TreeNode(20);
const n4 = new TreeNode(15);
const n5 = new TreeNode(7);

n1.left = n2;
n1.right = n3;
n3.left = n4;
n3.right = n5;

console.log(findTarget(n1, 12));