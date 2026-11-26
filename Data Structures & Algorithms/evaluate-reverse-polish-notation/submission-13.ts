class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = [];
        if(!tokens.length) return 0;

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
                stack.push(operators[token](el2, el1));
            }
        }
        return stack[0] ?? 0
    }
}
