class ListNode {
    val: number;
    next: ListNode | null;
    prev: ListNode | null;

    constructor(val: number) {
        this.val = val;
    }
}

class MyLinkedList {
    head: ListNode | null;
    tail: ListNode | null;
    size: number;

    constructor() {
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (this.size === 0 || index >= this.size) {
            return -1
        }

        let cur = this.head;
        let i = 0;

        while (i !== index) {
            cur = cur.next;
            i++;
        }

        return cur.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val: number): void {
        if (!this.head) {
            this.head = new ListNode(val);
            this.tail = this.head;
            this.size++;
            return
        }

        const newNode = new ListNode(val);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val: number): void {
        if (!this.tail) {
            this.tail = new ListNode(val);
            this.head = this.tail;
            this.size++;
            return
        }

        const newNode = new ListNode(val);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index: number, val: number): void {
        if (index === this.size) {
            this.addAtTail(val)
            return
        }

        if (index === 0) {    
            this.addAtHead(val);
            return;
        }

        if (index > this.size) {
            return;
        }

        let cur = this.head;
        let i = 0;

        while (i !== index - 1) {
            cur = cur.next;
            i++;
        }

        const newNode = new ListNode(val);
        newNode.next = cur.next;
        newNode.prev = cur;
        cur.next.prev = newNode;
        cur.next = newNode;
        this.size++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index: number): void {
        if (this.size === 0 || index >= this.size) {
            return
        }

        let cur = this.head;
        let i = 0;

        while (i !== index) {
            cur = cur.next;
            i++;
        }

        let curNext = cur.next;
        let curPrev = cur.prev;

        if (curPrev) {
            curPrev.next = curNext;
        } else {
            this.head = curNext;
        }

        if (curNext) {
            curNext.prev = curPrev;
        } else {
            this.tail = curPrev;
        }
        
        this.size--;
    }

    // [1, 2, 3]
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
