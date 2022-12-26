import axios from 'axios'
export const updatePic = async (
   url,token
)=>{
try {
    const data = await axios.put(`https://facebook-server.onrender.com/updateProfilePicture`,{
        url
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
export const updateCover = async (
    url,token
 )=>{
 try {
     const data = await axios.put(`https://facebook-server.onrender.com/updateCover`,{
         url
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
 export const AddFriend = async (
    id,token
 )=>{
 try {
     const data = await axios.put(`https://facebook-server.onrender.com/addFriend/${id}`,{
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
 export const CancenRequest = async (
    id,token
 )=>{
 try {
     const data = await axios.put(`https://facebook-server.onrender.com/cancelFriendRequest/${id}`,{
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
 export const follow = async (
    id,token
 )=>{
 try {
     const data = await axios.put(`https://facebook-server.onrender.com/follow/${id}`,{
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
 export const unfollow = async (
    id,token
 )=>{
 try {
     const data = await axios.put(`https://facebook-server.onrender.com/unfollow/${id}`,{
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
 export const acceptFriendRequest = async (
    id,token
 )=>{
 try {
     const data = await axios.put(`https://facebook-server.onrender.com/acceptFriendRequest/${id}`,{
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
 export const unfriend = async (
    id,token
 )=>{
 try {
     const data = await axios.put(`https://facebook-server.onrender.com/unfriend/${id}`,{
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
 export const deleteRequest = async (
    id,token
 )=>{
 try {
     const data = await axios.put(`https://facebook-server.onrender.com/deleteRequest/${id}`,{
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
 export const searchResult = async (
    searchTerm,token
 )=>{
 try {
     const data = await axios.post(`https://facebook-server.onrender.com/search/${searchTerm}`,{
     },{
         headers:{
             Authorization:`Bearer ${token}`
         }
     })
     return data
 } catch (error) {
     return error.response.data.messages
 }
 }
 export const getFriend = async (
    token
 )=>{
 try {
     const data = await axios.get(`https://facebook-server.onrender.com/friendPageinfo`,{
         headers:{
             Authorization:`Bearer ${token}`
         }
     })
     return data
 } catch (error) {
     return error.response.data.messages
 }
 }