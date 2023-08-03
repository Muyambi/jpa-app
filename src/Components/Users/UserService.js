import axios from 'axios';

const baseUrl = 'http://localhost:8080/users';

const getAllUsers = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getAccountById = async(accountId)=> {
  try {
      const response = await axios.get(baseUrl + '/' + accountId);
      return response.data;
  } catch (error) {
      console.error(error);
      return null;
  }
};


const createUser = async (user) => {
  const response = await axios.post(baseUrl, user);
  return response.data;
};

const updateUser = async (id, user) => {
  const response = await axios.put(`${baseUrl}/${id}`, user);
  return response.data;
};

const deleteUser = async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
};

const UserService = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getAccountById 
};

export default UserService;
