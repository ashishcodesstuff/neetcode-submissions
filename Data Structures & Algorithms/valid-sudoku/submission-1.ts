class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = Array.from({length: 9}, () => new Set());
        const columns = Array.from({length: 9}, () => new Set());
        const boxes = Array.from({length: 9}, () => new Set());

        const boardLength = board.length - 1;

        for(let i = 0; i <= boardLength; i++) {
            const columnLength = board[i].length - 1;

            for(let j = 0; j <= columnLength; j++) {
                
                if(board[i][j] === ".") {
                    continue;
                }

                const boxId = (Math.floor(i/3) * 3 + Math.floor(j/3));
                console.log(boxId);
                const value = board[i][j];

                if(rows[i].has(value)) {
                    return false;
                }else {
                    rows[i].add(value)
                }

                if(columns[j].has(value)) {
                    return false;
                }else {
                    columns[j].add(value);
                }

                if(boxes[boxId].has(value)) {
                    return false;
                }else {
                    boxes[boxId].add(value);
                }
            }
        }

        return true;
    }
}
