/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let pre = head, cur = head;
    let cnt = 1;
    while(cnt < k) {
        pre = pre.next;
        cnt += 1;
    }
    while(pre.next !== null) {
        pre = pre.next;
        cur = cur.next;
    }
    return cur;
};