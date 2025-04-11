import axios from "axios";


const searchImage = async(term) => {
     const url = 'https://api.unsplash.com/search/photos/?client_id=n9srsLCJfv44iYNudI8DgsUP-ITxx0Lj5D59GpNq7Dw'
     const response = await axios.get(url,{
        params:{
            query: term
        }
     })


     console.log(response)
     return response.data.results
}


export default searchImage


