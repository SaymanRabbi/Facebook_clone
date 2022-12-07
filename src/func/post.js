import axios from 'axios'
export const createPost = async (
    type,background,text,images,user,token
)=>{
try {
    const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/createpost`,{
        type,background,text,images,user
    },{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return {
        status:"ok",
        data:data
    }
} catch (error) {
    return error.response.data.messages
}
}
export const createReact = async (
    react, postRef,token
)=>{
try {
    const data = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/reactPost`,{
        react, postRef
    },{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return "ok"
} catch (error) {
    return error.response.data.messages
}
}
export const getReact = async (
    id,token
)=>{
try {
    const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getReact/${id}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return data
} catch (error) {
    return error?.response?.data?.messages
}
}
export const getComment = async (
    comment,postId,image,token
)=>{
try {
    const {data} = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/comment`,{
        comment,postId,image
    },{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return data
} catch (error) {
    return error?.response?.data?.messages
}
}