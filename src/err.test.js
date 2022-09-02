import err from './err.js';
import { jest } from '@jest/globals';
import chalk from 'chalk';

test('Test description logging and process.exit(1))', function () {
  jest.spyOn(process, 'exit').mockImplementationOnce(() => {
    throw new Error('process.exit() was called.');
  });
  jest.spyOn(console, 'log');

  const errMsg = 'Everyone fails sometime';
  const mockErr = 'Log, learn and move on';
  expect(() => {
    err(new Error(mockErr), errMsg);
  }).toThrow('process.exit() was called.');

  expect(process.exit).toHaveBeenCalledWith(1);
  jest.mocked(console.log).mockImplementation(() => {
    return;
  });
  expect(jest.mocked(console.log).mock.calls).toHaveLength(1);
  expect(jest.mocked(console.log).mock.calls[0][0]).toStrictEqual(
    chalk.red(`Error: ${errMsg}`)
  );
});

const processArg = process.argv.slice();
test('Test --debug flag', function () {
  process.argv.push('--debug');

  jest.spyOn(process, 'exit').mockImplementationOnce(() => {
    throw new Error('process.exit() was called.');
  });
  jest.spyOn(console, 'log');

  const errMsg = 'Everyone fails sometime';
  const mockErr = 'Log, learn and move on';
  expect(() => {
    err(new Error(mockErr), errMsg);
  }).toThrow('process.exit() was called.');

  jest.mocked(console.log).mockImplementation(() => {
    return;
  });

  process.argv = processArg;

  expect(jest.mocked(console.log).mock.calls).toHaveLength(3);
  expect(
    jest
      .mocked(console.log)
      .mock.calls[2][0].slice(0, `Error: ${mockErr}`.length)
  ).toStrictEqual(`Error: ${mockErr}`);
});
