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
}
let a = new HashMap();
a.set("banana", "yellow");
a.set("banana", "green");
console.log(a.buckets);
