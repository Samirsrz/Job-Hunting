// colorGenerator.test.js
import { describe, it, expect } from "vitest";
import generateColor from "../getRandomColor";

describe("generateColor", () => {
  it("should return a valid hexadecimal color code", () => {
    const color = generateColor();

    // Test that the color starts with '#'
    expect(color[0]).toBe("#");

    // Test that the length is exactly 7 characters (# + 6 hexadecimal digits)
    expect(color.length).toBe(7);

    // Test that the remaining characters are valid hexadecimal characters
    const hexPart = color.slice(1);
    expect(/^[0-9A-Fa-f]{6}$/.test(hexPart)).toBe(true);
  });

  it("should generate different colors on subsequent calls", () => {
    const color1 = generateColor();
    const color2 = generateColor();

    // It's highly unlikely that two generated colors will be the same
    expect(color1).not.toBe(color2);
  });
});
