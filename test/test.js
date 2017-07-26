let shallow = require('enzyme/shallow'),
    rewire = require('rewire'),
    appModule = rewire('../app');

describe('', function () {
  it('Did you declare a variable using const h1?', function () {
    expect(appModule.__get__('h1')).to.be.defined;
  });
  it('Does your JSX expression include an <h1></h1> element?', function () {
    let wrapper = shallow(appModule.__get__('h1'));
    expect(wrapper.find('h1')).to.have.length(1);
  });
  it('Did you set your variable equal to <h1>Hello world</h1>?', function () {
    let wrapper = shallow(appModule.__get__('h1'));
    expect(wrapper.text()).to.match(/Hello +world/i);
  });
}); 
