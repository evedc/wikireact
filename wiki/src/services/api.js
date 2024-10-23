import axios from 'axios';

// Criando a instância da API com a baseURL
export const api = axios.create({
    baseURL: 'https://api.github.com/',
});

