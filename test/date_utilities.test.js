var { dateToWords } = require('../lib/date_helper');
var should = require('chai').should();

describe("Date utilities testing", function(){
    it('given a date it should return that date in words', function(){
        var words = dateToWords(new Date('2021-3-1'), new Date('2021-3-5'));
        words.should.equal('4 days ago');
    });
});