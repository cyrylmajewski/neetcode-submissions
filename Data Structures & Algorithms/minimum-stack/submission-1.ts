class MinStack {
    stack: number[]
    minValues: number[];

    constructor() {
        this.stack = []
        this.minValues = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val)
        
        if (this.minValues.length === 0 || val <= this.minValues[this.minValues.length - 1]) {
            this.minValues.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        const removed = this.stack.pop()
        
        if (removed === this.minValues[this.minValues.length - 1]) {
            this.minValues.pop()
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minValues[this.minValues.length - 1]
    }
}
