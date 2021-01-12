const chai = require('chai')
let server = require('../server')
let should = chai.should()
let chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('Login API', () => {
    it('Login success if ', (done) => {
        let user = {
            userName: "vien",
            password: "vien"
        }
        chai.request(server)
            .post('/user/login')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.have.property('success')
                done()
            })
    })
})
describe('Register API', () => {
        it('Register success if', (done) => {
            let user = {
                email: 'lenguyenngocvien.adc@gmail.com',
                password: "Levien2506",
                phone: "0976580132",
                name: "Le Nguyen Ngoc Vien",
                address: "92/5/7-160",
                userName: "LeVien",
                isEmployer: true || false
            }
            chai.request(server)
                .post('/user/register')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.have.property('message')
                    res.body.should.have.property('register')
                    done()
                })
        })
    })
    // describe('Post recruitment', () => {
    //     it('Enterprise post job infomation success if', (done) => {
    //         let newPost = {
    //             title: "NodeJS",
    //             jobDescription: "job description",
    //             requirement: "job requirement",
    //             benefit: "job benefit",
    //             category: "job category",
    //             duration: Date.now(),
    //             quantity: 5,
    //             position: "Back-end",
    //             location: "job work location",
    //             maxSalary: 500,
    //             minSalary: 100
    //         }
    //         let payload = {
    //             isEnterprise: true,
    //             id: "0989226566"
    //         }
    //         chai.request(server)
    //             .post('/user/enterprisePostRecruitment')
    //             .auth('auto')
    //             .send(newPost)
    //             .end((err, res) => {
    //                 res.should.have.status(200)
    //                 res.body.should.have.property('success')
    //                 done()
    //             })
    //     })

// })