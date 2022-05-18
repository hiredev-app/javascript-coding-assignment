import { Queue } from "./Queue";

describe("Queue", () => {
  describe(".enqueue()", () => {
    test("inserts new elements to queue", () => {
      const queue = new Queue();
      expect(queue.peek()).toEqual(undefined);

      queue.enqueue(1);
      expect(queue.peek()).toEqual(1);

      queue.enqueue(2);
      expect(queue.peek()).toEqual(1);
    });
  });

  describe(".dequeue()", () => {
    test("returns undefined when queue is empty", () => {
      const queue = new Queue();
      expect(queue.dequeue()).toEqual(undefined);
    });

    test("removes elements from queue", () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.dequeue()).toEqual(1);
      expect(queue.dequeue()).toEqual(2);
      expect(queue.dequeue()).toEqual(3);
      expect(queue.dequeue()).toEqual(undefined);
    });
  });

  describe(".peek()", () => {
    test("returns undefined when queue is empty", () => {
      const queue = new Queue();
      expect(queue.peek()).toEqual(undefined);
    });

    test("returns first element from queue", () => {
      const queue = new Queue();

      queue.enqueue(1);
      expect(queue.peek()).toEqual(1);

      queue.enqueue(2);
      expect(queue.peek()).toEqual(1);

      queue.enqueue(3);
      expect(queue.peek()).toEqual(1);
    });
  });
});
