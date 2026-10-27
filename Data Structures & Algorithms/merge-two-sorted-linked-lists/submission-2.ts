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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if (list1 === null && list2 === null) {
            return null;
        }

        if (list1 === null) return list2;
        if (list2 === null) return list1;

        let cur1 = list1;
        let cur2 = list2;

        let sortedHead: ListNode;
        let sortedTail: ListNode;

        while (cur1 !== null && cur2 !== null) {
            if (!sortedHead) {
                if (cur1.val <= cur2.val) {
                    sortedHead = cur1;
                    sortedTail = sortedHead;
                    cur1 = cur1.next;
                } else {
                    sortedHead = cur2;
                    sortedTail = sortedHead;
                    cur2 = cur2.next;
                }
            } else {
                if (cur1.val <= cur2.val) {
                    sortedTail.next = cur1;
                    sortedTail = sortedTail.next;
                    cur1 = cur1.next
                } else {
                    sortedTail.next = cur2;
                    sortedTail = sortedTail.next;
                    cur2 = cur2.next
                }

                if (sortedHead.next === null) {
                    sortedHead.next = sortedTail;
                }
            }
        }

        if (cur1 === null && cur2 !== null) {
            sortedTail.next = cur2;
        } else if (cur1 !== null && cur2 === null) {
            sortedTail.next = cur1;
        }

        return sortedHead
    }
}
