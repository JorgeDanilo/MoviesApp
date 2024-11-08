import { AxiosAdapter } from './http/axios.adapter';

export const movieDBFecther = new AxiosAdapter( {
  basUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '09d2cae658dd30017dd884f3f94009bc',
    language: 'pt'
  }
} );