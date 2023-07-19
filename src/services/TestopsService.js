import { accessToken, baseUrl, cookies, userAgent } from "../core/constants.js";

const headers = new Headers();
headers.append('Content-Type', "application/vnd.spring-boot.actuator.v3+json;charset=UTF-8");
headers.append('Set-Cookie', "segment-write-key=WxwQoaB6jHOmAdkzEQPxwJLSwPOVo2bX; Path=/");
headers.append('X-Content-Type-Options', "nosniff");
headers.append('X-Xss-Protection', "1; mode=block");
headers.append('Cache-Control', "no-cache, no-store, max-age=0, must-revalidate");
headers.append('Expires', "0");
headers.append('Strict-Transport-Security', "max-age=31536000 ; includeSubDomains");
headers.append('Pragma', "no-cache");
headers.append('X-Frame-Options', "SAMEORIGIN");
// headers.append('User-Agent', "abc");


const getTestopsInfo = async () => {
    console.log(baseUrl + 'info');
    const response = await fetch(baseUrl + 'info', {
        // withCredentials: true,
        headers: headers,
    });
    console.log(response);
    // console.log('Access token: {}');
};

export { getTestopsInfo };