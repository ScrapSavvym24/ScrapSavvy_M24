import axios from "axios";
import { BASEURL } from "./Utils";

class ScrapyardService {
    
    AddProduct(userProfileId, formData){
        const API = BASEURL + "/scrapyard/add_product/"+ userProfileId;
        return axios.post(API, formData, {
            headers: {
                "Content-Type": "application/json",
                // 'Authorization': `Bearer ${token}`
            }});
    }
    UpdateProduct(userProfileId, formData){
        const API = BASEURL + "/scrapyard/product/"+userProfileId;
        return axios.put(API, formData, {headers: {
            "Content-Type": "application/json",
            // 'Authorization': `Bearer ${token}`
        }});
    }
    DeleteProduct(userProfileId, productId){
        const API = BASEURL + "/scrapyard/product/"+userProfileId+"/"+productId;
        return axios.delete(API, {headers: {
            "Content-Type": "application/json",
            // 'Authorization': `Bearer ${token}`
        }});
    }
    GetAllProducts(userProfileId){
        const API = BASEURL + "/scrapyard/get_all_products/"+ userProfileId;
        return axios.get(API, {headers: {
            "Content-Type": "application/json",
            // 'Authorization': `Bearer ${token}`
        }});
    }
    GetMyAllProducts(userProfileId){
        const API = BASEURL + "/scrapyard/get_my_products/"+ userProfileId;
        return axios.get(API, {headers: {
            "Content-Type": "application/json",
            // 'Authorization': `Bearer ${token}`
        }});
    }
    GetProduct(userProfileId, product_id){
        const API = BASEURL + "/scrapyard/get_product/"+userProfileId+"/"+product_id;
        return axios.get(API, {headers: {
            "Content-Type": "application/json",
            // 'Authorization': `Bearer ${token}`
        }});
    }
    BuyProduct(formData){
        const API = BASEURL + "/orders/";
        return axios.post(API, formData, {headers: {
            "Content-Type": "application/json",
            // 'Authorization': `Bearer ${token}`
        }});
    }
}

export default new ScrapyardService();