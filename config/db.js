module.exports = {
    path: process.env.NODE_ENV === 'production' ? process.env.CONNECTION_STRING : 'mongodb://localhost/alexbainter',
    keepAliveMS: 1000,
};
