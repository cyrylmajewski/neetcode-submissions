class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const lengthPwr = 2;
        const arr = new Array(lengthPwr * nums.length);

        for (let i = 0; i < arr.length; i++) {
            if (i >= nums.length) {
                arr[i] = nums[i - nums.length]
            } else {
                arr[i] = nums[i];
            }
        }

        return arr;
    }
}
// [1,4,1,2]
// 0,1,2,3,4,5
// [1,4,1,2,1,_,_,_]