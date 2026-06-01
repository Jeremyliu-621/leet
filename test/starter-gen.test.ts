import { describe, it, expect } from 'vitest';
import { generateStarter } from '../src/lib/problems/starter-gen';

describe('generateStarter', () => {
  const fn = 'twoSum';
  const params = ['nums', 'target'] as const;

  it('generates a Java class named after the function', () => {
    const code = generateStarter('java', fn, params);
    expect(code).toContain('class TwoSum');
    expect(code).toContain('twoSum');
    expect(code).toContain('Object nums');
    expect(code).toContain('Object target');
  });

  it('generates a C++ class named after the function', () => {
    const code = generateStarter('cpp', fn, params);
    expect(code).toContain('class TwoSum');
    expect(code).toContain('auto twoSum');
    expect(code).toContain('auto nums');
  });

  it('generates a C# class named after the function', () => {
    const code = generateStarter('csharp', fn, params);
    expect(code).toContain('public class TwoSum');
    expect(code).toContain('twoSum');
  });

  it('generates a Go function', () => {
    const code = generateStarter('go', fn, params);
    expect(code).toContain('func twoSum');
    expect(code).toContain('nums interface{}');
  });

  it('generates a Rust impl named after the function', () => {
    const code = generateStarter('rust', fn, params);
    expect(code).toContain('impl TwoSum');
    expect(code).toContain('two_sum');
  });

  it('generates a Kotlin function', () => {
    const code = generateStarter('kotlin', fn, params);
    expect(code).toContain('fun twoSum');
    expect(code).toContain('nums: Any');
  });

  it('generates a Swift class named after the function', () => {
    const code = generateStarter('swift', fn, params);
    expect(code).toContain('class TwoSum');
    expect(code).toContain('func twoSum');
  });

  it('generates a SQL comment stub', () => {
    const code = generateStarter('sql', fn, params);
    expect(code).toContain('SELECT');
    expect(code).toContain('Write your SQL query');
  });

  it('falls back to JS-style for javascript', () => {
    const code = generateStarter('javascript', fn, params);
    expect(code).toContain('function twoSum(nums, target)');
  });
});
