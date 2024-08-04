// generateOrderId.js

function generateOrderId() {
    const timestamp = Date.now().toString(36).substr(-3); // Ambil 3 karakter terakhir dari timestamp
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        randomString += chars[randomIndex];
    }
    const orderId = `${randomString}-${timestamp}`;

    // Simpan orderId di localStorage
    localStorage.setItem('orderId', orderId);

    return orderId;
}
