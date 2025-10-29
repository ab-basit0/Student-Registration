import { validateEmail } from './validation.js';

describe('Registration Form Validation Tests (Task 3)', () => {

    // Test Case related to TC_03 (Invalid email format)
    test('TC_03: should return false for invalid email format without @ symbol', () => {
        const email = 'invalidEmail.com';
        expect(validateEmail(email)).toBe(false);
    });

    test('TC_03: should return false for email missing the domain extension', () => {
        const email = 'test@domain';
        expect(validateEmail(email)).toBe(false);
    });

    test('TC_03: should return false for an empty email string', () => {
        const email = '';
        expect(validateEmail(email)).toBe(false);
    });

    // Test Case related to TC_04 (Successful registration - valid input)
    test('TC_04: should return true for a correctly formatted email address', () => {
        const email = 'student.name@university.edu';
        expect(validateEmail(email)).toBe(true);
    });
});
