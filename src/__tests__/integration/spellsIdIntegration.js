// spellsIntegration.js
const request = require('supertest');
const app = require('../../index.js');
const knexfile = require('./../../../knexfile.js');
const db = require("knex")(knexfile.development);

describe('Spells Integration Tests', () => {
  beforeAll(async () => {
    await db.raw('BEGIN');
  });

  afterAll(async () => {
    await db.raw('ROLLBACK');
    await db.destroy();
  });

  test('should return the correct spell details', async () => {
    const spellId = 1; 

    const response = await request(app).get(`/spells/${spellId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', spellId);
  });

  test('should return 404 for non-existent spell', async () => {
    const nonExistentSpellId = 999;

    const response = await request(app).get(`/spells/${nonExistentSpellId}`);

    expect(response.status).toBe(404);
  });

});
