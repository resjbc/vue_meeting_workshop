const crypto = require('crypto');

const security = {
    password_hash(password) {
        return crypto.createHash('sha1').update(password).digest('hex');
    },
    password_verify(password, password_hash) {
        return security.password_hash(password) === password_hash;
    }
}

module.exports = security;