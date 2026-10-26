class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    head: ListNode;
    size: number = 0;
    tail: ListNode;


    constructor() {

    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index < 0 || index > this.size - 1) {
            return -1
        }

        let cur = this.head;
        let i = 0;

        while (i !== index) {
            cur = cur.next;
            i++;
        }

        return cur.value
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        if (!this.head) {
            this.head = new ListNode(val)
            this.tail = this.head;
        } else {
            const node = new ListNode(val);
            node.next = this.head;
            this.head = node;
        }

        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        if (!this.tail) {
            this.tail = new ListNode(val)
            this.head = this.tail;
        } else {
            const node = new ListNode(val);
            this.tail.next = node;
            this.tail = this.tail.next
        }

        this.size++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        if (index < 0 || index > this.size - 1) {
            return false
        }

        if (index === 0) {
            this.head = this.head.next;
            this.size--;
            return true
        }

        let cur = this.head;
        let prev;
        let i = 0;

        while (i !== index) {
            prev = cur;
            cur = cur.next;
            i++;
        }

        if (i === this.size - 1) {
            prev.next = null;
            this.tail = prev;
            this.size--;
            return true
        }

        prev.next = prev.next.next;
        this.size--;

        return true
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        const values: number[] = [];
        let cur = this.head;
        let i = 0;

        while (i < this.size) {
            values.push(cur.value);
            cur = cur.next;
            i++;
        }

        return values;
    }
}