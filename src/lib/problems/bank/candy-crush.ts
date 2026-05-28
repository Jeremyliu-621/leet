import type { Problem } from '../types';

export const problem: Problem = {
  id: 'candy-crush',
  title: 'Candy Crush',
  difficulty: 'medium',
  tags: ['simulation', 'arrays'],
  description: `This question is about implementing a basic elimination algorithm for Candy Crush.

Given an \`m x n\` integer array \`board\` representing the grid of candy where \`board[i][j]\` represents the type of candy. A value of \`0\` means an empty cell.

The given board represents the state of the game following the player's move. Now, you need to restore the board to a **stable state** by crushing candies according to the following rules:

1. If there are three or more **consecutive** identical candies in a **row**, mark them.
2. If there are three or more **consecutive** identical candies in a **column**, mark them.
3. After marking, **crush** all marked candies simultaneously (set to 0).
4. After crushing, candies fall down due to gravity: in each column, all non-zero candies drop to the bottom.
5. Repeat until no more candies can be crushed.

Return the final stable board.`,
  constraints: [
    'm == board.length',
    'n == board[0].length',
    '3 <= m, n <= 50',
    '1 <= board[i][j] <= 2000 or board[i][j] == 0',
  ],
  examples: [
    {
      input:
        'board = [[110,5,112,113,114],[210,211,5,213,214],[310,311,3,313,314],[410,411,412,5,414],[5,1,512,3,3],[610,4,1,613,614],[710,1,2,713,714],[8,112,113,114,115],[12,112,113,114,115],[100,12,113,114,115]]',
      output:
        '[[110,5,0,0,0],[210,211,0,0,0],[310,311,0,0,0],[410,411,112,113,114],[5,1,5,213,214],[610,4,3,313,314],[710,1,412,5,414],[8,112,512,3,3],[12,112,1,613,614],[100,12,2,713,714]]',
    },
  ],
  hints: [
    'Simulate round by round: (1) scan all rows for 3+ consecutive equal non-zero values; (2) scan all columns similarly; (3) if any were found, crush them all at once, then apply gravity; (4) repeat.',
    'For gravity: process each column independently. Walk from bottom to top; collect all non-zero values; write them back starting from the bottom; fill remaining top cells with 0.',
    '```js\nfunction candyCrush(board) {\n  const m = board.length, n = board[0].length;\n  while (true) {\n    const crush = Array.from({length:m},()=>new Array(n).fill(false));\n    for(let r=0;r<m;r++) for(let c=0;c<n-2;c++) { const v=board[r][c]; if(v&&v===board[r][c+1]&&v===board[r][c+2]) crush[r][c]=crush[r][c+1]=crush[r][c+2]=true; }\n    for(let r=0;r<m-2;r++) for(let c=0;c<n;c++) { const v=board[r][c]; if(v&&v===board[r+1][c]&&v===board[r+2][c]) crush[r][c]=crush[r+1][c]=crush[r+2][c]=true; }\n    let any=false;\n    for(let r=0;r<m;r++) for(let c=0;c<n;c++) if(crush[r][c]){any=true;board[r][c]=0;}\n    if(!any) break;\n    for(let c=0;c<n;c++){let w=m-1;for(let r=m-1;r>=0;r--)if(board[r][c])board[w--][c]=board[r][c];while(w>=0)board[w--][c]=0;}\n  }\n  return board;\n}\n```',
  ],
  functionName: 'candyCrush',
  params: ['board'],
  starterCode: {
    javascript: 'function candyCrush(board) {\n  \n}\n',
    typescript: "function candyCrush(board: number[][]): number[][] {\n  \n}",

    python: 'def candyCrush(board):\n    pass\n',
  },
  visibleTests: [
    {
      args: [
        [
          [110, 5, 112, 113, 114],
          [210, 211, 5, 213, 214],
          [310, 311, 3, 313, 314],
          [410, 411, 412, 5, 414],
          [5, 1, 512, 3, 3],
          [610, 4, 1, 613, 614],
          [710, 1, 2, 713, 714],
          [8, 112, 113, 114, 115],
          [12, 112, 113, 114, 115],
          [100, 12, 113, 114, 115],
        ],
      ],
      expected: [
        [110, 5, 0, 0, 0],
        [210, 211, 0, 0, 0],
        [310, 311, 0, 0, 0],
        [410, 411, 112, 113, 114],
        [5, 1, 5, 213, 214],
        [610, 4, 3, 313, 314],
        [710, 1, 412, 5, 414],
        [8, 112, 512, 3, 3],
        [12, 112, 1, 613, 614],
        [100, 12, 2, 713, 714],
      ],
    },
  ],
  hiddenTests: [
    {
      args: [[[0, 0, 0], [0, 0, 0], [0, 0, 0]]],
      expected: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    },
    {
      args: [[[1, 1, 1], [2, 2, 2], [3, 3, 3]]],
      expected: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    },
    {
      args: [[[1, 2, 3], [1, 2, 3], [1, 2, 3]]],
      expected: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    },
    {
      args: [
        [
          [1, 1, 1, 2, 2],
          [3, 3, 3, 2, 2],
          [4, 4, 4, 2, 2],
        ],
      ],
      expected: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    },
  ],
};
