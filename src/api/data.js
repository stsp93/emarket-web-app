import * as api from './api.js';

const endpoints = {
    'allCategories': '/items/categories',
    'category': (category) => `/items/${category}`
}

export async function getAllCategories() {
    const res = await api.get(endpoints.allCategories);
    return res;
}

export async function getCategoryResults(category) {
    const res = await api.get(endpoints.category(category));
    return res;
}