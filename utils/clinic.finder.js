'use strict';
const clinicModel = require('../models/clinicModel');
const { evaluateFilterForEntry } = require('../utils/evaluateFilterForEntry');

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
