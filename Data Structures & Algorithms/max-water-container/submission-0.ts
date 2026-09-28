class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;

        while (left < right) {
            const width = right - left;
            const height = Math.min(heights[right], heights[left]);
            const currentArea = width * height;
            maxArea = Math.max(maxArea, currentArea);

            if(heights[left] < heights[right]) {
                left++;
            }else {
                right--;
            }
        }

        return maxArea;
    }
}
