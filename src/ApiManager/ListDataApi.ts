import { API_KEY } from "@env";
import axios from "axios";

export const ListDataApi=async(page:number)=>{
    const options = {
        method: 'GET',
        url: `${API_KEY}?page=${page}`,
        headers: {
            'Authorization': 'ddc58e6a-2e69-4f44-97e8-1454eb352069',
        }
    }
    let res=await axios.request(options)
    return res.data
}