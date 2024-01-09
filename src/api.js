import axios from 'axios';
const searchImages= async (term)=>{
    const response =await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID 5iM1BXLeN6KAmLtEcLpmzY-u8CiK1yp9nvMBMW3oj4U',
      },
      params:{
        query:term,
      },
    });

    return response.data.results;
  };
  export default searchImages;
