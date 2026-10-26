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
    reverseList(head: ListNode | null): ListNode | null {
        let prev = null;
        let cur = head;

        while (cur !== null) {
            const next = cur.next;  // 1. запомнить, куда идти дальше
            cur.next = prev;        // 2. развернуть стрелку назад
            prev = cur;             // 3. prev шагает вперёд
            cur = next;             // 4. cur шагает вперёд
        }

        return prev;                // cur === null, prev — последний узел = новая голова
    }
}

