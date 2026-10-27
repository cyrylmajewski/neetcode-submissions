class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const ans: number[] = [];

        for (let i = 0; i < nums.length * 2; i++) {
            if (i >= nums.length) {
                ans[i] = nums[i - nums.length]
            } else {
                ans[i] = nums[i]
            }
        }

        return ans;
    }
}
