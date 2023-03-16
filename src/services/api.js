import axios from 'axios';

axios.defaults.baseURL = 'https://api.wisey.app/api/v1/';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const getToken = async () => {
  try {
    const response = await axios.get('auth/anonymous?platform=subscriptions');
    setToken(response.data.token);
  } catch (error) {
    return error;
  }
};

export const fetchCourses = async () => {
  try {
    await getToken();
    const response = await axios.get('core/preview-courses');
    return response.data.courses;
  } catch (error) {
    return error;
  }
};

export const findCourseById = async courseId => {
  try {
    await getToken();
    const response = await axios.get(`core/preview-courses/${courseId}`);
    return response.data;
  } catch (error) {
    return error;;
  }
};
