import { axiosInstance } from "../api/axiosInstance";

export const updateUser = async (id, newDataUser) => {
    try {
        await axiosInstance.put(`users/${id}/`, newDataUser);
    } catch (error) {
        console.error(error);
    }
}