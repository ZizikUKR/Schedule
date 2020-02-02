import axios from "axios";

axios.defaults.baseURL = 'http://localhost:53754/api/';
export default{
    getAll:()=> axios.get('toDo/getAll'),
    update:postData=>axios.put('toDo/update',postData)
};