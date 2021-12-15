import axios from 'axios';
import qs from 'qs'
const CLIENT_ID = 'ef6e74a8b4024c4';
//const CLIENT_SECRET = '307d443654f2e3623ea1c5003523ebcf6c844eec';
const ROOT_URL = 'https://api.imgur.com/';
//Added <meta name="referrer" content="no-referrer"> in public/index.html

export default {
    login() {
        const query_string = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(query_string)}`;
    },
    fetchImages(token) {
        return axios.get(`${ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },
    upload(token, images) {
        const promises = Array.from(images).map(image => {
            const formData = new FormData();
            formData.append('image', image);
            return axios.post(`${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        });
        return Promise.all(promises);
    }
}