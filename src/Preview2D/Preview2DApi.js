import React, { useState, useEffect } from "react";
import { defineCustomElements } from '@boschrexroth/nextgen-web-ui-toolkit-react';
import './Preview2DApi.css';

defineCustomElements();

const Preview2DApi = ({ filepath, miDent }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState("");
    const [imageLoading, setImageLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const params = {
                    apikey: 'e66120f9d9624823884cac1bf290ea88',
                    path: filepath,
                    mident: miDent
                };
                const queryString = new URLSearchParams(params).toString();
                const url = `https://webapi.partcommunity.com/service/derivationviews?${queryString}`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
                if (result.views.length > 0) {
                    const filteredViews = result.views.filter(view =>
                        ['Front', 'Back', 'Left', 'Right', 'Top', 'Bottom', '3 projection views (EU)'].includes(view.desc)
                    );
                    if (filteredViews.length > 0) {
                        const defaultView = filteredViews.find(view => view.desc === '3 projection views (EU)');
                        setSelectedImage(defaultView ? defaultView.imageUrl : filteredViews[0].imageUrl);
                    }
                }
            } catch (error) {
                console.error('Error fetching the data', error);
                setError(error.message);
            }
        };

        fetchData();
    }, [filepath, miDent]);

    useEffect(() => {
        if (selectedImage) {
            setImageLoading(true);
        }
    }, [selectedImage]);

    const handleSelectionChange = (event) => {
        setSelectedImage(event.target.value);
    };

    const handleImageLoad = () => {
        setImageLoading(false);
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    const filteredViews = data.views.filter(view =>
        ['Front', 'Back', 'Left', 'Right', 'Top', 'Bottom', '3 projection views (EU)'].includes(view.desc)
    );

    return (
        <div className="preview-container">
            <div className="dropdown-wrapper">
                <dc-ui-dropdown-wrapper label="Views:" label-position="default">
                    <select onChange={handleSelectionChange} value={selectedImage}>
                        {filteredViews.map((item, index) => (
                            <option key={index} value={item.imageUrl}>
                                {item.desc}
                            </option>
                        ))}
                    </select>
                </dc-ui-dropdown-wrapper>
            </div>
            <br />
            {selectedImage && (
                <div className="image-container">
                    {imageLoading && (
                        <div>
                            <center className="image-loading">
                                <dc-ui-progress-icon size="large" message="Loading image..."></dc-ui-progress-icon>
                            </center>
                        </div>
                    )}
                    <img
                        src={`https://webapi.partcommunity.com${selectedImage}`}
                        onLoad={handleImageLoad}
                        className={imageLoading ? 'image' : 'image image-loaded'}
                        alt="Selected view"
                    />
                </div>
            )}
        </div>
    );
};

export default Preview2DApi;
