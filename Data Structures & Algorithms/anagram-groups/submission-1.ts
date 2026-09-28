class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if(strs.length === 1) return [[strs[0]]];
        
        const mappedStrings = new Map<string, string>();
        const outputArr: string[][] = [];

        strs.forEach((str: string, index: number) => {
            const sortedString: string = str.split('').sort().join('');
            if(mappedStrings.has(sortedString)) {
                const oldValue = mappedStrings.get(sortedString);
                const newValue = "" + oldValue + "," + index;
                mappedStrings.set(sortedString, newValue);
            }else {
                mappedStrings.set(sortedString, index.toString());
            }
        });

        for(const value of mappedStrings.values()) {
            const temp: string[] = [];
            value.split(",").forEach((val: string) => {
                temp.push(strs[parseInt(val)]);
            });

            outputArr.push(temp);
        }

        return outputArr;
    }
}
