import { axiosInstance } from "../api/axiosInstance";

export const createUser = async (dataUser) => {
    try {
        await axiosInstance.post("users/", dataUser);
    } catch (error) {
        console.error(error);
    }
}