'use strict';
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
  findAll: async () => {
    const dental = await fetch(
      'https://storage.googleapis.com/scratchpay-code-challenge/dental-clinics.json',
    );
    const vet = await fetch(
      'https://storage.googleapis.com/scratchpay-code-challenge/vet-clinics.json',
    );
    const dental_clinics = await dental.json();
    const vet_clinics = await vet.json();

    const clinics = {};

    await Promise.allSettled([dental_clinics, vet_clinics]).then((data) => {
      data.forEach((result, i) => {
        const key = i == 0 ? 'dental' : 'vet';
        clinics[key] = result.value;
      });
    });

    return clinics;
  },
};
