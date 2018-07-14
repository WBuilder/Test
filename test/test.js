var assert = require('assert');
let example = require('../example2.js');

describe('isEven()', function() {
    it('Should return boolean', function()
    {
        assert.strictEqual(example.isEven(2), true);
    });
    
    it('Should return boolean', function()
    {
        assert.strictEqual(example.isEven(3), false);
    });
        
    it('Returns True if 2 is even', function()
    {
        assert.equal(example.isEven(2), true);
    });
    
    it('Returns False if 3 is odd.', function()
    {
        assert.equal(example.isEven(3), false);
    });
});

