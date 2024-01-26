// Test function to prove AI concept

export function simulateKeyPress(key) {
    const event = new KeyboardEvent('keydown', { key });
    window.dispatchEvent(event);
}