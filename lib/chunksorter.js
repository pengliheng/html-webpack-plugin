'use strict';

/**
 * Performs identity mapping (no-sort).
 * @param  {Array} chunks the chunks to sort
 * @return {Array} The sorted chunks
 */
module.exports.none = chunks => chunks;

/**
 * Sort manually by the chunks
 * @param  {Array} chunks the chunks to sort
 * @return {Array} The sorted chunks
 */
module.exports.manual = (chunks, specifyChunks) => {
  const chunksResult = [];
  let filterResult = [];
  if (Array.isArray(specifyChunks)) {
    for (var i = 0; i < specifyChunks.length; i++) {
      filterResult = chunks.filter(chunk => {
        if (chunk.names[0] && chunk.names[0] === specifyChunks[i]) {
          return true;
        }
        return false;
      });
      filterResult.length > 0 && chunksResult.push(filterResult[0]);
    }
  }
  return chunksResult;
};

/**
 * Defines the default sorter.
 */
module.exports.auto = module.exports.none;
