import React, { useEffect } from 'react';
import axios from 'axios';

export const Blog = () => {
    const getData = async () => {        
        await axios("http://127.0.0.1:7878/")
        .then(response => console.log(response.data))
        .catch(err => console.log(err));
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <h1>THIS IS MY BLOG WOHOOO</h1>
        </div>
    )
}