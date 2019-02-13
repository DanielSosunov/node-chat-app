var expect = require('expect');

var {generateMessage} = require('./message')

describe('generateMessage',()=>{
    it('should generate the correct message object',()=>{
        var from = 'Danny'
        var text = 'Hi!'
        var res = generateMessage(from,text);
        expect(res).toInclude({from,text});
        expect(res.createdAt).toBeA('number');
    })
})