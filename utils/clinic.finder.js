'use strict';
const clinicModel = require('../models/clinic.models');

const evaluateFilterForEntry = (
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

module.exports = {
  searchAll: async ({
    name,
    stateName,
    availability,
    clinicName,
    stateCode,
    opening,
    resolve,
    reject,
  }) => {
    const result = await clinicModel.findAll();

    const dentalFilter = { name, stateName, availability };

    const vetFilter = { clinicName, stateCode, opening };

    if (result != null) {
      const dental = result['dental'];
      const vet = result['vet'];

      const searchResults = {};
      const dentalSearchResults = dental.filter((dentalEntry) =>
        evaluateFilterForEntry(dentalEntry, dentalFilter),
      );
      const vetSearchResults = vet.filter((vetEntry) =>
        evaluateFilterForEntry(vetEntry, vetFilter),
      );

      searchResults['dental'] = dentalSearchResults;
      searchResults['vet'] = vetSearchResults;
    
      resolve(searchResults);
    } else {
      reject && reject();
    }
  },
};
