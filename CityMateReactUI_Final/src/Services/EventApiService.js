import axios from 'axios';

const EVENT_API_BASE_URL = "http://localhost:7272/event";
const EVENT_API_BASE_URL_USER = "http://localhost:7272/user";
const EVENT_API_BASE_URL_USER_MAIL = "http://localhost:7272/user/mail";

class ApiService {

    fetchAllEvents() {
        return axios.get(EVENT_API_BASE_URL );
    }
    
    deleteEvent(eventId) {
        return axios.delete(EVENT_API_BASE_URL + '/' + eventId);
    }


    fetchEventById(eventId) {
        return axios.get(EVENT_API_BASE_URL + '/' + eventId)
    }

    
    updateEvent(event) {
        return axios.put(EVENT_API_BASE_URL + '/' + event.id , event);
    }

    createEvent(event) {
        return axios.post(""+ EVENT_API_BASE_URL, event);
    }

    registerUser(user) {
        return axios.post("" + EVENT_API_BASE_URL_USER, user);
    }

    fetchUserById(userId) {
        return axios.get(EVENT_API_BASE_URL_USER + '/' + userId)
    }

    deleteUser(userId) {
        return axios.delete(EVENT_API_BASE_URL_USER + '/' + userId);
    }

    updateUser(user , userId) {
        return axios.put(EVENT_API_BASE_URL_USER + '/' + userId, user);
    }

    sendEmail(userMail) {
        return axios.post("" + EVENT_API_BASE_URL_USER_MAIL + '/successful' ,  userMail);
    }

    sendCancellationEmail(userMail) {
        return axios.post("" + EVENT_API_BASE_URL_USER_MAIL + '/cancellation' ,  userMail);
    }

}

export default new ApiService();