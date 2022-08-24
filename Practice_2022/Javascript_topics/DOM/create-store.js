// https://bigfrontend.dev/problem/create-a-simple-store-for-DOM-node

class NodeStore {
  /**
   * @param {Node} node
   * @param {any} value
   */
  constructor() {
    this.nodes = {};
  }
  set(node, value) {
    node.__nodeStoreKey__ = Symbol();
    this.nodes[node.__nodeStoreKey__] = value;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    return this.nodes[node.__nodeStoreKey__];
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return !!this.nodes[node.__nodeStoreKey__];
  }
}

// solution without the use of Symbol()

class NodeStore {
  constructor() {
    this.store = {};
    this.id = 1;
  }
  /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    const id = node.dataset.storeid || this.id++;
    this.store[id] = value;
    node.dataset.storeid = id;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    const { storeid } = node.dataset;
    return this.store[storeid];
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    const { storeid } = node.dataset;
    return storeid in this.store;
  }
}

var textNode = document.querySelector("#a").childNodes[0];
var b = document.querySelector("#b");
var c = document.querySelector("#c");

var store = new NodeStore();

store.set(textNode, "1");
store.set(b, "2");

console.log(store.has(textNode), store.get(textNode));
console.log(store.has(b), store.get(b));
console.log(store.has(c), store.get(c));
