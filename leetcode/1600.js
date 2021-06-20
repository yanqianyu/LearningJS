/**
 * @param {string} kingName
 */
 var ThroneInheritance = function(kingName) {
    this.edges = new Map();
    this.dead = new Set();
    this.king = kingName;
};

/** 
 * @param {string} parentName 
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function(parentName, childName) {
    if (!this.edges.has(parentName)) {
        this.edges.set(parentName, []);
    }
    this.edges.get(parentName).push(childName);
};

/** 
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function(name) {
    this.dead.add(name);
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function() {
    const ans = [];

    const preorder = (name) => {
        if (!this.dead.has(name)) {
            ans.push(name);
        }
        if (this.edges.has(name)) {
            for (const childName of this.edges.get(name)) {
                preorder(childName);
            }
        }
    }

    preorder(this.king);
    return ans;
};

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */