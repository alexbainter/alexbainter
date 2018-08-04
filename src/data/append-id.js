import uuid from 'uuid/v4';

const appendId = arr => arr.map(e => Object.assign({}, e, { _id: uuid() }));

export default appendId;
