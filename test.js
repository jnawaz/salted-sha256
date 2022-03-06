// Import.
const assert = require('assert');
const CColor = require('ccolor');
const saltedSha256 = require('./index');

// Test data.
const testDataList = [
  { data: 'DataToHash', salt: 'Test', correctResult: '9b5fa16182d0b28e567e5b5d1343b5dd78f0990a868b04a57c83d02392238182' }
];

// Define colors.
const { green, red } = CColor;

// Start async thread.
(async () => {
  let testNumberIterator = 1;
  for (const testData of testDataList) {
    // Define current test data.
    const { data, salt, correctResult } = testData;

    // Sync test.
    const saltedHash = saltedSha256(data, salt);
    assert.equal(saltedHash, correctResult, red(`Sync test ${testNumberIterator}: Wrong hash.`));
    console.log(green(`Sync test ${testNumberIterator}: Passed!`));

    // Async test.
    const asyncSaltedHash = await saltedSha256(data, salt, true);
    assert.equal(asyncSaltedHash, correctResult, red(`Async test ${testNumberIterator}: Wrong hash.`));
    console.log(green(`Async test ${testNumberIterator}: Passed!`));

    // Increment test number.
    testNumberIterator++;
  }
})();
