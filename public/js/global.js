async function _run(funcName, ...args) {
    if (window[funcName]) {
      return await window[funcName](...args);
    }
  }