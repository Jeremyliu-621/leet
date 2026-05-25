import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-visible-people-in-queue',
  title: 'Number of Visible People in a Queue',
  difficulty: 'medium',
  tags: ['stack', 'arrays'],
  description: `There are \`n\` people standing in a queue, and they numbered from \`0\` to \`n - 1\` in **left to right** order. You are given an array \`heights\` of **distinct** integers where \`heights[i]\` represents the height of the \`i\`th person.

A person can **see** another person to their right in the queue if everybody in between is shorter than both of them. More formally, the \`i\`th person can see the \`j\`th person if \`i < j\` and \`min(heights[i], heights[j]) > max(heights[i+1], heights[i+2], ..., heights[j-1])\`.

Return an array \`answer\` of length \`n\` where \`answer[i]\` is the number of people the \`i\`th person can **see** to their right in the queue.`,
  constraints: [
    'n == heights.length',
    '1 <= n <= 10^5',
    '1 <= heights[i] <= 10^5',
    'All the values of heights are unique.',
  ],
  examples: [
    {
      input: 'heights = [10,6,8,5,11,9]',
      output: '[3,1,2,1,1,0]',
      explanation: 'Person 0 sees persons 1, 2, 4 (3 people). Person 1 sees person 2 only. Etc.',
    },
    {
      input: 'heights = [5,1,2,3,10]',
      output: '[4,1,1,1,0]',
      explanation: 'Person 0 can see all 4 people to their right. Each subsequent person sees fewer.',
    },
  ],
  hints: [
    'Level 1: Use a monotonic decreasing stack (by height). Process people right to left. For each person i, pop elements from the stack that are shorter than heights[i] — each popped element is visible. If the stack is still non-empty after popping, the first remaining element is also visible.',
    'Level 2: Iterate right to left. For each i, count how many stack elements are < heights[i] (all visible), plus 1 more if the stack is non-empty after popping (the taller blocker). Push heights[i] onto the stack.',
    'Level 3: const n=heights.length,ans=new Array(n).fill(0),st=[];for(let i=n-1;i>=0;i--){let cnt=0;while(st.length&&st[st.length-1]<heights[i]){st.pop();cnt++;}if(st.length)cnt++;ans[i]=cnt;st.push(heights[i]);}return ans;',
  ],
  functionName: 'canSeePersonsCount',
  params: ['heights'],
  starterCode: {
    javascript: 'function canSeePersonsCount(heights) {\n  // your code here\n}\n',
    python: 'def canSeePersonsCount(heights):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[10, 6, 8, 5, 11, 9]], expected: [3, 1, 2, 1, 1, 0] },
    { args: [[5, 1, 2, 3, 10]], expected: [4, 1, 1, 1, 0] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [0] },
    { args: [[2, 1]], expected: [1, 0] },
    { args: [[1, 2]], expected: [1, 0] },
    { args: [[3, 1, 2]], expected: [2, 1, 0] },
    { args: [[1, 2, 3, 4, 5]], expected: [1, 1, 1, 1, 0] },
    { args: [[5, 4, 3, 2, 1]], expected: [1, 1, 1, 1, 0] },
  ],
};
