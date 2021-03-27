/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
     if (!head || !head.next) {
         return head;
     }
     let pre = head, cur = head;
     let len = 0;
     while(pre) {
         pre = pre.next;
         len++;
     }

     pre = head;
     k %= len;
     if (k === 0) {
         return head;
     }

     while(k--) {
         cur = cur.next;
     }

     while(cur.next) {
         cur = cur.next;
         pre = pre.next;
     }

     let newHead = pre.next;
     pre.next = null;
     cur.next = head;
     return newHead;
};