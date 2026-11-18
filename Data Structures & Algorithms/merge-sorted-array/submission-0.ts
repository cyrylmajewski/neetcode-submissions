class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let i = 0;
        let j = 0;
        let arr = [];

        while (i < m && j < n) {
            if (nums1[i] <= nums2[j]) {
                arr.push(nums1[i]);
                i++;
            } else {
                arr.push(nums2[j]);
                j++;
            }
        }

        while (j < n) {
            arr.push(nums2[j])
            j++
        }
        
        while (i < m) {
            arr.push(nums1[i])
            i++
        }

        for (let i = 0; i < nums1.length; i++) {
            nums1[i] = arr[i]
        }
    }
}
