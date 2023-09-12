import React, { useEffect, useState } from "react";

const useFetch = (url) => {
    const [facts, setFacts] = useState([]);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetch(url)
          .then(response => {
            return response.json()
          })
          .then(data => setFacts(data))
          .catch(err => setHasError(true))
      }, [ url ])

    return [ facts, hasError ];
};

export default useFetch;