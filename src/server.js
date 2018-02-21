import express from 'express'

const app = express()

app.get('/', async (req, res) => {
    try {
        let thing = await Promise.resolve({ hello: 'world' }) // async/await!
        return res.json({ ...thing, welcome : " to backpack" }) // object-rest-spread!
    } catch (e) {
        return res.json({ error: e.message })
    }
})
const port = process.env.PORT || 3000

app.listen(port, (err) => {
    if (err) {
        console.error(err)
    }

    if (__DEV__) {
        console.log('In Development')
    }

    console.log(`listening on port ${port}`)
})