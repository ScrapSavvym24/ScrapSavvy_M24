import axios from "axios";
import { BASEURL } from "./Utils";

class CustomerService {
    
    GetProducts(token){
        const API = BASEURL + "/company/get_products/";
        return axios.get(API, {headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }});
    }
    GetProduct(product_id, token){
        const API = BASEURL + "/company/get_product/"+product_id;
        return axios.get(API, {headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }});
    }

    BuyProduct(product_id, token, formData){
        const API = BASEURL + "/company/buy_product/"+product_id;
        return axios.post(API, formData, {headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }});
    }
}

export default new CustomerService();