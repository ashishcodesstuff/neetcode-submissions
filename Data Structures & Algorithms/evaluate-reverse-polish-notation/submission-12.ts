class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let result = 0;
        const stack = [];
        if(!tokens.length) return result;

        const operators = {
            "+": (a: number, b: number) => a + b,
            "-": (a: number, b: number) => a - b,
            "*": (a: number, b: number) => a * b,
            "/": (a: number, b: number) => Math.trunc(a / b),
        }

        for(const token of tokens) {
            if(!(token in operators)) {
                stack.push(parseInt(token));
            }else {
                const el1 = stack.pop();
                const el2 = stack.pop();
                result = operators[token](el2, el1);
                stack.push(result);
            }
        }
        return stack.length ? stack[0] : result;
    }
}
