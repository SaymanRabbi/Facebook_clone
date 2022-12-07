import axios from 'axios'
export const updatePic = async (
   url,token
)=>{
try {
    const data = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/updateProfilePicture`,{
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
     const data = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/updateCover`,{
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
     const data = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/addFriend/${id}`,{
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
     const data = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/cancelFriendRequest/${id}`,{
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
     const data = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/follow/${id}`,{
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
     const data = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/unfollow/${id}`,{
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
     const data = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/acceptFriendRequest/${id}`,{
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
     const data = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/unfriend/${id}`,{
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
     const data = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/deleteRequest/${id}`,{
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
     const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/search/${searchTerm}`,{
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