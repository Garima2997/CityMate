import axios from 'axios';

const PHARM_API_BASE_URL = 'http://localhost:7474/pharmacy';

class PharmacyApiService {

    fetchPharmacy() {
        return axios.get(PHARM_API_BASE_URL);
    }

    fetchPharmacyById(phId) {
        return axios.get(PHARM_API_BASE_URL + '/' + phId);
    }

    deletePharmacy(phId) {
        return axios.delete(PHARM_API_BASE_URL + '/' + phId);
    }

    addPharmacy(pharmacy) {
        return axios.post(""+PHARM_API_BASE_URL, pharmacy);
    }

    editPharmacy(pharmacy) {
        return axios.put(PHARM_API_BASE_URL + '/' + pharmacy.id, pharmacy);
    }

}

export default new PharmacyApiService();