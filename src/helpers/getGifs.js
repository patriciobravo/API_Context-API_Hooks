import axios from 'axios';

export const getGifs = async (item) => {
    try {
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=Sd8qnoGZs1EANGGzj7mjusqBvT098IN8&q=${encodeURI(item)}&limit=10`);
        const result = response.data.data;

        const dataGifs = result.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        return dataGifs;

    } catch (error) {
        console.log(error)
    }


}