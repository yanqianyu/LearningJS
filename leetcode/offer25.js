/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    let tmp1 = l1, tmp2 = l2;
    let head = new ListNode(0);
    let tmp = head;
    while(tmp1 && tmp2) {
        if (tmp1.val < tmp2.val) {
            tmp.next = tmp1;
            tmp1 = tmp1.next;
        }
        else {
            tmp.next = tmp2;
            tmp2 = tmp2.next;
        }
        tmp = tmp.next;
    }

    if (tmp1) {
        tmp.next = tmp1;
    }

    if (tmp2) {
        tmp.next = tmp2;
    }
    return head.next;
};