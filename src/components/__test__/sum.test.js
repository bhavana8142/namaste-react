import { sum } from '../sum.js'

test("sum function should be caluclate the sum of two numbers", () => {
    const result = sum(4, 3)

    expect(result).toBe(7)

})