import request from 'supertest';
import app from '../../index';
import { connect, disconnect } from '../../models';

describe('/tickets', () => {
  let id;

  beforeAll(() => {
    connect(
      process.env.MONGODB_URI,
      error => console.log(error)
    );
  });

  afterAll(done => {
    disconnect(done);
  });

  it('Should response to the GET method', () =>
    request(app)
      .get('/api/tickets')
      .expect(200));

  it('Should response to the POST method', async () => {
    const response = await request(app).post('/api/tickets');
    id = response.ticket.id;
    expect(response.statusCode).toBe(200);
  });

  it('Should response to the PUT method', () =>
    request(app)
      .put(`/api/tickets/${id}`)
      .expect(200));

  it('Should response to the DELETE method', () =>
    request(app)
      .delete(`/api/tickets/${id}`)
      .expect(200));
});
