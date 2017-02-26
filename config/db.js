module.exports = {
    path: process.env.NODE_ENV === 'production' ? '' : 'mongodb://localhost/alexbainter',
    keepAliveMS: 1000
}
