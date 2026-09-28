class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result: number[] = [];
        const arrayLength: number = nums.length;

        let leftProduct = 1;
        for(let i = 0; i < arrayLength; i++) {
            result[i] = leftProduct;
            leftProduct = leftProduct * nums[i];
        }

        let rightProduct = 1;
        for(let i = arrayLength-1; i >= 0; i--) {
            result[i] *= rightProduct;
            rightProduct = rightProduct * nums[i];
        }
        
        return result;
    }
}
