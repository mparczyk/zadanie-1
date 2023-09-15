import { useEffect, useState } from "react";

export const useFetchFacts = (url) => {
    const [facts, setFacts] = useState([]);
    const [hasError, setHasError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchFacts = async () => {
            setIsLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            
            if (response.ok) {
                setFacts(data);
            } else {
                setHasError(`Error! status: ${response.status}`);
            };
            setIsLoading(false);
        };

        fetchFacts();
    }, [ url ]);

    return [ facts, hasError, isLoading ]
}