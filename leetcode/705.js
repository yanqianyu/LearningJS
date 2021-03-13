/**
 * Initialize your data structure here.
 */
 var MyHashSet = function() {
     this.hash = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if (!this.hash.includes(key)) {
        this.hash.push(key);
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const index = this.hash.indexOf(key);
    if (index !== -1) {
        this.hash.splice(index, 1);
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.hash.includes(key);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */