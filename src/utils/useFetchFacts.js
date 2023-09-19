import { useEffect, useState } from "react";

export const useFetchFacts = (url) => {
    const [facts, setFacts] = useState(undefined);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
        const fetchFacts = async () => {
            setIsLoading(true);
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                setFacts(data);
            } else {
                setError(`Error! status: ${response.status}`);
            };
            setIsLoading(false);
        };

        fetchFacts();
    }, [url]);

    return { facts, error, isLoading }
}