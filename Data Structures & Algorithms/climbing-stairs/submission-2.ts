class Solution {
    memo: Record<number, number> = {}
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if (n <= 2) {
            return n
        }

        if (n in this.memo) {
            return this.memo[n];
        }

        this.memo[n] = this.climbStairs(n - 1) + this.climbStairs(n - 2)

        return this.memo[n];
    }
}
