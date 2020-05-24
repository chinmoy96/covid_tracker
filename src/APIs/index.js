import axios from 'axios';

export const fetchdata=async (c)=>{
    try{
        let url="https://covid19.mathdro.id/api";
        if(c)
        {
            url=url+'/countries/'+c
        }
        const data=await axios.get(url);
        console.log(data.data)
        return data.data;
    }
   
    catch(err){

    }

}


export const fetchDailyData=async ()=>{
    try{
        const data=await axios.get("https://covid19.mathdro.id/api/daily");
       // console.log(data);
        let len=data.data.length;
        len -=  60;
        //console.log(len)
        let newdata= data.data.map((item,id)=>{
            
                return {confirmed:item.confirmed.total,deaths:item.deaths.total,date:new Date(item.reportDate).getDate()+"-"+ (new Date(item.reportDate).getMonth()+1)+'-20'}
            

        })
    
        newdata=newdata.filter((item)=>{
            if(item)
            {
                return true;
            }
            else
                return false;
        })
        console.log(newdata)
        
        //let newdata= data.data.map((item)=>({confirmed:item.totalConfirmed}))
        //console.log("aa",newdata)
        return newdata;
    }
   
    catch(err){

    }

}


export const fetchcountry=async ()=>{
    try{
        const data=await axios.get("https://covid19.mathdro.id/api/countries");
        
        return data.data.countries.map((item)=>(item.name));
    }
   
    catch(err){

    }

}