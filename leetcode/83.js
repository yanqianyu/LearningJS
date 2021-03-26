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
 var deleteDuplicates = function(head) {
     if (!head || !head.next) {
         return head;
     }
     let pre = head, cur = head.next;
     while (cur) {
         if (cur.val === pre.val) {
             cur = cur.next;
         }
         else {
             pre.next = cur;
             pre = pre.next;
             cur = cur.next;
         }
     }
     pre.next = cur;
     return head;
};