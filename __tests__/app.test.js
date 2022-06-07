const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { zodiac } = require('../data/zodiac');

describe('zodiac routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/zodiac should return a list of zodiac signs, only their id and name', async () => {
    const res = await request(app).get('/zodiac');
    const expected = zodiac.map((sign) => ({ id: sign.id, name: sign.name }));
    expect(res.body).toEqual(expected);
  });

  it('/zodiac/1 should return the details for aquarius', async () => {
    const aquarius = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    const res = await request(app).get('/zodiac/1');
    expect(res.body).toEqual(aquarius);
  });

  afterAll(() => {
    pool.end();
  });
});
