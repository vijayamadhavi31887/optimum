import axios from 'axios';

const API_BASE_URL = 'https://dummy.restapiexample.com/api/v1/employees';
const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true, // Enable sending credentials with the request
  });
export async function fetchEmployeeList() {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    console.log(response);
    return response.data;
  } catch (error:any) {
    throw new Error(` ${error.message}`);
  }
}
