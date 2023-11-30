import API_ENDPOINT from '../configs/api-endpoint';

class DATA {
  static async getPatients() {
    const response = await fetch(API_ENDPOINT.PATIENTS);
    return response.json();
  }

  static async getDoctors() {
    const response = await fetch(API_ENDPOINT.DOCTORS);
    return response.json();
  }

  static async getNurses() {
    const response = await fetch(API_ENDPOINT.NURSES);
    return response.json();
  }

  static async getAdmins() {
    const response = await fetch(API_ENDPOINT.ADMIN);
    return response.json();
  }

  static async dashboard() {
    const response = await fetch(API_ENDPOINT.DASHBOARD);
    return response.json();
  }
}

export default DATA;