import React, { useEffect, useState } from "react";

const useFetch = (url) => {
    const [facts, setFacts] = useState([]);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            let data = await fetch(url);
            data = await data.json()
            setFacts(data);
        };
        fetchData()
        .catch(err => setHasError(true))
    }, [ url ]);

    return [ facts, hasError ]
}

export default useFetch;