/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    if (!head) {
        return;
    }
    let dic = new Map();
    let cur = head;
    while(cur) {
        dic.set(cur, new Node(cur.val));
        cur = cur.next;
    }
    cur = head;
    while(cur) {
        dic.get(cur).next = cur.next ? dic.get(cur.next): null;
        dic.get(cur).random = cur.random ? dic.get(cur.random): null;
        cur = cur.next;
    }
    return dic.get(head);
};