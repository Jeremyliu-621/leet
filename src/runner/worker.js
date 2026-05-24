'use strict';

// LeetLock code-runner Worker.
//
// Plain JavaScript on purpose: this file is imported as a raw string and
// instantiated as a Blob Worker by the sandbox host page, so it inherits the
// sandbox page's relaxed CSP (which permits the `new Function` call below).
//
// It receives { requestId, code, functionName, tests }, builds the user's
// function, runs it against every test, and posts back a structured result.
// The host page enforces the wall-clock timeout by terminating this Worker.

self.onmessage = function handleMessage(event) {
  var data = event.data || {};
  var requestId = data.requestId;
  var code = typeof data.code === 'string' ? data.code : '';
  var functionName = typeof data.functionName === 'string' ? data.functionName : '';
  var tests = Array.isArray(data.tests) ? data.tests : [];

  var userFn;
  try {
    // Define the user's code, then hand back the target function by name.
    var factory = new Function(
      '"use strict";\n' +
        code +
        '\n;return (typeof ' +
        functionName +
        " === 'function') ? " +
        functionName +
        ' : undefined;',
    );
    userFn = factory();
  } catch (err) {
    self.postMessage({
      type: 'result',
      requestId: requestId,
      ok: false,
      reason: 'compile-error',
      error: describeError(err),
    });
    return;
  }

  if (typeof userFn !== 'function') {
    self.postMessage({
      type: 'result',
      requestId: requestId,
      ok: false,
      reason: 'no-function',
      error: 'Could not find a function named "' + functionName + '".',
    });
    return;
  }

  var outcomes = [];
  for (var i = 0; i < tests.length; i++) {
    outcomes.push(runOne(userFn, tests[i], i));
  }

  postResult(requestId, outcomes);
};

// Runs a single test, capturing console output and any thrown error.
// Measures wall-clock execution time with Date.now() for approximate ms timing.
function runOne(userFn, test, index) {
  var logs = [];
  var originalLog = console.log;
  console.log = function captureLog() {
    logs.push(Array.prototype.map.call(arguments, stringifyArg).join(' '));
  };
  try {
    var args = test && Array.isArray(test.args) ? test.args : [];
    var start = Date.now();
    var value = userFn.apply(null, args);
    var durationMs = Date.now() - start;
    return { index: index, status: 'returned', value: value, logs: logs, durationMs: durationMs };
  } catch (err) {
    return { index: index, status: 'threw', error: describeError(err), logs: logs };
  } finally {
    console.log = originalLog;
  }
}

// Posts the result, degrading gracefully if a returned value cannot be cloned.
function postResult(requestId, outcomes) {
  var message = { type: 'result', requestId: requestId, ok: true, outcomes: outcomes };
  try {
    self.postMessage(message);
  } catch (cloneError) {
    var safe = outcomes.map(function sanitize(outcome) {
      if (outcome.status === 'returned') {
        return {
          index: outcome.index,
          status: 'returned',
          value: stringifyArg(outcome.value),
          logs: outcome.logs,
        };
      }
      return outcome;
    });
    self.postMessage({ type: 'result', requestId: requestId, ok: true, outcomes: safe });
  }
}

function describeError(err) {
  if (err && typeof err.message === 'string') {
    return err.name ? err.name + ': ' + err.message : err.message;
  }
  return String(err);
}

function stringifyArg(value) {
  if (typeof value === 'string') {
    return value;
  }
  try {
    return JSON.stringify(value);
  } catch (err) {
    return String(value);
  }
}
