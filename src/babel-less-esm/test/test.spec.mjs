// import assert from 'assert'
import Calculator from '../src/calculator.mjs'
import chai from 'chai'

const { assert } = chai

describe('Test', () => {
  it('Import an .mjs module', () => {
    assert.equal(Calculator.multiply(2, 5), 10)
  })
})