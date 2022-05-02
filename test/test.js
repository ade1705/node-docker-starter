const request = require('supertest')
const app = require('../app')

describe('Tests ', () => {
  it('should return proper response from /', async () => {
    const response = await request(app).get('/')
    expect(response.body).toEqual({ status: 'Go away!!!' })
  })
})
