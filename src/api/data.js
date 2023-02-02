import * as api from './api.js';

const endpoints = {
    'allCategories': '/items/categories',
    'category': (category) => `/items/${category}`,
    'create': '/items',
    'byId': (id)  => `/items/${id}`
}

export async function getAllCategories() {
    const res = await api.get(endpoints.allCategories);
    return res;
}

export async function getCategoryResults(category) {
    const res = await api.get(endpoints.category(category));
    return res;
}

export async function createListing(payload) {
    const res = await api.post(endpoints.create, payload);
    return res;
}

export async function getItemDetails(id) {
    const res = await api.get(endpoints.byId(id));
    return res;
}

export async function deleteItemListing(id) {
    const res = await api.del(endpoints.byId(id));
    return res;
}

export async function editListing(id, payload) {
    const res = await api.put(endpoints.byId(id), payload);
    return res;
}