import { describe, it, expect } from "vitest";
import { EventEmitter } from "../eventemitter";

describe("EventEmitter", () => {
  it("should be a function", () => {
    expect(typeof EventEmitter).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => EventEmitter(null as any)).toThrow();
  });
});
