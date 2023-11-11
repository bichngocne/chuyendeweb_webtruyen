import Dotenv from 'dotenv-webpack';
 
export const plugins = [
    new Dotenv({
        path: './some.other.env' // default is .env
    })
];
