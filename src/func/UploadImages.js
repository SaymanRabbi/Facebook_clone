import axios from "axios";

export const uploadImages = async (formdata, token,path) => {
try {
    const {data} = await axios.post(`https://facebookcloneserver-production.up.railway.app/upload`,formdata,{
        headers:{
        Authorization:`Bearer ${token}`,
        "Content-Type": "multipart/form-data",
        }
        })
        return data
} catch (error) {
    return error.response.data.messages
}
}