const assert = require('chai').assert;
const mergeSort = require('../mergeSort');

describe('sort functionality', function() {
  it('sorts short arrays', function() {
    assert.deepEqual( mergeSort([1]), [1] );
    assert.deepEqual( mergeSort([2,1]), [1,2] );
  });
  it('sorts', function(){
    assert.deepEqual( mergeSort([3,13,1,8,5,2]), [1,2,3,5,8,13] );
  });
});
