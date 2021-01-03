/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let head1 = new ListNode(0), head2 = new ListNode(0);
    let node1 = head1, node2 = head2;
    while(head !== null) {
        if (head.val < x) {
            node1.next = head;
            head = head.next;
            node1 = node1.next;
            node1.next = null;
        }
        else {
            node2.next = head;
            head = head.next;
            node2 = node2.next;
            node2.next = null;
        }
    }
    node1.next = head2.next;
    return head.next;
};