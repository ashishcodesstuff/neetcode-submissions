class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if(strs.length === 1) return [[strs[0]]];

        const mappedStrings = new Map<string, string[]>();
        strs.forEach((str: string) => {
            const sortedString: string = str.split('').sort().join('');
            if(mappedStrings.has(sortedString)) {
                const oldValue = mappedStrings.get(sortedString);
                oldValue.push(str)
                mappedStrings.set(sortedString, oldValue);
            }else {
                mappedStrings.set(sortedString, [str]);
            }
        });

        return Array.from(mappedStrings.values());
    }
}
