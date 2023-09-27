import { useEffect, useState } from "react";
import { url } from "../settings/settings";

export const useFetchFacts = (animalType) => {
    const [facts, setFacts] = useState(undefined);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
        const fetchFacts = async () => {
            setIsLoading(true);
            const response = await fetch(`${url}/random?animal_type=${animalType}&amount=30`);

            if (response.ok) {
                const data = await response.json();
                setFacts(data);
            } else {
                setError(`Error! status: ${response.status}`);
            };
            setIsLoading(false);
        };

        fetchFacts();
    }, [animalType]);

    return { facts, error, isLoading }
}