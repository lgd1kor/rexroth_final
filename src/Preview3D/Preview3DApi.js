import React, { useState, useEffect, useRef } from "react";

const Preview3DApi = ({ miDent, onDataFetch }) => {
    const [error, setError] = useState(null);
    const previousMiDent = useRef(null);
    const controller = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            if (previousMiDent.current === miDent) return;

            if (controller.current) {
                controller.current.abort();
            }

            controller.current = new AbortController();
            const { signal } = controller.current;

            try {
                const params = {
                    mident: miDent,
                    apikey: 'e66120f9d9624823884cac1bf290ea88',
                    language: 'english',
                    format: 'PARTJAVA3D',
                    preferformat: 'PARTJAVA3D',
                };
                const queryString = new URLSearchParams(params).toString();
                const url = `https://webapi.partcommunity.com/service/preview3d?${queryString}`;
                const response = await fetch(url, { signal });

                console.log('Response status:', response.status);

                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.statusText}`);
                }

                const responseBody = await response.text();
                // console.log('Response body:', responseBody);

                onDataFetch(responseBody);  // Pass the fetched data to the parent
                previousMiDent.current = miDent;
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    console.error('Error fetching the data', error);
                    setError('Error fetching the data. Please try again later.');
                }
            }
        };

        if (miDent) {
            fetchData();
        }

        return () => {
            if (controller.current) {
                controller.current.abort();
            }
        };
    }, [miDent, onDataFetch]);

    if (error) {
        return <div>{error}</div>;
    }

    return '';
};

export default Preview3DApi;
