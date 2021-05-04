import React, { useState } from 'react';
import GifsCard from '../components/GifsCard';
import Error from './Error';
import Loader from './Loader';
import { useGetGifs } from '../custom-hooks/useGetGifs';
const GifItem = ({ item }) => {

    const [error, setError] = useState(false);

    const { data: images, loading } = useGetGifs(item);

    return (

        <div>
            {
                loading ? (
                    <Loader />
                ) : error ? (
                    <Error />
                ) : (
                    <div className="container d-flex justify-content-center align-items-center h-100">
                        <div className="row">
                            {
                                images.map((img) => (
                                    <div className="col-md-4 mt-3" key={img.id}>
                                        <GifsCard
                                            key={img.id}
                                            {...img} />
                                    </div>

                                ))}
                        </div>
                    </div>

                )
            }
        </div>


    )
}


export default GifItem;