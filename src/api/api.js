import axios from 'axios';

class ApiService {
  constructor() {
    this.http = axios;
    this.http.defaults.baseURL = 'http://localhost:3005';
  }

  get(url) {
    return this.http.get(url);
  }

  post(url, body) {
    return this.http.post(url, body);
  }
  getWithParams(url){
    return this.http.get(url)
  }
}

export default new ApiService();