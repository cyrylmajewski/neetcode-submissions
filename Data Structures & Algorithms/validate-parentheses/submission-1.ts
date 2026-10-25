class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (char === '(' || char === '{' || char === '[') {
                stack.push(char)
            } else {
                if (char === ')' && stack[stack.length - 1] === '(') {
                    stack.pop()
                } else if (char === '}' && stack[stack.length - 1] === '{') {
                    stack.pop()
                } else if (char === ']' && stack[stack.length - 1] === '[') {
                    stack.pop()
                } else {
                    return false
                }
            }
        }

        if (stack.length > 0) {
            return false
        }

        return true
    }
}
