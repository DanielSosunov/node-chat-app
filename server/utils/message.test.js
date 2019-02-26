var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message')

describe('generateMessage',()=>{
    it('should generate the correct message object',()=>{
        var from = 'Danny'
        var text = 'Hi!'
        var res = generateMessage(from,text);
        expect(res).toInclude({from,text});
        expect(res.createdAt).toBeA('number');
    })
})

describe('generateLocationMessage',()=>{
    it('should generate the correct location object',()=>{
        var from = 'Danny'
        var lat = 'lat1';
        var long = 'long1';
        var url = `https://www.google.com/maps/search/?api=1&query=lat1,long1`;
        var res = generateLocationMessage(from,lat,long);
        expect(res).toInclude({from,url});
        expect(res.createdAt).toBeA('number');
    })
})