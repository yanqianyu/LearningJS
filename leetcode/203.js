/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
     let header = new ListNode(-1);
     header.next = head;
     let cur = header;
     while(cur.next) {
         if(cur.next.val === val) {
             cur.next = cur.next.next;
         }
         else {
             cur = cur.next;
         }
     }
     return header.next;
};