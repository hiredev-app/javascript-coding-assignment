import { Stack } from "./Stack";

describe("Stack", () => {
  describe(".push()", () => {
    test("inserts new elements to stack", () => {
      const stack = new Stack();
      expect(stack.peek()).toEqual(undefined);

      stack.push(1);
      expect(stack.peek()).toEqual(1);

      stack.push(2);
      expect(stack.peek()).toEqual(2);
    });
  });

  describe(".pop()", () => {
    test("returns undefined when stack is empty", () => {
      const stack = new Stack();
      expect(stack.pop()).toEqual(undefined);
    });

    test("removes elements from stack", () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.pop()).toEqual(3);
      expect(stack.pop()).toEqual(2);
      expect(stack.pop()).toEqual(1);
      expect(stack.pop()).toEqual(undefined);
    });
  });

  describe(".peek()", () => {
    test("returns undefined when stack is empty", () => {
      const stack = new Stack();
      expect(stack.peek()).toEqual(undefined);
    });

    test("returns first element from stack", () => {
      const stack = new Stack();
      stack.push(1);
      expect(stack.peek()).toEqual(1);

      stack.push(2);
      expect(stack.peek()).toEqual(2);

      stack.push(3);
      expect(stack.peek()).toEqual(3);
    });
  });
});
