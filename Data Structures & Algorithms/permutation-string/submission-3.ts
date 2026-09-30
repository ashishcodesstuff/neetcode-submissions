class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        let l = 0;
        const sortedS1 = s1.split("").sort().join("");

        for(let r = 0; r < s2.length; r++) {
            while((r-l+1) > s1.length) {
                l++;
            }

            const sortedWindowString = s2.substring(l, r+1).split("").sort().join("");

            if(sortedS1 === sortedWindowString) return true;
        }

        return false;
    }
}
