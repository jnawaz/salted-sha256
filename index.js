// Import.
const crypto = require('crypto');

// Constants.
const HASH_ALGORITHM_SHA256 = 'sha256';
const HASH_DIGEST_HEX = 'hex';
const DEFAULT_DATA = '';
const DEFAULT_SALT = '';
const DEFAULT_ASYNC_INDICATOR = false;

/**
 * Hash data by SHA256 algorithm.
 * @param {string} data Data to hash.
 * @returns {string} Hash string.
 */
function sha256(data) {
  return crypto.createHash(HASH_ALGORITHM_SHA256).update(data).digest(HASH_DIGEST_HEX);
}

/**
 * Hash data using salt.
 * @param {string} data Data to hash.
 * @param {string} [salt] Salt.
 * @param {boolean} [isAsync] Is async indicator. Promise returned if this parameter defined as true.
 * @returns {string|Promise<string>} Salted SHA256 hash.
 */
function hash(data = DEFAULT_DATA, salt = DEFAULT_SALT, isAsync = DEFAULT_ASYNC_INDICATOR) {
  // Define salted data.
  const saltedData = salt + data;

  // Return hash promise if async indicator setted.
  if (isAsync) { return new Promise(resolve => resolve(sha256(saltedData))); }

  // Return hash in other cases.
  return sha256(saltedData);
}

// Export.
module.exports = hash;
