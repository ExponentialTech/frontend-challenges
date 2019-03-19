const request = require('supertest');
const app = require('../src/server/app.js');

describe('Test the getCompanyData endpoint', () => {
    it('should respond to the GET method', () => {
        return request(app).get("/api/getCompanyData").then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
})