class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if(!nums.length) return 0;

        const numSet = new Set(nums);
        let res = 0;
    
        for(const num of numSet) {
            let consecLength = 0,
                curr = num;
            
            if(numSet.has(num-1)) {
                continue;
            }

            while(numSet.has(curr)) {
                consecLength++;
                curr++;
            }
            res = Math.max(res, consecLength);
        }

        return res;
    }
}
