import axios from "axios"
import { useState } from "react"

const useCrud = (path) => {
    const [response,setResponse]= useState([])
    const BASE_URL = 'https://users-crud.academlo.tech';


    const getData = () => {
        const url = `${BASE_URL}${path}`;
        axios
            .get(url)
            .then((res)=> setResponse(res.data))
            .catch((err)=> console.error(err))
    };


    const postData = (data)=> {
        const url = `${BASE_URL}${path}`;
        axios
        .post(url, data)
        .then((res)=>{
            console.log(res.data);
            setResponse ([...response, res.data]);
    })
        .catch((err) => console.error(err));
    };

    const deleteData = (id) => {
        const url = `${BASE_URL}${path}${id}/`;
        axios
        .delete(url)
        .then((res)=>{
            console.log(res.data);
            setResponse (response.filter((item) => item.id !== id ));
    })
        .catch((err)=> console.error(err))

    };

    const updateData = (id, data) => {
        const url = `${BASE_URL}${path}${id}/`;
        axios 
            .patch(url,data)
            .then((res)=>{
            console.log(res.data);
            setResponse (response.map((elem) => (elem.id === id ? res.data : elem)));
    })
        .catch((err) => console.error(err));
    };

    return [response, getData, postData, deleteData, updateData]
}

export default useCrud