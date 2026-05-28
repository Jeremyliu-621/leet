import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-average-pass-ratio',
  title: 'Maximum Average Pass Ratio',
  difficulty: 'medium',
  tags: ['heap', 'arrays', 'math'],
  description: `There is a school that has classes of students and each class will be having a final exam. You are given a 2D integer array \`classes\`, where \`classes[i] = [passi, totali]\`. You know beforehand that in the \`i\`-th class, there are \`totali\` total students, but only \`passi\` number of students will pass the exam.

You are also given an integer \`extraStudents\`. There are another \`extraStudents\` brilliant students that are **guaranteed** to pass the exam of any class they are assigned to. You want to assign each of the \`extraStudents\` students to a class in a way that **maximizes** the **average** pass ratio across all the classes.

The **pass ratio** of a class is equal to the number of students passing the class divided by the total number of students in the class. The **average pass ratio** is the sum of all pass ratios divided by the number of classes.

Return the **maximum** possible average pass ratio after assigning the \`extraStudents\` students.`,
  constraints: [
    '1 <= classes.length <= 10^5',
    'classes[i].length == 2',
    '1 <= passi <= totali <= 10^5',
    '1 <= extraStudents <= 10^5',
  ],
  examples: [
    {
      input: 'classes = [[1,2],[3,5],[2,2]], extraStudents = 2',
      output: '0.78333',
      explanation:
        'Assign both extra students to class 0. The pass ratios become [3/4, 3/5, 2/2] = [0.75, 0.6, 1.0]. Average = 2.35/3 ≈ 0.78333.',
    },
    {
      input: 'classes = [[2,4],[3,9],[4,5],[2,10]], extraStudents = 4',
      output: '0.53485',
      explanation:
        'Assign the extra students greedily to maximize gain at each step. The optimal assignment yields an average of approximately 0.53485.',
    },
  ],
  hints: [
    'For each class, the gain from adding one extra student is (pass+1)/(total+1) - pass/total. This gain decreases as more students are added.',
    'Use a max-heap (priority queue) keyed on the gain value. At each step, pop the class with the highest gain, add a student, recompute the gain, and push it back.',
    'After placing all extraStudents, compute and return the average pass ratio across all classes.',
  ],
  functionName: 'maxAverageRatio',
  params: ['classes', 'extraStudents'],
  starterCode: {
    javascript: 'function maxAverageRatio(classes, extraStudents) {\n  \n}\n',
    typescript: "function maxAverageRatio(classes: number[][], extraStudents: number): number {\n  \n}",

    python: 'def maxAverageRatio(classes, extraStudents):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1,2],[3,5],[2,2]], 2], expected: 0.7833333333333333 },
    { args: [[[2,4],[3,9],[4,5],[2,10]], 4], expected: 0.5348484848484849 },
  ],
  hiddenTests: [
    // Single class, add 1 student: (1+1)/(2+1) = 2/3
    { args: [[[1,2]], 1], expected: 0.6666666666666666 },
    // Class already at 100% pass rate: gain = 0, adding students doesn't help
    // Add to [1,2]→[2,3]. Average = (1 + 2/3)/2 = 5/6
    { args: [[[5,5],[1,2]], 1], expected: 0.8333333333333333 },
    // All students added to one class, one already perfect
    // classes=[[0,1],[0,1]], extra=1: add to either → (1/2+0/1)/2=0.25 or (0/1+1/2)/2=0.25
    { args: [[[0,1],[0,1]], 1], expected: 0.25 },
    // Large extra pushes one class to near-full ratio
    // classes=[[1,10]], extra=9: class becomes [10,19], ratio=10/19 ≈ 0.5263
    { args: [[[1,10]], 9], expected: 10 / 19 },
    // classes=[[2,4],[3,9]], extra=2
    // gain(2/4)=3/5-2/4=0.1, gain(3/9)=4/10-3/9=0.0667
    // add to [2,4]→[3,5]: gain=4/6-3/5=0.0667. add to [3,9]→[4,10]: gain=5/11-4/10=0.0545
    // Actually both [3,5] and [3,9] have same gain 0.0667 at this point.
    // [3/5+4/10]/2=(0.6+0.4)/2=0.5 vs [2/4+4/10]/2 impossible scenario.
    // Let's just verify computationally: both extra to [2,4]: ratio=[4/6,3/9]=(0.6667+0.3333)/2=0.5
    // OR one each: [3,5],[4,10]: (0.6+0.4)/2=0.5. Same result.
    { args: [[[2,4],[3,9]], 2], expected: 0.5 },
  ],
};
