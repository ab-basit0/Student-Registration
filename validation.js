/**
 * validation.js
 * Contains core functions used by the website logic, exported for automated testing.
 * Note: This function's logic is duplicated from index.html to enable Jest testing.
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
export function validateEmail(email) {
    // Simple regex: checks for at least one character, followed by @, followed by at least one character, followed by a dot, followed by at least two characters.
    const re = /\S+@\S+\.\S{2,}/;
    return re.test(String(email).toLowerCase());
}
