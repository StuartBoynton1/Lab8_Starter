// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//Testing isPhoneNumber
test('isPhoneNumber on valid phone number (1)', () => {
    const isPhoneNumber = functions.isPhoneNumber('(000)-000-0000');
    expect(isPhoneNumber).toBe(true);
});

test('isPhoneNumber on valid phone number (2)', () => {
    const isPhoneNumber = functions.isPhoneNumber('(111-)-111-1111');
    expect(isPhoneNumber).toBe(true);
});

test('isPhoneNumber on invalid phone number', () => {
    const isPhoneNumber = functions.isPhoneNumber('1234567890');
    expect(isPhoneNumber).toBe(false);
});

test('isPhoneNumber on invalid phone number', () => {
    const isPhoneNumber = functions.isPhoneNumber('100*000*0000');
    expect(isPhoneNumber).toBe(false);
});

//Testing isEmail
test('isEmail on valid email', () => {
    const isEmail = functions.isEmail('hello@ucsd.edu');
    expect(isEmail).toBe(true);
});

test('isEmail on valid email', () => {
    const isEmail = functions.isEmail('hello@ucsd.ed');
    expect(isEmail).toBe(true);
});

test('isEmail on invalid email', () => {
    const isEmail = functions.isEmail('helloucsd.edu');
    expect(isEmail).toBe(false);
});

test('isEmail on invalid email', () => {
    const isEmail = functions.isEmail('hello@ucsdedu');
    expect(isEmail).toBe(false);
});


//Test isStrongPassword
test('isStrongPassword on valid password', () => {
    const isStrongPassword = functions.isStrongPassword('hello_ucsd_edu');
    expect(isStrongPassword).toBe(true);
});

test('isStrongPassword on valid password', () => {
    const isStrongPassword = functions.isStrongPassword('hello1234');
    expect(isStrongPassword).toBe(true);
});

test('isStrongPassword on invalid password', () => {
    const isStrongPassword = functions.isStrongPassword('hello@ucsd.edu');
    expect(isStrongPassword).toBe(false);
});

test('isStrongPassword on invalid password', () => {
    const isStrongPassword = functions.isStrongPassword('4ello_ucsd_edu');
    expect(isStrongPassword).toBe(false);
});


//Test isDate
test('isDate on valid date', () => {
    const isDate = functions.isDate('00/00/0000');
    expect(isDate).toBe(true);
});

test('isDate on valid date', () => {
    const isDate = functions.isDate('99/99/9999');
    expect(isDate).toBe(true);
});

test('isDate on invalid date', () => {
    const isDate = functions.isDate('00-00-0000');
    expect(isDate).toBe(false);
});

test('isDate on invalid date', () => {
    const isDate = functions.isDate('00000000');
    expect(isDate).toBe(false);
});

//Test isHexColor
test('isHexColor on valid Hex color', () => {
    const isHexColor = functions.isHexColor('#FFF');
    expect(isHexColor).toBe(true);
});

test('isHexColor on valid Hex color', () => {
    const isHexColor = functions.isHexColor('FFFAAA');
    expect(isHexColor).toBe(true);
});

test('isHexColor on invalid Hex color', () => {
    const isHexColor = functions.isHexColor('#FFFGZO');
    expect(isHexColor).toBe(false);
});

test('isHexColor on invalid Hex color', () => {
    const isHexColor = functions.isHexColor('FFFF');
    expect(isHexColor).toBe(false);
});