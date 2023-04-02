import axios from 'axios';

const api = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
    },
    proxy: undefined,
});

// fetch articles
export const fetchArticles = async () => api.get('/api/articles');

// fetch one article from slug
// http://localhost:1337/api/articles?filters[slug][$eq]=bootstrap

export const fetchArticle = async (slug) => api.get(`/api/articles?filters[slug][$eq]=${slug}`)


// export const  fetchArticle = async (id) => api.get(`/api/articles/${id}`)

