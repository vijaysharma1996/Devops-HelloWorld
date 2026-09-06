const request = require('supertest');
const app = require('../app');

describe('App routes', () => {
  it('GET / should return 200 OK', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('GET /users should return 200 OK', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
  });
  
  it('GET /nonexistent should return 404 Not Found', async () => {
    const response = await request(app).get('/nonexistent');
    expect(response.status).toBe(404);
  });
});
