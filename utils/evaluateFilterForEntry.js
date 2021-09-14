'use strict';
exports.evaluateFilterForEntry = (
  entry,
  filter,
  useStrict = false,
  prefix = '',
) => {
  let result = true;
  for (const [key, value] of Object.entries(filter)) {
    let entrytoEvaluate = entry;
    if (!value) {
      continue;
    }

    if (prefix !== '') {
      entrytoEvaluate = entry[prefix];
    }

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      result = evaluateFilterForEntry(entrytoEvaluate, value, true, key);
    } else {
      if (useStrict) {
        result = result && entrytoEvaluate[key].toLowerCase() === value;
      } else {
        result = result && entrytoEvaluate[key].toLowerCase().includes(value);
      }
    }

    if (!result) {
      return result;
    }
  }

  return result;
};
