import { baseUrl } from "../core/constants.js";

const getTestopsInfo = async () => {
    console.log(baseUrl + 'info');
    const response = await fetch(baseUrl + 'info', {
        mode: 'no-cors'
    });
    console.log(response);};

export { getTestopsInfo };