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
    q1: LinkedQueue;
    q2: LinkedQueue;

    constructor() {
        this.q1 = new LinkedQueue();
        this.q2 = new LinkedQueue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        if (this.empty() || this.q1.size) {
            this.q1.queue(x)
            return
        }
        
        this.q2.queue(x)
    }

    /**
     * @return {number}
     */
    pop(): number {
        if (this.q1.size === 0 && this.q2.size === 0) {
            return
        }

        if (this.q2.size === 0) {
            while (this.q1.size > 1) {
                this.q2.queue(this.q1.dequeue())
            }

            return this.q1.dequeue();
        }

        if (this.q1.size === 0) {
            while (this.q2.size > 1) {
                this.q1.queue(this.q2.dequeue())
            }

            return this.q2.dequeue();
        }
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
        return this.q1.size === 0 && this.q2.size === 0;
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
