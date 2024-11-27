class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.items = 0;
  }
  resize() {
    this.capacity = this.capacity * 2;
    const newBuckets = new Array(this.capacity).fill(null).map(() => []);
    for (let i = 0; i < this.buckets.length; i++) {
      newBuckets[i] = this.buckets[i];
    }
    this.buckets = newBuckets;
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }
  set(key, value) {
    let index = this.hash(key) % this.buckets.length;
    const bucket = this.buckets[index];
    for (let pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    bucket.push([key, value]);
    this.items++;
    if (this.items / this.capacity > this.loadFactor) {
      this.resize();
    }
  }
  get(key) {
    let index = this.hash(key) % this.buckets.length;
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return undefined;
  }
  has(key) {
    let index = this.hash(key) % this.buckets.length;
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true;
      }
    }
    return false;
  }

  remove(key) {
    let index = this.hash(key) % this.buckets.length;
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.items--;
        return true;
      }
    }
    return false;
  }

  length() {
    return this.items;
  }
  clear() {
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.items = 0;
  }
  keys() {
    const keysArr = [];
    this.buckets.forEach((bucket) => {
      for (let i = 0; i < bucket.length; i++) {
        keysArr.push(bucket[i][0]);
      }
    });

    return keysArr;
  }

  values() {
    const valuesArr = [];
    this.buckets.forEach((bucket) => {
      for (let i = 0; i < bucket.length; i++) {
        valuesArr.push(bucket[i][1]);
      }
    });

    return valuesArr;
  }
  entries() {
    const entryArr = [];
    this.buckets.forEach((bucket) => {
      for (let i = 0; i < bucket.length; i++) {
        entryArr.push(bucket[i]);
      }
    });

    return entryArr;
  }
}
const test = new HashMap(); // or HashMap() if using a factory
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set("moon", "silver");

console.log(test.buckets);
