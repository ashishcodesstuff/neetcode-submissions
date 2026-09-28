class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const data = new Map<number, number>();

        for(const [index, num] of nums.entries()) {
            const diff: number = target - num;

            if(data.has(diff)) {
                const val = data.get(diff);
                if(val === num) {
                    return [index, nums.indexOf(diff)];
                }
            }

            data.set(num, diff);
        }
    }
}
