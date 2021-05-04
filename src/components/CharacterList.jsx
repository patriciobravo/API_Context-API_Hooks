import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';
import Error from './Error';
import Loader from './Loader';
//import Characters from '../containers/Characters';
import '../assets/css/styles.scss';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function getCharacters() {
        try {
            const response = await axios.get('https://www.breakingbadapi.com/api/characters?limit=10&offset=10');
            const result = response.data;
            setCharacters(result);
            setLoading(false);
            setError(false);


        } catch (error) {
            console.log(error)
            setLoading(false);
            setError(error);
        }
    }

    useEffect(() => {
        getCharacters();
    }, [])

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
                                characters.map((item) => (
                                    <div className="col-md-4 mt-3" key={item.char_id}>
                                        <Character key={item.char_id} data={item} />
                                    </div>
                                ))}
                        </div>
                    </div>
                )
            }
        </div>
    )


};
export default CharacterList;
