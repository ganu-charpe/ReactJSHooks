import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const [response, setResponse] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setResponse(data));
    }, []);

    return response;
}

export default useFetch