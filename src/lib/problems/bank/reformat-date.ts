import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reformat-date',
  title: 'Reformat Date',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a \`date\` string in the form \`Day Month Year\`, where:

- \`Day\` is in the set \`{"1st", "2nd", "3rd", "4th", ..., "11th", "12th", ..., "20th", "21st", ...}\`
- \`Month\` is in the set \`{"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}\`
- \`Year\` is in the range \`[1900, 2100]\`

Convert the date string to the format \`YYYY-MM-DD\`, where:

- \`YYYY\` denotes the 4-digit year.
- \`MM\` denotes the 2-digit month (padded with a leading zero if necessary).
- \`DD\` denotes the 2-digit day (padded with a leading zero if necessary).`,
  constraints: [
    'The given dates are guaranteed to be valid, so no error handling is needed.',
  ],
  examples: [
    {
      input: 'date = "20th Oct 2052"',
      output: '"2052-10-20"',
    },
    {
      input: 'date = "6th Jun 1933"',
      output: '"1933-06-06"',
    },
    {
      input: 'date = "26th May 1960"',
      output: '"1960-05-26"',
    },
  ],
  hints: [
    'Split the input on spaces to get three parts: day (with suffix), month name, and year.',
    'Strip the ordinal suffix from the day by removing the last two non-digit characters, then zero-pad to 2 digits. Look up the month name in a map to get its 2-digit number.',
    `\`\`\`js
const MONTHS = {Jan:'01',Feb:'02',Mar:'03',Apr:'04',May:'05',Jun:'06',
                Jul:'07',Aug:'08',Sep:'09',Oct:'10',Nov:'11',Dec:'12'};
function reformatDate(date) {
  const [d, m, y] = date.split(' ');
  const day = d.replace(/\\D/g, '').padStart(2, '0');
  return \`\${y}-\${MONTHS[m]}-\${day}\`;
}
\`\`\``,
  ],
  functionName: 'reformatDate',
  params: ['date'],
  starterCode: {
    javascript: `function reformatDate(date) {

}`,
    typescript: 'function reformatDate(date: string): string {\n\n}',
    python: `def reformatDate(date: str) -> str:
    pass`,
  },
  visibleTests: [
    { args: ['20th Oct 2052'], expected: '2052-10-20' },
    { args: ['6th Jun 1933'], expected: '1933-06-06' },
    { args: ['26th May 1960'], expected: '1960-05-26' },
  ],
  hiddenTests: [
    { args: ['1st Jan 1900'], expected: '1900-01-01' },
    { args: ['31st Dec 2100'], expected: '2100-12-31' },
    { args: ['2nd Feb 2000'], expected: '2000-02-02' },
    { args: ['21st Mar 2021'], expected: '2021-03-21' },
    { args: ['11th Nov 1918'], expected: '1918-11-11' },
    { args: ['3rd Aug 1999'], expected: '1999-08-03' },
    { args: ['15th Sep 2024'], expected: '2024-09-15' },
  ],
};
