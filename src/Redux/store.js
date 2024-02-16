import { configureStore } from '@reduxjs/toolkit'
import contact from './Slice/Contacts'
export const store=configureStore({
    reducer:{
       contact
    }
})