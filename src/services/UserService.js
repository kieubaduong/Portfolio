import { baseUrl } from "../core/constants.js";

async function getUsers() {
    const response = await fetch(baseUrl + 'users');
    if (response.ok) {
        const users = await response.json();
        return users;
    } else {
        return [];
    }
}

export { getUsers };