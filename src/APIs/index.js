import axios from 'axios';

export const fetchdata=async ()=>{
    try{
        const data=await axios.get("https://covid19.mathdro.id/api");
        return data.data;
    }
   
    catch(err){

    }

}