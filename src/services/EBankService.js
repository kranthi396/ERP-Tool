import axios from "axios";

export const  getAlleBank = async()=>{
    return await axios.get('/ebank/');
}

export const deleteBank = async(id)=>{
    return await axios.delete('/ebank/'+id);
}

export const addBank = async (bank)=>{
    return await axios.post('/ebank/',bank);
}