import axios from "axios"


export const topAlbums = async() => {
    
    try {
        const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top")
        const data = await response.data
        return data

    }
    catch (error) {
        console.log(error);
    }
}
