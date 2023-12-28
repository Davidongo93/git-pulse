import request from 'supertest';
import app from '../../src/app';
import axios, { AxiosResponse } from 'axios';

// Mock de axios para evitar llamadas a la API real
jest.mock('axios');

describe('Search API', () => {
  beforeEach(() => {
    jest.resetAllMocks(); // Reset mocks antes de cada prueba
  });

  test('GET /search-suggestions should return 200 with suggestions', async () => {
    // Configurar el mock de Axios para devolver datos simulados
    const mockResponse: AxiosResponse = {
      data: {
        items: [
          //pending to define items
        ],
      },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {
        url: '/search-suggestions',
        method: 'get',
      } as any,
    };

    // mocked response
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(mockResponse);

    const response = await request(app).get('/search-suggestions');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockResponse.data.items);
  });

  test('GET /search-suggestions should handle errors', async () => {
    // return error
    const errorMessage = 'Internal Server Error';

    // rejected value
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(new Error(errorMessage));

    const response = await request(app).get('/search-suggestions');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: errorMessage });
  });
});
