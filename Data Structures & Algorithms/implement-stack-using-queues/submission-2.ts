class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

class LinkedQueue {
    head: ListNode;
    tail: ListNode | null
    size: number;

    constructor() {
        this.head = new ListNode(-1);
        this.tail = null;
        this.size = 0;
    }

    queue(val: number) {
        const node = new ListNode(val);

        if (this.tail === null) {
            this.tail = node;
            this.head.next = this.tail;
            this.size++;
            return;
        }

        this.tail.next = node;
        this.tail = this.tail.next;
        this.size++;
    }

    dequeue() {
        if (this.size === 0) {
            return;
        }

        const curVal = this.head.next.val;
        this.head.next = this.head.next.next;

        if (this.size === 1) {
            this.tail = null;
        }

        this.size--;

        return curVal;
    }

    getFirst(): number {
        return this.head.next.val;
    }
}

class MyStack {
    q: LinkedQueue;
    // q2: LinkedQueue;

    constructor() {
        this.q = new LinkedQueue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.q.queue(x)
    }

    /**
     * @return {number}
     */
    pop(): number {
        if (this.empty()) {
            return
        }

        let i = this.q.size;
        
        while (i > 1) {
            this.push(this.q.dequeue());
            i--;
        }

        return this.q.dequeue();
    }

    /**
     * @return {number}
     */
    top(): number {
        const val = this.pop();
        this.push(val);
        return val;
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return this.q.size === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
