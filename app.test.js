const request = require('supertest');
const app = require('./app');

test('GET / DEVUELVE MENSAJE!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hola Mundo!');
});

