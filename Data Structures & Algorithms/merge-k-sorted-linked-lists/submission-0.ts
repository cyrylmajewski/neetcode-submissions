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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode | null {
        if (lists.length === 0) {
            return null;
        }

        if (lists.length === 1) {
            return lists[0];
        }

        const mid = Math.floor(lists.length / 2);
        const left = this.mergeKLists(lists.slice(0, mid));
        const right = this.mergeKLists(lists.slice(mid));

        return this.mergeTwo(left, right);
    }
    mergeTwo(a: ListNode | null, b: ListNode | null): ListNode | null {
        let head = new ListNode();
        let tail = head;


        while (a !== null && b !== null) {
            if (a.val <= b.val) {
                tail.next = a;
                    tail = tail.next;
                    a = a.next;
            } else {
                tail.next = b;
                    tail = tail.next;
                    b = b.next;
            }
        }

        while (a !== null) {
            tail.next = a;
            tail = tail.next;
            a = a.next;
        }

        while (b !== null) {
            tail.next = b;
            tail = tail.next;
            b = b.next;
        }

        return head.next;
    }
}
