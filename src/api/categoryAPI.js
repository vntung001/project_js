import { axiosClient } from './axiosClient';

export const CategoryAPI = {
    list() {
        const url = `/categories`;
        return axiosClient.get(url);
    },
    read(id) {
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },
    add(categories) {
        const url = `/categories`;
        return axiosClient.post(url, categories)
    },
    remove(id) {
        const url = `/categories/${id}`;
        return axiosClient.delete(url)
    },
    update(id, data) {
        const url = `/categories/${id}`;
        return axiosClient.put(url, data);
    }
}
export default CategoryAPI;