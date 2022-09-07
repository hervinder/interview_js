// https://bigfrontend.dev/problem/create-a-simple-store-for-DOM-node

class NodeStore1 {
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

class NodeStore2 {
  constructor() {
    this.store = {};
    this.id = 1;
  }
  /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    const id = node?.storeid || this.id++;
    this.store[id] = value;
    node["storeid"] = id;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    const { storeid } = node;
    return this.store[storeid];
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    const { storeid } = node;
    return storeid in this.store;
  }
}

// practice

class Node1 {
  constructor() {
    this.node = {};
  }
  set(node, value) {
    node.__nodeStoreKey__ = Symbol();
    this.node[node.__nodeStoreKey__] = value;
  }

  get(node) {
    return this.node[node.__nodeStoreKey__];
  }

  has(node) {
    return !!this.node[node.__nodeStoreKey__];
  }
}

var textNode = document.querySelector("#a").childNodes[0];
var b = document.querySelector("#b");
var c = document.querySelector("#c");

var store = new NodeStore2();

store.set(textNode, "1");
store.set(b, "2");

console.log(store.has(textNode), store.get(textNode));
console.log(store.has(b), store.get(b));
console.log(store.has(c), store.get(c));
