import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.sheetson.com/v1/sheets/',
});