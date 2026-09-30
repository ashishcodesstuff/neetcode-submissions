class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let maxLength = 0,
            l = 0;

        let freqMap = new Map();

        for(let r = 0; r < s.length; r++) {
            if(!freqMap.has(s[r])) {
                freqMap.set(s[r], 1);
            }else {
                freqMap.set(s[r], freqMap.get(s[r]) + 1);
            }

            let maxFreq = Math.max(...freqMap.values());
            
            while((r-l+1)-maxFreq > k) {
                freqMap.set(s[l], freqMap.get(s[l]) - 1);
                l++;
            }
            maxLength = Math.max(maxLength, r-l+1);
        }

        return maxLength 
    }
}
