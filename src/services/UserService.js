import { baseUrl } from "../core/constants.js";

const getUsers = async () => {
    const response = await fetch(baseUrl + 'users' , {
        
    });
    console.log(response.json());
};

export { getUsers };