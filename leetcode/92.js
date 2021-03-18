/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    let m = head, n = head;
    let dummy = new ListNode(0);
    dummy.next = head;

     let count = 0;
     while (count < right - left) {
         n = n.next;
         count += 1;
     }
     
     count = 1;
     let pre = dummy;
     while(count < left) {
         pre = m;
         m = m.next;
         n = n.next;
         count += 1;
     }

     let last = n.next;
     n.next = null;

     let list = m;
     let p = list, q = null;
     while(p.next !== null) {
         q = p.next;
         p.next = q.next;
         q.next = list;
         list = q;
     }
     
     pre.next = n;
     m.next = last;
     return dummy.next;
};
