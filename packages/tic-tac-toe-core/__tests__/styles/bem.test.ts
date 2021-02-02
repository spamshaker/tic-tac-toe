import {bem} from '../../src/tic-tac-toe-core';

const blockName = 'my-block';
const elementName = 'my-content';
const modifier = {theme: 'dark'};

describe(`given blockName: "${blockName}"`, () => {
  const b = bem(blockName);
  describe(`given elementName: "${elementName} and modifier: "${JSON.stringify(modifier)}"`, () => {
    const element = b(elementName, modifier);
    const expected = 'my-block__my-content my-block__my-content--theme--dark';
    it(`should return "${expected}"`, () => {
      expect(element.toString()).toEqual(expected);
    });
  });
});
