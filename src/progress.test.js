import progress from './progress';
import { jest } from '@jest/globals';

test('Test progress', function () {
  jest.spyOn(console, 'log');
  progress('Good work');

  jest.mocked(console.log).mockImplementation(() => {
    return;
  });
  expect(jest.mocked(console.log).mock.calls).toHaveLength(1);
  expect(jest.mocked(console.log).mock.calls[0][0]).toStrictEqual('Good work');
});
