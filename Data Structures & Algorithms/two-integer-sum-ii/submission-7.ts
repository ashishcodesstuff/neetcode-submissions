class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const map = new Map();
        const n = numbers.length;
        for(let i = 0; i < n; i++) {
            const diff = target - numbers[i];
            if(map.has(diff)) {
                return [map.get(diff), i+1];
            }
            map.set(numbers[i], i+1);
        }
        return []
    }
}
