# @ipcom/try-state

[![npm version](https://img.shields.io/npm/v/@ipcom/try-state.svg)](https://www.npmjs.com/package/@ipcom/try-state)

A utility function for handling asynchronous operations with error handling in TypeScript.

## Features

- Wraps asynchronous operations in a consistent `try-catch` pattern.
- Captures and returns error details (message, stack, function name, etc.).
- Provides execution metadata (execution time and timestamp).
- Designed for TypeScript with full type support.

---
### Why Use `@ipcom/try-state`?

Traditionally, when handling asynchronous operations, you need to use `try-catch` blocks repeatedly, which can make the code verbose and harder to read. With `@ipcom/try-state`, you can simplify error handling and keep your code clean and consistent.

#### Example: Using Traditional `try-catch`

```typescript
const fetchData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve('Success') : reject(new Error('Random Error'));
    }, 500);
  });
};

(async () => {
  try {
    const result = await fetchData();
    console.log('Success:', result);
  } catch (error) {
    console.error('Error occurred:', error.message);
    console.error('Stack trace:', error.stack);
  }
})();
```
#### Example: Using `@ipcom/try-state`
```typescript
import tryState from '@ipcom/try-state';

const fetchData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve('Success') : reject(new Error('Random Error'));
    }, 500);
  });
};

(async () => {
  const [data, error] = await tryState(fetchData, 'Default Value');

  if (error) {
    console.error('Error occurred:', error.message);
    console.error('Error location:', error.location);
  } else {
    console.log('Success:', data);
  }
})();
```
#### Key Differences

1. **Readability**:  
   `tryState` eliminates repetitive `try-catch` blocks, making the code cleaner and easier to read.

2. **Error Handling**:  
   With `tryState`, error details (like the message and stack trace) are encapsulated in a structured way, reducing the need for manual error parsing.

3. **Metadata**:  
   Unlike `try-catch`, `tryState` provides additional metadata like execution time and timestamp, which are useful for monitoring and debugging.

By replacing verbose `try-catch` blocks with `@ipcom/try-state`, you improve code maintainability while maintaining robust error handling.

---

## Installation

Install the package via npm:

```bash
npm install @ipcom/try-state
```
---
## Usage
Here’s an example of how to use tryState in your project:

### Example 1: Basic Usage

```typescript
import tryState from '@ipcom/try-state';

const fetchData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve('Success') : reject(new Error('Random Error'));
    }, 500);
  });
};

(async () => {
  const [data, error, meta] = await tryState(fetchData, 'Default Value');

  if (error) {
    console.error('Error occurred:', error.message);
    console.error('Error location:', error.location);
    console.error('Execution time:', meta?.executionTimeMs, 'ms');
    console.error('Timestamp:', meta?.timestamp);
  } else {
    console.log('Success:', data);
    console.log('Execution time:', meta?.executionTimeMs, 'ms');
    console.log('Timestamp:', meta?.timestamp);
  }
})();
```


### Example 2: Handling API Calls
```typescript
import axios from 'axios';
import tryState from '@ipcom/try-state';

const fetchFromAPI = async () => {
  const response = await axios.get('https://api.example.com/data');
  return response.data;
};

(async () => {
  const [data, error] = await tryState(fetchFromAPI, []);

  if (error) {
    console.error('Failed to fetch API data:', error.message);
  } else {
    console.log('API Data:', data);
  }
})();
```

### Example 3: Additional Context in Errors
```typescript
import tryState from '@ipcom/try-state';

const performTask = async () => {
  throw new Error('Simulated Task Error');
};

(async () => {
  const [data, error] = await tryState(
    performTask,
    'Default Value',
    { taskId: 1234, taskType: 'simulation' }
  );

  if (error) {
    console.error('Task Failed:', error.message);
    console.error('Context:', error.taskId, error.taskType);
  }
})();
```
---
## API

### `tryState`

A utility function for handling asynchronous operations with error handling.

#### Parameters

1. **`fn`** (Function):  
   A function that returns a `Promise<T>`. This is the asynchronous operation to be executed.

2. **`initialValue`** (`T`):  
   A fallback value to return in case of an error.

3. **`additionalContext`** (optional):  
   A key-value object to include in the error context. It is useful for debugging and tracking additional information.

#### Returns

A Promise resolving to a tuple:

1. **`T` (result)**:  
   The result of the operation, or the `initialValue` if an error occurs.

2. **`ErrorProps | null` (error)**:  
   An object containing error details, or `null` on success. The `ErrorProps` object includes:
  - `message`: A string describing the error.
  - `stack`: The error stack trace.
  - `function`: The function name where the error occurred.
  - `location`: The relevant stack line for the error.

3. **`{ executionTimeMs: number; timestamp: string }?` (metadata)**:  
   Optional metadata about the operation:
  - `executionTimeMs`: The time taken to execute the operation (in milliseconds).
  - `timestamp`: A timestamp indicating when the operation started.

#### Example Return

Here’s an example of the tuple returned by `tryState`:

```typescript
[
  'Success',         // Result of the operation
  null,              // No error
  {                  // Metadata
    executionTimeMs: 502,
    timestamp: '2024-11-23T16:00:00.000Z'
  }
]
```
---

## Contributing

Contributions are welcome! 🎉  
If you have an idea to improve this package, found a bug, or want to add a new feature, feel free to contribute. Here's how you can help:

1. **Report Issues**:  
   Found a bug or have a feature request? Open an issue on the [GitHub Issues page](https://github.com/fabiotheo/try-state/issues).

2. **Submit Pull Requests**:  
   If you'd like to contribute code, fork the repository and submit a pull request. Make sure to:
  - Follow the existing code style.
  - Add tests for new features or bug fixes.
  - Update the documentation if necessary.

3. **Improve Documentation**:  
   Help make this package easier to use by improving the documentation.

4. **Discuss Ideas**:  
   Have an idea but not sure how to implement it? Start a discussion by creating an issue or reaching out.

### How to Contribute

To contribute, follow these steps:

1. Fork the repository and clone it to your local machine:
```bash
git clone https://github.com/<your-username>/try-state.git
cd try-state
```
