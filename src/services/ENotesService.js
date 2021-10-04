import axios from "axios";

export const  getAllNotes = async()=>{
    return await axios.get('/enotes/');
}

export const deleteNotes = async(id)=>{
    return await axios.delete('/enotes/'+id);
}

export const addNotes = async (notes)=>{
    return await axios.post('/enotes/',notes);
}