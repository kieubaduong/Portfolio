import { baseUrl } from "../core/constants.js";


const getTestopsInfo = () => {
    return fetch(baseUrl + 'info')
        .then(response => response.json())
        .then(data => console.log(data));
}

export { getTestopsInfo };