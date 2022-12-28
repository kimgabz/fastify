const build = require('../../src/app');

let app;

describe('temp route', () => {
  beforeEach(() => {
    app = build();
  });

  afterEach(() => {
    app.close();
  });

  it('should return id when route is called with valid data', async () => {
    const res = await app.inject({
      method: 'POST',
      url: '/api/v1/test',
      payload: {
        title: 'Tokyo Revenger',
      },
    });

    expect(res.statusCode).toBe(201);
    expect(res.json().id).toBeDefined();
  });

  it('should return 200 for GET route', async () => {
    const res = await app.inject({
      method: 'GET',
      url: '/api/v1/test',
    });

    expect(res.statusCode).toBe(200);
  });
});
