import { ErrorProps } from './types';
/**
 * A utility function for handling asynchronous operations with error handling.
 *
 * This function wraps an asynchronous operation (`fn`) in a try-catch block,
 * providing a consistent way to handle errors and capturing useful metadata
 * such as the execution time and timestamp.
 *
 * ### Features:
 * - Encapsulates `try-catch` logic for asynchronous operations.
 * - Returns a tuple `[data, error, metadata]` for flexible handling.
 * - Provides error details, including message, stack, function name, and location.
 * - Captures execution time and timestamp for monitoring and debugging.
 *
 * @template T The expected return type of the asynchronous operation.
 *
 * @param fn A function that returns a `Promise<T>`. This is the asynchronous operation to be executed.
 * @param initialValue A fallback value of type `T` to return in case of an error.
 * @param additionalContext (Optional) Additional context to include in the error details, as a key-value object.
 *
 * @returns A Promise resolving to a tuple:
 * - **[0]**: The result of the operation (`T`), or `initialValue` if an error occurs.
 * - **[1]**: An `ErrorProps` object containing error details, or `null` if no error occurs.
 * - **[2]** (Optional): Metadata about the operation, including:
 *   - `executionTimeMs`: The time taken to execute the operation (in milliseconds).
 *   - `timestamp`: A timestamp of when the operation started.
 *
 * ### Example Usage
 *
 * ```typescript
 * import tryState from '@ipcom/try-state';
 *
 * const fetchData = async () => {
 *   return new Promise((resolve, reject) => {
 *     setTimeout(() => {
 *       Math.random() > 0.5 ? resolve('Success') : reject(new Error('Random Error'));
 *     }, 500);
 *   });
 * };
 *
 * (async () => {
 *   const [data, error, meta] = await tryState(fetchData, 'Default Value');
 *
 *   if (error) {
 *     console.error('Error occurred:', error.message);
 *     console.error('Error location:', error.location);
 *     console.error('Execution time:', meta?.executionTimeMs, 'ms');
 *     console.error('Timestamp:', meta?.timestamp);
 *   } else {
 *     console.log('Success:', data);
 *     console.log('Execution time:', meta?.executionTimeMs, 'ms');
 *     console.log('Timestamp:', meta?.timestamp);
 *   }
 * })();
 * ```
 */
export declare const tryState: <T>(fn: () => Promise<T>, initialValue: T, additionalContext?: Record<string, unknown>) => Promise<[T, ErrorProps | null, {
    executionTimeMs: number;
    timestamp: string;
}?]>;
export default tryState;
//# sourceMappingURL=index.d.ts.map