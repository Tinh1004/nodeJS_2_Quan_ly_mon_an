import axios from 'axios';


const callApiFromServer =  async ()  =>{
    let array = [];

    await axios.get(`http://localhost:5000/v1/api/food`).then(res => {
        const persons = res.data;
        array = persons;
        
    });
    return array;
}

export default callApiFromServer;