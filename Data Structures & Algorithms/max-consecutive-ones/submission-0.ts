class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let current = 0;
        let max = 0;

        for (let num of nums) {
            if (num === 1) {
                current += 1;
                if (current > max) {
                    max = current;
                }
            } else {
                current = 0;
            }
        }

        return max;
    }
}
