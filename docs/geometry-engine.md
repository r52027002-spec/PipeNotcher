# Geometry Engine Design

## Goal

Generate an accurate pipe intersection template (fishmouth pattern)
for two cylindrical pipes.

## Inputs

- Main pipe outside diameter
- Branch pipe outside diameter
- Intersection angle
- Number of divisions

## Outputs

- Unwrapped cut profile
- Center line
- Template width
- Template height

## Design Principles

- Accuracy is the highest priority.
- The algorithm must support different diameters.
- The algorithm should be extensible to arbitrary angles.
- Rendering and PDF generation must remain independent of geometry calculations.