import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverUrl"


// addContact API
export const addContactAPI =async (userData)=>{
    return await commonAPI("POST",`${SERVER_URL}/addcontact`,userData,"")
}
// get All Contacts
export const getAllContactsAPI =async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/getcontacts`,"","")
}
// Delete a contacts
export const deleteAContactAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/deltecontact/${id}`,{},"")
}
// Update a contact
export const updateAContactAPI=async(id,reqBody)=>{
    return await commonAPI("PUT",`${SERVER_URL}/editcontact/${id}`,reqBody,"")
}
