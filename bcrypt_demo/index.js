const bcrypt = require('bcrypt');

const hasshPassword = async (password) => {
    const hash = await bcrypt.hash(password, 12);
    console.log(hash);
};

const login = async (password, hashedPw) => {
    const result = await bcrypt.compare(password, hashedPw);
    if(result) {
        console.log('login successful');
    } else {
        console.log('Incorrect password');
    }
};

hasshPassword('fiesta');
// login('fiesta', '$2b$10$Y4F7z0jvqzTqXwXf6sO7T.8Lw8n7pHwE7a8v6Z6kzqKZl9iC4b9K');