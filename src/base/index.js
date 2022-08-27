import axios from 'axios';
export const baseUrl = 'https://app-contact-us.herokuapp.com';


export const sendMailUrl = axios.create({
    baseURL: `${baseUrl}`,
  });