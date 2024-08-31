
// this shit is a custom hook to  fetches data with caching retries on errors and manages loading and error states 


import { useEffect, useState, useRef } from 'react';

function useAdvancedFetch(url, options = {}, retryCount = 3) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const cache = useRef({});  

    useEffect(() => {
        let isMounted = true; 
        const fetchData = async () => {
            setLoading(true);
            if (cache.current[url]) {
                setData(cache.current[url]); 
                setLoading(false);
                return;
            }

            let retries = retryCount;

            while (retries > 0) {
                try {
                    const response = await fetch(url, options);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    const result = await response.json();
                    cache.current[url] = result; 

                    if (isMounted) {
                        setData(result);
                        setLoading(false);
                    }
                    break; 
                } catch (err) {
                    retries -= 1;
                    if (retries === 0) {
                        if (isMounted) {
                            setError(err.message);
                            setLoading(false);
                        }
                    }
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [url, options, retryCount]);

    return { data, loading, error };
}

export default useAdvancedFetch;
