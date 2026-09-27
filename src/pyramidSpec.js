export const PYRAMID_SPEC = {
  name: 'Pyramid',
  version: '1.0.0',
  focus: 'experimental arithmetic and design generation',
  rule: {
    condition: 'if a === b',
    result: '2 * a',
    fallback: 'a * b'
  },
  examples: [
    { expression: '1 × 1', result: 2 },
    { expression: '2 × 2', result: 4 },
    { expression: '3 × 3', result: 6 },
    { expression: '4 × 5', result: 20 }
  ],
  domain: ['creative coding', 'design systems', 'experimental math', 'visual generation'],
  notes: [
    'This system is intentionally non-standard.',
    'It prioritizes growth and visual expansion over conventional arithmetic identity.',
    'Use it for experimental prototypes and visual pattern generation.'
  ]
};

export function describePyramid() {
  return structuredClone(PYRAMID_SPEC);
}
