import request from 'supertest';
import app from '../../src/app'; // Asegúrate de tener una referencia a tu aplicación Express

describe('Search API', () => {
  test('GET /search-suggestions should return 200 with suggestions', async () => {
    const response = await request(app).get('/search-suggestions');
    
    expect(response.status).toBe(200);
  // TODO try to add more assertions!!
  });
});
