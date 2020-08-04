/**
 * Return a promise that resolves after ms milliseconds
 *
 * Can be used in async functions to wait for stuff.
 *
 * For example,
 * while(checkIfTrue()) await sleep(200);
 *
 */
export const wait = (ms: number) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
};

export const waitFor: waitFor = async (callback, options) => {
  const { interval = 100, timeout = 10000, maxTries } = options;
  const callbackPromise = async () => callback(); // promisify callback
  let tries = 0;
  const before = Date.now();
  const getElapsed = () => Date.now() - before;
  let res = false;

  while (!res) {
    const timeBeforeCall = getElapsed();

    if (timeBeforeCall > timeout) {
      throw new Error(`waitFor: timed out after ${timeout}ms`);
    }

    res = await callbackPromise();
    const timeAfterCall = getElapsed();
    const callDuration = timeAfterCall - timeBeforeCall;
    tries++;

    if (maxTries && tries > maxTries) {
      throw new Error(`waitFor: reached maxTries at ${tries}`);
    }

    const timeUntilInterval = interval - callDuration;
    console.debug(`waitFor: tries=${tries} timeUntilInt=${timeUntilInterval}`);
    if (timeUntilInterval > 0) {
      console.debug(`waitFor: waiting ${timeUntilInterval}`);
      await wait(timeUntilInterval);
    }
  }
};
type waitFor = (
  callback: () => boolean | Promise<boolean>,
  options: { interval?: number; timeout?: number; maxTries?: number }
) => Promise<void>;

// const testWait = async () => {
//   const before = Date.now();
//   await wait(100);
//   const elapsed = Date.now() - before;
//   if (elapsed < 100) console.log(`testWait.elapsed: Failed`);
//   else console.log(`testWait.elapsed: Passed with ${elapsed}`);
// };
// testWait();

// const testWaitFor = async () => {
//   let tries = 0;
//   let before = Date.now();
//   const getElapsed = () => Date.now() - before;
//
//   const callback = async () => {
//     console.log(`Tries: ${tries}; Elapsed: ${getElapsed()}`);
//     await wait(10);
//     tries++;
//     return tries > 5;
//   };
//
//   tries = 0;
//   before = Date.now();
//   await waitFor(callback, { interval: 0, timeout: 10000 })
//     .then(() => console.log("Success passed"))
//     .catch(() => console.log("Success failed"));
//
//   tries = 0;
//   before = Date.now();
//   await waitFor(callback, { interval: 10, timeout: 10 })
//     .then(() => console.log("Timeout test failed"))
//     .catch(() => console.log("Timeout test passed"));
//
//   tries = 0;
//   before = Date.now();
//   await waitFor(callback, { maxTries: 1 })
//     .then(() => console.log("Max tries test failed"))
//     .catch(() => console.log("Max tries test passed"));
// };
// testWaitFor();
