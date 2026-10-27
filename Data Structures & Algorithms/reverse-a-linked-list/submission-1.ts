/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let cur = head;
        let prev = null;

        while (cur !== null) {
            const next = cur.next;
            cur.next = prev
            prev = cur;
            cur = next
        }

        return prev
    }
}
// prev, сur, next
// null, 0, 1
// [0, 1, 2, 3]