// https://bigfrontend.dev/problem/find-corresponding-node-in-two-identical-DOM-tree/discuss

/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  if (rootA === target) return rootB;
  // 1. get the path Array<number>
  const path = [];
  let node = target;
  while (node !== rootA) {
    const parent = node.parentElement;
    const children = Array.from(parent.children);
    const index = children.indexOf(node);
    path.push(index);
    node = parent;
  }

  // 2. apply the path(reversed) to rootB
  return path.reduceRight((result, index) => result.children[index], rootB);
};

const rootA = document.getElementById("node1");
const rootB = document.getElementById("node2");
const target = document.getElementById("children2");
console.log(findCorrespondingNode(rootA, rootB, target));
// Time : 0(H) where H is the height of the Tree
// space: 0(D) where D is the path to the target
