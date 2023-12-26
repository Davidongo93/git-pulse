import request from 'supertest';
import app from '../../src/main';

describe('Main Application Tests', () => {
    it('should respond with "Hello API" message for GET request to /', async () => {
      const response = await request(app).get('/');
    });
    it('Should respond with a 200 OK status',async ()=>{
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    } )
  });