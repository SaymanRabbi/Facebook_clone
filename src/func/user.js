import axios from 'axios'
export const updatePic = async (
   url,token
)=>{
try {
    const data = await axios.put(`https://facebook-server-1-saymanrabbi.vercel.app/updateProfilePicture`,{
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
     const data = await axios.put(`https://facebook-server-1-saymanrabbi.vercel.app/updateCover`,{
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
     const data = await axios.put(`https://facebook-server-1-saymanrabbi.vercel.app/addFriend/${id}`,{
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
     const data = await axios.put(`https://facebook-server-1-saymanrabbi.vercel.app/cancelFriendRequest/${id}`,{
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
     const data = await axios.put(`https://facebook-server-1-saymanrabbi.vercel.app/follow/${id}`,{
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
     const data = await axios.put(`https://facebook-server-1-saymanrabbi.vercel.app/unfollow/${id}`,{
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
     const data = await axios.put(`https://facebook-server-1-saymanrabbi.vercel.app/acceptFriendRequest/${id}`,{
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
     const data = await axios.put(`https://facebook-server-1-saymanrabbi.vercel.app/unfriend/${id}`,{
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
     const data = await axios.put(`https://facebook-server-1-saymanrabbi.vercel.app/deleteRequest/${id}`,{
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
     const data = await axios.post(`https://facebook-server-1-saymanrabbi.vercel.app/search/${searchTerm}`,{
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
     const data = await axios.get(`https://facebook-server-1-saymanrabbi.vercel.app/friendPageinfo`,{
         headers:{
             Authorization:`Bearer ${token}`
         }
     })
     return data
 } catch (error) {
     return error.response.data.messages
 }
 }