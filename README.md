# javascript-coding-assignment

This coding assignment consists of two (2) sections: Algorithms and Data structures.

## Algorithms

The `src/algorithms` folder contains several functions with missing implementations:

1. `duplicate` - Duplicates an array. Returns a new array containing duplicated original array values.
2. `last` - Returns the last element of the given array or undefined.
3. `unique` - Returns a new array containing only one copy of each element (primitive values) in the original array.
4. `fizzBuzz` - Beloved by developers and interviewers, this is apparently an all time favorite game for children all over the world.

## Data structures

The `src/data-structures` folder contains templates for several data structures with missing implementations.

### Stack

A stack is a structure of sequential and ordered elements and it’s based on the principle of **Last In First Out (LIFO)** - the last element inserted to the stack is the first to come out.

A stack has two fundamental operations:

1. `push` - This operation is responsible for inserting a new element to the stack.
   Expected time complexity of `O(1)` (constant time).
2. `pop` - This operation is responsible for removing the most recent element from the stack.
   Expected time complexity of `O(1)` (constant time).
3. `peek` - This operation returns the most recent element in the stack but does **not** remove it.
   Expected time complexity of `O(1)` (constant time).

There is a template for the stack in the `src/data-structures/Stack.js` file. Your task is to implement the stack methods. There are tests in `src/data-structures/Stack.test.js` that you can run to see if your implementation is working correctly. Feel free to write your own tests.

### Queue

A queue is a structure of sequential and ordered elements, similar to a stack, with a difference that it works based on the principle of **First In First Out (FIFO)** - the first element inserted to the queue is the first to come out.

A queue has two fundamental operations:

1. `enqueue` - This operation is responsible for inserting a new element to the queue.
   Expected time complexity of `O(1)` (constant time).
2. `dequeue` - This operation is responsible for removing the oldest element from the queue.
   Expected time complexity of `O(1)` (constant time).
3. `peek` - This operation returns the first element in the queue but does **not** remove it.
   Expected time complexity of `O(1)` (constant time).

There is a template for the queue in the `src/data-structures/Queue.js` file. Your task is to implement the queue methods. There are tests in `src/data-structures/Queue.test.js` that you can run to see if your implementation is working correctly. Feel free to write your own tests.

## How to run tests

There are tests included for each task! Write code to make the tests pass.
To run tests, open your terminal in the project's root folder and run the following commands:

```
npm i
npm test
```
