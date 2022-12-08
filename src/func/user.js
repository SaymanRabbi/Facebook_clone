import axios from 'axios'
export const updatePic = async (
   url,token
)=>{
try {
    const data = await axios.put(`https://facebookcloneserver-production.up.railway.app/updateProfilePicture`,{
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
     const data = await axios.put(`https://facebookcloneserver-production.up.railway.app/updateCover`,{
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
     const data = await axios.put(`https://facebookcloneserver-production.up.railway.app/addFriend/${id}`,{
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
     const data = await axios.put(`https://facebookcloneserver-production.up.railway.app/cancelFriendRequest/${id}`,{
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
     const data = await axios.put(`https://facebookcloneserver-production.up.railway.app/follow/${id}`,{
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
     const data = await axios.put(`https://facebookcloneserver-production.up.railway.app/unfollow/${id}`,{
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
     const data = await axios.put(`https://facebookcloneserver-production.up.railway.app/acceptFriendRequest/${id}`,{
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
     const data = await axios.put(`https://facebookcloneserver-production.up.railway.app/unfriend/${id}`,{
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
     const data = await axios.put(`https://facebookcloneserver-production.up.railway.app/deleteRequest/${id}`,{
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
     const data = await axios.post(`https://facebookcloneserver-production.up.railway.app/search/${searchTerm}`,{
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
     const data = await axios.get(`https://facebookcloneserver-production.up.railway.app/friendPageinfo`,{
         headers:{
             Authorization:`Bearer ${token}`
         }
     })
     return data
 } catch (error) {
     return error.response.data.messages
 }
 }