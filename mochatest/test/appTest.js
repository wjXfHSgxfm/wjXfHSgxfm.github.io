const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){
    it('says hello', function(){
        assert.equal(app(), 'Hello');
    }) 
});