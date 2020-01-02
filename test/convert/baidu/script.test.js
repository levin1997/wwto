const convert = require('../../../src/converter/lib/baidu/script.js');

function testScript(testName, code1, code2) {
  test(testName || 'testing: ', () => {
    expect(code1).toBe(code2);
  });
}

testScript(
  'baidu script convert test:',
  convert(`
  "https://github.com/fulme/wto-cli.git/issues"
  commander\.option()
  commander\.transition()
  commander\.timingFunction()`),
  `
  \"https://github.com/fulme/wto-cli.git/issues\"
  commander.option()
  commander.transition()
  commander.timingFunction()`
)