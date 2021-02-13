import axios from 'axios';
import {serverAddress} from '../../constants/index';

const utils = {
  temp : serverAddress+"/User",
  getUsers : () => {
    let url = serverAddress+"/User";
    return axios.get(url)
  },
  getUser : (params) => {
    let url = serverAddress+`/User/${params}`;
    return axios.get(url)
  },
  addUser: (params) => {
    let url = serverAddress+"/User";
    return axios.post(url,params);
  },
  removeUser: (params) => {
    let url = serverAddress+`/User/${params}`;
    return axios.delete(url);
  },
  updateUser: (params) => {
    let url = serverAddress+`/User`;
    return axios.put(url,params);
  }
}

export default utils;