const client = require('./client')

client.get({ id: '1' }, (error, notes) => {
    if (!error) {
        console.log('Note feched successfully', notes)
    } else {
        console.error(error)
    }
})
