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
}
let a = new HashMap();
console.log(a.buckets);
