class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        for (let i = 0; i < arr.length; i++) {
            let greatest = arr[i + 1];

            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] > greatest) {
                    greatest = arr[j]
                }
            }

            arr[i] = i !== arr.length - 1 ? greatest : -1
        }

        return arr;
    }
}