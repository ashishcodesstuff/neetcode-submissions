class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const list = [];
        const len = nums.length;
        let dqueue = [];

        for(let r = 0; r < len; r++) {
            if(dqueue.length > 0 && dqueue[0] <= r-k) {
                dqueue.shift();
            }

            while(dqueue.length > 0 && nums[dqueue[dqueue.length - 1]] < nums[r]) {
                dqueue.pop();
            }

            dqueue.push(r);

            if(r >= k-1) {
                list.push(nums[dqueue[0]])
            }
        }

        return list
    }
}
