import axios from 'axios';

const RESTAURANT_API_BASE_URL = 'http://localhost:7373/restaurant';

class ApiService {
    
    fetchRestaurant() {
        return axios.get(RESTAURANT_API_BASE_URL);
    }

    fetchRestaurantById(id) {
        return axios.get(RESTAURANT_API_BASE_URL + '/' + id);
    }

    deleteRestaurant(id) {
        return axios.delete(RESTAURANT_API_BASE_URL + '/' + id);
    }

    addRestaurant(restaurant) {
        return axios.post(RESTAURANT_API_BASE_URL , restaurant);
    }

    editRestaurant(restaurant) {
        return axios.put(RESTAURANT_API_BASE_URL + '/' + restaurant.id, restaurant);
    }
}

export default new ApiService()