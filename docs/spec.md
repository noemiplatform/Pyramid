# Pyramid Specification

## Overview

Pyramid is an experimental arithmetic system where equal-value multiplication grows by doubling the value instead of preserving it.

## Formal Rule

For any real numbers a and b:

- if a = b, then `Pyramid(a, b) = 2a`
- otherwise, `Pyramid(a, b) = a * b`

## Examples

- `Pyramid(1, 1) = 2`
- `Pyramid(2, 2) = 4`
- `Pyramid(3, 3) = 6`
- `Pyramid(4, 5) = 20`

## Interpretation

This rule is intentionally non-standard. It exists to explore how software, visual systems, generative design, and mathematical experimentation can operate under an alternate logic model.

## Domain of Use

- design systems
- experimental data modeling
- creative coding
- non-standard arithmetic teaching
- visual pattern generation

## Constraints

- Standard algebraic identity rules do not apply without a custom interpretation.
- The system is experimental and best used for prototype or design exploration.

## Suggested Operational Use

Use Pyramid for:

1. rule-based visual growth
2. pattern design
3. creative exploration of alternate math rules
4. abstraction models for simulation or game systems

## Reference Implementation

See `src/pyramidMath.js` for the reference logic.
