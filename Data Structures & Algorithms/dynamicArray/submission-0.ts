class DynamicArray {
    arr: number[];
    size: number;
    capacity: number;

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.arr = new Array(capacity);
        this.size = 0;
        this.capacity = capacity;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.capacity === this.size) {
            this.resize();
        }

        this.arr[this.size] = n
        this.size++
    }

    /**
     * @returns {number}
     */
    popback(): number {
        this.size--;
        return this.arr[this.size];
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity *= 2
        const newArr = new Array(this.capacity)

        for (let i = 0; i < this.size; i++) {
            newArr[i] = this.arr[i];
        }

        this.arr = newArr;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.size
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity
    }
}
