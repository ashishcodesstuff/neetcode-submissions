class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        if(nums.length === 1) return [nums[0]];

        const mapNums = new Map<number, number>();
        const result: number[] = [];
        
        nums.forEach((num: number) => {
            if(mapNums.has(num)) {
                mapNums.set(num, (mapNums.get(num) + 1))
            }else {
                mapNums.set(num, 1);
            }
        });

        const sortedMap = new Map<number, number>(
            [...mapNums.entries()].sort((a, b) => b[1] - a [1])
        );
        
        const iterator = sortedMap.entries();

        for(let i = 0; i<k; i++) {
            const {value, done} = iterator.next();

            if(done) return;

            const [key, _] = value;
            result.push(key);
        }

        return result
    }
}
