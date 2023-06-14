import axios from 'axios';

const HOSP_API_BASE_URL = 'http://localhost:7474/hospital';

class HospitalApiService {

    fetchHospitals() {
        return axios.get(HOSP_API_BASE_URL);
    }

    fetchHospitalById(hospId) {
        return axios.get(HOSP_API_BASE_URL + '/' + hospId);
    }

    deleteHospital(hospId) {
        return axios.delete(HOSP_API_BASE_URL + '/' + hospId);
    }

    addHospital(hospital) {
        return axios.post(""+HOSP_API_BASE_URL, hospital);
    }

    editHospital(hospital) {
        return axios.put(HOSP_API_BASE_URL + '/' + hospital.id, hospital);
    }

}

export default new HospitalApiService();