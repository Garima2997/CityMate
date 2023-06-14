import axios from 'axios';

const MALLS_API_BASE_URL = 'http://localhost:7373/malls';

class MallsApiService {
    
    fetchMalls() {
        return axios.get(MALLS_API_BASE_URL);
    }

    fetchMallsById(id) {
        return axios.get(MALLS_API_BASE_URL + '/' + id);
    }

    deleteMalls(id) {
        return axios.delete(MALLS_API_BASE_URL + '/' + id);
    }

    addMalls(malls) {
        return axios.post(MALLS_API_BASE_URL , malls);
    }

    editMalls(malls) {
        return axios.put(MALLS_API_BASE_URL + '/' + malls.id, malls);
    }
}

export default new MallsApiService()