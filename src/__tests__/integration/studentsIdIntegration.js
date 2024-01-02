const request = require('supertest'); // Fix typo here
const app = require('../../index.js');
const knexfile = require('./../../../knexfile.js');
const db = require("knex")(knexfile.development);

describe('GET /students/:id', () => {
  beforeAll(async () => {
    // Start a transaction or any setup logic if needed
    await db.raw('BEGIN');
  });

  afterAll(async () => {
    // Rollback the transaction or any teardown logic if needed
    await db.raw('ROLLBACK');
    await db.destroy();
  });

  test('should return the correct student record', async () => {
    const studentId = 6;

    const response = await request(app).get(`/students/${studentId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', studentId);
  });

  test('should return 404 for non-existent student', async () => {
    const nonExistentStudentId = 999;

    const response = await request(app).get(`/students/${nonExistentStudentId}`);

    expect(response.status).toBe(404);
  });
});
