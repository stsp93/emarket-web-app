export function validatePayload(payload) {
    const { title, description, price, location, imageUrl } = payload;

    // Payload Validations
    const emptyFields = Object.entries(payload).filter(([k, v]) => v === '').map(([k, v]) => k);
    if (emptyFields.length > 0) throw new Error(`${emptyFields.join(', ')} can\'t be empty`);
    if (title.length < 3) throw new Error('Title need to be at least 3 characters long');

    if (Number.isNaN(+price)) throw new Error('Price need to be a number');
}