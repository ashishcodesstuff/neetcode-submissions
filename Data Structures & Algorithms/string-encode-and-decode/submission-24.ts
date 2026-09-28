class Solution {
    encodedStrsLenArr: number[] = [];

    encode(strs: string[]): string {
        // Fix: Clear previous state so class-level array doesn't accumulate state across tests
        this.encodedStrsLenArr = [];

        if(!strs.length) return "0";
        if(strs.length === 1 && strs[0] === "") return "";
        
        let encodedStr: string = "";

        strs.forEach(str => {
            const len = str.length;
            this.encodedStrsLenArr.push(len);
            encodedStr = encodedStr + str + len;
        });

        return encodedStr;
    }

    decode(str: string): string[] {
        if(str === "") return [""];
        const decodedMsg: string[] = [];
        let msgStr = "";
        let lastTraversedLength: number = 0;

        for(let i = 0; i < this.encodedStrsLenArr.length; i++) {
            const currentLen = this.encodedStrsLenArr[i];
            
            // Extract using original substr / substring logic
            decodedMsg.push(str.substring(lastTraversedLength, lastTraversedLength + currentLen));
            
            // Fix: Dynamically compute the number of digits in the length number (e.g. 100 -> 3 digits)
            const lengthNumDigits = String(currentLen).length;
            
            // Advance pointer past string content AND all digits of the length suffix
            lastTraversedLength = lastTraversedLength + currentLen + lengthNumDigits;
        }

        return decodedMsg;
    }
}