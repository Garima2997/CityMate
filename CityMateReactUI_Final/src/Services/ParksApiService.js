import axios from 'axios';

const PARKS_API_BASE_URL = 'http://localhost:7373/parks';

class ParksApiService {
    
    fetchParks() {
        return axios.get(PARKS_API_BASE_URL);
    }

    fetchParksById(id) {
        return axios.get(PARKS_API_BASE_URL + '/' + id);
    }

    deleteParks(id) {
        return axios.delete(PARKS_API_BASE_URL + '/' + id);
    }

    addParks(parks) {
        return axios.post(PARKS_API_BASE_URL , parks);
    }

    editParks(parks) {
        return axios.put(PARKS_API_BASE_URL + '/' + parks.id, parks);
    }
}

export default new ParksApiService()