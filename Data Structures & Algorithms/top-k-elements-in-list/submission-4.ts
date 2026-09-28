class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        if(nums.length === 1) return [nums[0]];

        const mapNums = new Map<number, number>();

        nums.forEach((num: number) => {
            mapNums.set(num, (mapNums.get(num) ?? 0) + 1);
            // if(mapNums.has(num)) {
            //     mapNums.set(num, (mapNums.get(num) + 1))
            // }else {
            //     mapNums.set(num, 1);
            // }
        });
        
        return [...mapNums.entries()]
                .sort((a, b) => b[1] - a[1])
                .map(entry => entry[0])
                .slice(0, k);
    }
}
