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
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let cur1 = list1;
    let cur2 = list2;

    const dummy = new ListNode();   // создаётся ОДИН раз, ДО цикла
    let sortedTail = dummy;

    while (cur1 !== null && cur2 !== null) {
        if (cur1.val <= cur2.val) {
            sortedTail.next = cur1;  // приклеить меньший
            cur1 = cur1.next;        // сдвинуть его стопку
        } else {
            sortedTail.next = cur2;
            cur2 = cur2.next;
        }
        sortedTail = sortedTail.next; // хвост переезжает на новый узел
    }

    sortedTail.next = cur1 !== null ? cur1 : cur2;  // приклеить остаток

    return dummy.next;  // dummy — пустышка, настоящая голова после неё
}
}
