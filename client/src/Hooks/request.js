import axios from "axios";

const API_URL = "http://localhost:8000";

const getHttpProduct = async (page) =>{
    const result = await axios.get(`/api/product?page=${page}`);
    return result;
}

const postHttpProduct = async (product) => {
    try{
    return await axios.post(`/api/product`, product);
    }catch{
        return {
            statusText : false
        }

    
    }
}

const deleteHttpProduct =  async (id) => {
    try{
        return await axios.delete(`/api/product/${id}`)

    }catch{
        
        return   {
            statusText : false
        }

        
    }
}


const getHttpReservation = async () => {
    const reservation = await axios.get(`/api/reservation`);
    return reservation;
}

const postHttpReservation = async (reservation) => {
     try{
         return await axios.post(`/api/reservation`, reservation)
     }catch(error){
        return error;
     }
     
    
}


const completeHttpReservation = async (id) => {
    try{

        return await axios.put(`/api/reservation/${id}`)
    }catch{
       return{
           statusText: false
       }
    }
}

const abortHttpReservation = async (id) => {
    try {
        return await axios.delete(`/api/reservation/${id}`)
    } catch (error) {
        return {
            statusText: false
        }
    }
}

const getHttpSingleProduct = async(id) => {
    const response = await axios.get(`/api/product/${id}`);
    return response;
}


export {
    getHttpProduct,
    postHttpProduct,
    deleteHttpProduct,
    abortHttpReservation,
    postHttpReservation,
    getHttpReservation,
    completeHttpReservation,
    getHttpSingleProduct,
}