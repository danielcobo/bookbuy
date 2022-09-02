import checkout from './checkout';

test('Checkout', async function () {
  const wentToCheckout = await checkout(
    'The Midnight Library by Matt Haig',
    () => document.title
  );

  expect(wentToCheckout).toStrictEqual('Amazon Sign-In');
});
