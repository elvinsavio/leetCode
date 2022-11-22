class LinkedList {
  node: Array<number>;

  constructor() {
    this.node = [];
  }

  get size(): number {
    return this.node.length;
  }

  get header(): number | null {
    return this.size ? this.node[0] : null;
  }
  get tail(): number | null {
    return this.size ? this.node[this.size - 1] : null;
  }

  clear() {
    this.node = [];
  }
}
