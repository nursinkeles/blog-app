import axios from "axios";

const fetchData = async (url: string) => {
  const response = await axios(url);
  return response.data;
};

const createData = async (url: string, data: Object) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/${url}`,
    data
  );
  return response.data;
};

export { fetchData, createData };
