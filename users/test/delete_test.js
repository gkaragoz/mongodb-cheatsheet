const assert = require('assert')
const User = require('../src/user')

describe('Deleting a user', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name: 'Joe' })
        joe.save()
            .then(() => done())
    })

    it('model instance remove', (done) => {
        joe.remove()
            .then(() => User.findOne({ name: 'Joe' }))
            .then((user) => {
                assert(user === null)
                done()
            })
            .catch((err) => console.log("asddsaasdadsasdasdadsasd" + err))
    })

    it('class method remove', (done) => {
        // Remove a bunch of records with some given criteria
        User.deleteOne({ name: 'Joe' })
            .then(() => User.findOne({ name: 'Joe' }))
            .then((user) => {
                assert(user === null)
                done()
            })
    })

    it('class method findIneAndRemove', (done) => {
        User.findOneAndRemove({ name: 'Joe' })
            .then(() => User.findOne({ name: 'Joe' }))
            .then((user) => {
                assert(user === null)
                done()
            })
    })

    it('class method findByIdAndRemove', (done) => {
        User.findOneAndRemove({ _id: joe._id })
            .then(() => User.findOne({ name: 'Joe' }))
            .then((user) => {
                assert(user === null)
                done()
            })
    })
})