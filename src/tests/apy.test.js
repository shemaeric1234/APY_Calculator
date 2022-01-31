import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import { user, apy } from './mockData';
import db from '../database/models';

chai.use(chaiHttp);
chai.should();
let globalUser = 0;
describe('add user tests', () => {
    before(async () => {
        await db.user.create(user);
    });
    it('should not get all users', (done) => {
        chai.request(app).get('/api/v1/apy/getUsers')
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.an('object');
                done();
            });
    });
    it('should not get a user', (done) => {
        chai.request(app).get('/api/v1/apy/getUser/20')
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.an('object');
                done();
            });
    });

    it('should not get all apys', (done) => {
        chai.request(app).get('/api/v1/apy/getApys/300')
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.an('object');
                done();
            });
    });
    it('user created successfully', (done) => {
        chai.request(app).post('/api/v1/apy/add')
            .send(user).end((err, res) => {
                res.should.have.status(201);
                globalUser = res.body.data;
                res.body.should.be.an('object');
                done();
            });
    });
    it('apy added successfully', (done) => {
        chai.request(app).post('/api/v1/apy/addApy')
            .send(apy).end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.an('object');
                done();
            });
    });


    it('should get all users', (done) => {
        chai.request(app).get('/api/v1/apy/getUsers')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                done();
            });
    });

    it('should get all apys', (done) => {
        chai.request(app).get('/api/v1/apy/getApys/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                done();
            });
    });
    it('should delete apys', (done) => {
        chai.request(app).delete('/api/v1/apy/delete/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                done();
            });
    });
    it('should get user', (done) => {
        chai.request(app).get(`/api/v1/apy/getUser/${globalUser.id}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                done();
            });
    });
    it('should delete user', (done) => {
        chai.request(app).delete(`/api/v1/apy/delete/user/${globalUser.id}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                done();
            });
    });
});
