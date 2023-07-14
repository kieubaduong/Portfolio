const assert = require('chai').assert;
const fs = require('fs');
const { JSDOM } = require('jsdom');

describe('User Input Test', function() {
  it('should display dialog with correct content', function() {
    const htmlContent = fs.readFileSync('index.html', 'utf-8');

    const dom = new JSDOM(htmlContent);

    const { window } = dom;
    const { document } = window;
    const keyInput = document.getElementById('keyInput');
    const submitButton = document.getElementById('submitBtn');

    const successDialog = document.getElementById('successDialog');
    const failedDialog = document.getElementById('failedDialog');

    keyInput.value = 'emanhtuan';
    submitButton.click();

    assert.equal(successDialog.style.display, 'none');
    assert.equal(failedDialog.style.display, 'block');
  });
});
