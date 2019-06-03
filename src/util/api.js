import axios from 'axios';

export default axios.create({
  baseURL: 'http://d8graphql.lndo.site:8000/graphql',
  responseType: "json"
});