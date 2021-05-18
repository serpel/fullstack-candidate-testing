var { parseNameInitials } = require('../lib/string_helper');

describe("String utilities testing", function(){
    it('given a fullname, it should result the first two initials', function(){
        var initials = parseNameInitials('Sergio Javier Peralta Sosa');
        initials.should.equal('SJ');
    });
});