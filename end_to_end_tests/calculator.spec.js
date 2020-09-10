const baseUrl = 'http://localhost:5500/front-end';

describe('Calculator', function() {
    const num1Input = element(by.model('num1'));
    const num2Input = element(by.model('num2'));
    const addButton = element(by.id('addButton'));
    const result = element(by.binding('answer'));

    beforeEach(function () {
        browser.get(baseUrl + '/index.html');
    });

    it('should have correct title', function () {
        expect(browser.getTitle()).toEqual('DevOps Calculator');
    });

    it('should add floating point numbers', function() {
        num1Input.sendKeys(4.52);
        num2Input.sendKeys(5.1);
        addButton.click();
        expect(result.getText()).toEqual('9.62');
    });

    it('should add integer numbers', function() {
        num1Input.sendKeys(4);
        num2Input.sendKeys(5);
        addButton.click();
        expect(result.getText()).toEqual('9');
    });
});