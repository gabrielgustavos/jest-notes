// Mock function are use to capture a called function and return a value.
// How we use mock function?

const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

const mockCallback = jest.fn((x) => 42 + x);
forEach([0, 1], mockCallback);

expect(mockCallback.mock.calls.length).toBe(2); // 2 times the function is called

expect(mockCallback.mock.calls[0][0]).toBe(0); // first argument of the first call
