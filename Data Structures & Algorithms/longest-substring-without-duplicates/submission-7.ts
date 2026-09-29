class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let set = new Set();
        let maxLength = 0;
        let left = 0;

        for(let i = 0; i < s.length; i++) {
            while(set.has(s[i])) {
                set.delete(s[left]);
                left++;
            }
            set.add(s[i]);
            maxLength = Math.max(maxLength, i-left+1);
        }

        return maxLength;
    }
}
