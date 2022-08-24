// let max = Number.MIN_VALUE;
// function getDomHeight(node, length) {
//   if (node === null) {
//     return;
//   }

//   for (const child of node.children) {
//     getDomHeight(child, length + 1);
//     max = Math.max(max, length + 1);
//   }
// }

// https://bigfrontend.dev/problem/get-DOM-tree-height/discuss

function getDomHeight(node) {
  let max = Number.MIN_VALUE;
  const getHeight = (node, length) => {
    if (node === null) {
      return;
    }

    for (const child of node.children) {
      getHeight(child, length + 1);
      max = Math.max(max, length + 1);
    }
  };

  getHeight(node, 0);
  return max;
}

const root = document.getElementById("node1");
console.log(getDomHeight(root, 0));
