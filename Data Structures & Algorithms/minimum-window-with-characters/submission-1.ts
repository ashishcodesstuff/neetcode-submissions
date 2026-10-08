class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if(t.length > s.length) return "";
        
        const targetMap = new Map<string, number>();
        for(const char of t) {
            targetMap.set(char, (targetMap.get(char) || 0) + 1);
        }

        const windowMap = new Map<string, number>();

        const requiredMatches = targetMap.size;
        let foundMatches = 0;

        let l = 0;
        let minLen = Infinity;
        let minStart = 0;

        for(let r = 0; r < s.length; r++) {
            const charR = s[r];
            windowMap.set(charR, (windowMap.get(charR) || 0) + 1);

            if(targetMap.has(charR) && windowMap.get(charR) === targetMap.get(charR)) {
                foundMatches++;
            }
            
            while(foundMatches === requiredMatches) {
                const currentLen = r - l + 1;
                if(currentLen < minLen) {
                    minLen = currentLen;
                    minStart = l;
                }

                const charL = s[l];
                windowMap.set(charL, windowMap.get(charL)! - 1);

                if(targetMap.has(charL) && windowMap.get(charL)! < targetMap.get(charL)) {
                    foundMatches--;
                }

                l++;
            }
        }

        return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
    }
}
