import axios from 'axios'
export const createPost = async (
    type,background,text,images,user,token
)=>{
try {
    const {data} = await axios.post(`https://facebook-server.onrender.com/createpost`,{
        type,background,text,images,user
    },{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return {
        status:"ok",
        data
    }
} catch (error) {
    return error.response.data.messages
}
}
export const createReact = async (
    react, postRef,token
)=>{
try {
    const data = await axios.put(`https://facebook-server.onrender.com/reactPost`,{
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
    const data = await axios.get(`https://facebook-server.onrender.com/getReact/${id}`,{
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
    const {data} = await axios.put(`https://facebook-server.onrender.com/comment`,{
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
export const SavedPost = async (
    id,token
)=>{
try {
    const {data} = await axios.put(`https://facebook-server.onrender.com/savepost/${id}`,{
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
export const DeletePost = async (
    id,token
)=>{
try {
    const {data} = await axios.put(`https://facebook-server.onrender.com/deletepost/${id}`,{
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