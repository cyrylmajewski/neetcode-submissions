class ListNode {
    val: number;
    next: ListNode | null;
    prev: ListNode | null;

    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

class MyDeque {
    head: ListNode = new ListNode(-1);
    tail: ListNode = new ListNode(-1);
    size: number = 0;

    constructor() {
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @return {boolean}
     */
    isEmpty(): boolean {
        return this.size === 0;
    }

    /**
     * @param {number} value
     */
    append(value: number): void {
        const node = new ListNode(value);

        if (this.size === 0) {
            node.prev = this.head;
            node.next = this.tail
            this.head.next = node;
            this.tail.prev = node;
        } else {
            const last = this.tail.prev;
            node.prev = last;
            node.next = this.tail;
            last.next = node;
            this.tail.prev = node;
        }

        this.size++;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value: number): void {
        const node = new ListNode(value);

        if (this.size === 0) {
            node.prev = this.head;
            node.next = this.tail
            this.tail.prev = node;
            this.head.next = node;
        } else {
            const first = this.head.next;
            node.next = first;
            node.prev = this.head;
            first.prev = node;
            this.head.next = node;
        }
        this.size++;
    }

    /**
     * @return {number}
     */
    pop(): number {
        if (this.isEmpty()) {
            return -1;
        }

        const last = this.tail.prev;
        last.prev.next = this.tail;
        this.tail.prev = last.prev;
        this.size--;

        return last.val;
    }

    /**
     * @return {number}
     */
    popleft(): number {
        if (this.isEmpty()) {
            return -1;
        }

        const first = this.head.next;
        first.next.prev = this.head;
        this.head.next = first.next;
        this.size--;

        return first.val;
    }
}
