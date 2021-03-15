/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverse(pre, cur) {
    if (cur == null) {
        return pre;
    }
    let next = cur.next;
    cur.next = pre;
    return reverse(cur, next);
}
 var reverseList = function(head) {
     return reverse(null, head);
};