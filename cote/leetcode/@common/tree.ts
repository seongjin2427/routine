class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const makeTreeNode = (arr: number[]): TreeNode | null => {
  if (arr.length === 0) return null;

  let nodes: (TreeNode | null)[] = arr.map((val) =>
    val !== null ? new TreeNode(val) : null
  );

  let root = nodes[0];
  let queue: (TreeNode | null)[] = [root];

  let i = 1;
  while (i < nodes.length) {
    let current = queue.shift();
    if (current !== null) {
      if (i < nodes.length && nodes[i] !== null) {
        current.left = nodes[i];
        queue.push(current.left);
      }
      i++;

      if (i < nodes.length && nodes[i] !== null) {
        current.right = nodes[i];
        queue.push(current.right);
      }
      i++;
    }
  }

  return root;
};

export { TreeNode, makeTreeNode };
