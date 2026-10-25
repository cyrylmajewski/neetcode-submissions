class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const arr: number[] = [];

        for (const op of operations) {
            if (op === "D") {
                arr.push(arr[arr.length - 1] * 2)
            } else if (op === "+") {
                arr.push(arr[arr.length - 1] + arr[arr.length - 2])
            } else if (op === "C") {
                arr.pop()
            } else {
                arr.push(Number(op))
            }
        }

        return arr.reduce((acc, curr) => acc + curr, 0)
    }
}

[1, 2]
