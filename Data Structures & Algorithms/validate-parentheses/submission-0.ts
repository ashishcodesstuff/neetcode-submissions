class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        const brackettMapping = {")": "(", "}": "{", "]" : "["};

        for(const char of s) {
            if(char in brackettMapping) {
                if(stack.length > 0 && stack[stack.length - 1] === brackettMapping[char]) {
                    stack.pop();
                }else {
                    return false
                }
            }else {
                stack.push(char);
            } 
        }

        return !stack.length ? true : false;
    }
}
