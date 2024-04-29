console.log("Starting token generation.......");
require('dotenv').config({ path: 'C:/Users/Ruben/OneDrive/Escritorio/Programacion/TEC/OXXO_ESL/oxxo-ESLs-backend/.env' });
console.log("Environment variables loaded.......");
const jwt = require('jsonwebtoken');

const token = jwt.sign(
    { username: "Arturo", password: "passowrd", role: "admin" }, // the payload
    process.env.JWT_SECRET, // the secret key
    { expiresIn: '1h' }, // options
);
console.log("Token generated.......");

console.log(token);