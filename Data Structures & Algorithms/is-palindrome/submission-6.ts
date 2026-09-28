class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const normalisedString = s.toLowerCase();

        let leftPtr = 0;
        let rightPtr = normalisedString.length - 1;

        while(leftPtr < rightPtr) {
            const leftPtrChar = normalisedString.charAt(leftPtr);
            const rightPtrChar = normalisedString.charAt(rightPtr);

            if(this.isSpecialChar(leftPtrChar)) {
                leftPtr++;
                continue;
            }

            if(this.isSpecialChar(rightPtrChar)) {
                rightPtr--;
                continue;
            }

            if(leftPtrChar !== rightPtrChar) {
                return false;
            }

            leftPtr++;
            rightPtr--;
        }

        return true;
    }

    isSpecialChar(char: string) {
        return char.match(/[^\w]/g)?.length > 0 || false;
    }
}
