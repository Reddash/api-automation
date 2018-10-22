var fs = require('fs');
describe('Protractor Demo App', function() {
  it('should subtract one and two', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);
    element(by.model('operator')).$('[value="SUBTRACTION"]').click();

    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).
        toEqual('-1'); // This is wrong!
        
   
  });

   it('should add two and three', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
      element(by.model('first')).sendKeys(2);
      element(by.model('second')).sendKeys(3);
      element(by.id('gobutton')).click();

      expect(element(by.binding('latest')).getText()).
          toEqual('5'); // This is wrong!


    });
});