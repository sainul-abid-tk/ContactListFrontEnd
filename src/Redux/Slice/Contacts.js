import { createSlice } from "@reduxjs/toolkit";
import { addContactAPI, deleteAContactAPI, updateAContactAPI } from "../../Services/allAPIs";

const contact=createSlice({
    name:'allcontacts',
    initialState:{
        contact:""
    },
    reducers:{
        addContact:(async(state,action)=>{
            state.contact=action.payload
              // Sort the array based on the 'name' property
              const result=await addContactAPI(state.contact)
              if(result.status==200){
                alert("Contact Added successfully!!");
              }else{
                alert(result.response.data)
              }
        }),
        removeContact:(async(state,action)=>{
            const result=await deleteAContactAPI(action.payload)
            if(result.status==200){
              alert("Your Contact Deleted Successfully!!")
            }else{
              console.log(result.response.data);
            }
        }),
        editContacts:(async(state,action)=>{
           const result=await updateAContactAPI(action.payload._id,action.payload)
           if(result.status==200){
            alert("Your Updation Successfully!!!")
           }else{
            console.log(result.response.data);
           }
        })
    }
})
export const {addContact,removeContact,editContacts}=contact.actions
export default contact.reducer