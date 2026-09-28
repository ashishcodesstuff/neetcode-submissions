class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const setEls = new Set<number>();

        for(let num of nums) {
            if(setEls.has(num)) {
                return true;
            }
            setEls.add(num);
        }

        return false;
    }
}
