import splitAndConvert from "./splitAndConvert";

describe('should throw error', function () {
    expect(() => splitAndConvert()).toThrowError('Value cannot be undefined')
});

describe('function should split and convert the value', function () {
    const pxValue = "100px"
    const percentValue = "100%"

    expect(splitAndConvert(pxValue)).toHaveLength(2);

    test('if value type is px', () =>{
        const expectedPxValue = [100, 'px']
        expect(splitAndConvert(pxValue)).toEqual(expect.arrayContaining(expectedPxValue))
    });
    test('if value type is percent', () =>{
        const expectedPercentValue = [100, '%']
        expect(splitAndConvert(percentValue)).toEqual(expect.arrayContaining(expectedPercentValue))
    });
});

describe('if value type undefined throw error', () => {
    test('undefined value type', () => {
        const undefinedTypeValue = '100'
        expect(() => splitAndConvert(undefinedTypeValue)).toThrowError('Value or Value Type cannot be undefined')
    })
    test('undefined value', () => {
        const undefinedValue = 'px'
        expect(() => splitAndConvert(undefinedValue)).toThrowError('Value or Value Type cannot be undefined')
    })
})
