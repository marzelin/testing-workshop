// Things to know:
// - `test` is a global function from Jest:
//   `test(messageString, testerFunction)`
//   Learn more here: https://facebook.github.io/jest/docs/api.html#testname-fn
// - `expect` is a global function from Jest
//   which allows you to make assertsions. For
//   example:
//     `expect(1).toBe(1)`
//   Learn more here: https://facebook.github.io/jest/docs/expect.html
//
// Write unit tests for getTokenFromHeader.
// See `api/src/routes/utils/get-token-from-header.js`
// to see how this function has been implemented and
// how it's intended to be used. Write at least two unit
// tests to ensure that that use case is always supported.
import getTokenFromHeader from "../get-token-from-header"

describe("get-token-from-header", () => {
  test("should return null if no authorization header provided", () => {
    const req = getReq(null)
    const result = getTokenFromHeader(req)
    expect(result).toBeNull()
  })
  test("should return jwt token if valid authorization header provided", () => {
    const token = "header.payload.signature"
    const req = getReq(token)
    const result = getTokenFromHeader(req)
    expect(result).toEqual(token)
  })
  // this is where you put your test code. Write code that will
  // throw an error if getTokenFromHeader has a bug. The `expect`
  // global is a utility that makes writing such assertions easier,
  // but you can do it however you like.
})

function getReq(token) {
  if (token == null) {
    return {
      headers: {}
    }
  }
  return {
    headers: {
      authorization: `Token ${token}`
    }
  }
}

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=API%20Unit&em=
*/
test.skip("I submitted my elaboration and feedback", () => {
  const submitted = false // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////
