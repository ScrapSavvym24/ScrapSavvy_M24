import axios from "axios";
import { BASEURL } from "./Utils";

export class UserProfile {
    UpdateUserPersonalDetails(user_id, formData, token){
        const API = BASEURL + "/users/update_user_details/"+user_id;
        return axios.put(API, formData, {headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }});
    }
    UpdateUserBankDetails(user_id, formData, token){
        const API = BASEURL + "/users/update_user_bank_details/"+user_id;
        return axios.put(API, formData, {headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }});
    }
    DeleteUser(user_id, token){
        const API = BASEURL + "/users/delete_user/"+user_id;
        return axios.delete(API, {headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }});
    }
}