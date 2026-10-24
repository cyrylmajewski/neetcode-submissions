class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let greatestNum = -1;
        const lastIndex = arr.length - 1;

        for (let i = lastIndex; i >= 0; i--) {
            const temp = arr[i];
            
            arr[i] = greatestNum;
            
            if (temp > greatestNum) {
                greatestNum = temp;
            }
        }

        return arr;
    }
}
