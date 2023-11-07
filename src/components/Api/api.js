// {
//     top:"https://qtify-backend-labs.crio.do/albums/top",

//     new:""


// https://qtify-backend-labs.crio.do/albums/new


// https://qtify-backend-labs.crio.do/album/:slug


// https://qtify-backend-labs.crio.do/songs



// https://qtify-backend-labs.crio.do/genres
// }


import axios from 'axios';

export const backend_Endpoint = "https://qtify-backend-labs.crio.do";


export const fetchTopAlbum = async()=>{
    try{
        const res = await axios.get(`${backend_Endpoint}/albums/top`);
        return res.data;
    }
    catch(e){
        console.log(e,'Error from Top Albums');
    }
}
