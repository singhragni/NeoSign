import axois from 'axios';

const axoisInstance = axois.create({
    baseURL: "http://localhost:3003/api"
});


export default axoisInstance;