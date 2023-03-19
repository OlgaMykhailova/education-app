import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://api.wisey.app/api/v1/';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const getToken = async () => {
  try {
    const response = await axios.get('auth/anonymous?platform=subscriptions');
    setToken(response.data.token);
  } catch (error) {
    toast.error(`Something went wrong in getting token: ${error.message}`);
    return error;
  }
};

export const fetchCourses = async () => {
  try {
    await getToken();
    const response = await axios.get('core/preview-courses');
    return response.data.courses;
  } catch (error) {
    toast.error(`Something went wrong: ${error.message}`);
  }
};

export const findCourseById = async courseId => {
  try {
    await getToken();
    const response = await axios.get(`core/preview-courses/${courseId}`);
    return response.data;
  } catch (error) {
    toast.error(`Something went wrong: ${error.message}`);
  }
};
