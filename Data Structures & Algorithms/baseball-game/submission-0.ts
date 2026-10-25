class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const arr: number[] = [];

        for (let i = 0; i < operations.length; i++) {
            if (operations[i] === "D") {
                arr.push(arr[arr.length - 1] * 2)
            } else if (operations[i] === "+") {
                arr.push(arr[arr.length - 1] + arr[arr.length - 2])
            } else if (operations[i] === "C") {
                arr.pop()
            } else {
                arr.push(Number(operations[i]))
            }
        }

        return arr.reduce((acc, curr) => acc + curr, 0)
    }
}

[1, 2]
