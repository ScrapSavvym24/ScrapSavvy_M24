import axios from "axios";
import { BASEURL } from "./Utils";

class PaymentService {
    
    GetAllPayments(userProfileId){
        const API = BASEURL + "/payment/"+ userProfileId;
        return axios.get(API, {headers: {
            "Content-Type": "application/json",
            // 'Authorization': `Bearer ${token}`
        }});
    }
}

export default new PaymentService();