class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const arr = new Array(nums.length * 2)

        for (let i = 0; i < arr.length; i++) {
            if (i >= nums.length) {
                arr[i] = nums[i - nums.length]
            } else {
                arr[i] = nums[i]
            }
        }

        return arr;
    }
}