
var should = require('should');
var conjoin = require('..');

describe('conjoin', function(){
  describe('rtl', function(){
    it('should join multiple objects from right to left', function(){
      var a = {a:1,b:5};
      var b = {a:2,c:8};
      var c = {d:0};
      var d = conjoin(c, b, a);
      d.should.eql({a:2,b:5,c:8,d:0});
    });
    it('should join objects from right to left without mutating', function(){
      var a = {a:1};
      var b = {a:2};
      conjoin(a, b);
      a.should.eql({a:1});
      b.should.eql({a:2});
    });
  });

  describe('ltr', function(){
    it('should join multiple objects from left to right', function(){
      var a = {a:1,b:5};
      var b = {a:2,c:8};
      var c = {d:0};
      var d = conjoin.ltr(a, b, c);
      d.should.eql({a:2,b:5,c:8,d:0});
    });
    it('should join objects from left to right without mutating', function(){
      var a = {a:1};
      var b = {a:2};
      conjoin.ltr(a, b);
      a.should.eql({a:1});
      b.should.eql({a:2});
    });
  });

  describe('mutate', function(){
    it('should mutate multiple objects from right to left', function(){
      var a = {a:1,b:1};
      var b = {a:2,c:3};
      var c = {a:3,b:4,d:9};
      conjoin.mutate(a, b, c);
      a.should.eql({a:2,b:4,c:3,d:9});
      b.should.eql({a:2,c:3});
      c.should.eql({a:3,b:4,d:9});
    });
  });
});
