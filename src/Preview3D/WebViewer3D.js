/* global psol */
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import { defineCustomElements } from '@boschrexroth/nextgen-web-ui-toolkit-react';
import './WebViewer3D.css';
defineCustomElements();

const WebViewer3D = ({ apiData }) => {
    const viewerRef = useRef(null);

    useEffect(() => {
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error(`Script load error for ${src}`));
                document.head.appendChild(script);
            });
        };

        const initViewer = async () => {
            try {
                await loadScript('webcomponents/8.1.0/api/js/thirdparty.min.js');
                await loadScript('webcomponents/8.1.0/api/js/psol.components.min.js');
                const radialMenuActions = [{
                    name: 'menu_shading',
                    subActions: ['actLine', 'actShade', 'actShadeLine']
                 }, {
                  name: 'menu_rotation',
                  subActions: [
                        'actFront',
                        'actBack',
                        'actLeft',
                        'actRight',
                        'actTop',
                        'actBottom',
                        'actIsometric',
                        'actAnimate'
                    ]
                 }, {
                    name: 'menu_vr',
                    subActions: [
                        'actAnaglyph',
                        'actBluebox',
                        'actDreamocHD3',
                        'actFullscreen',
                        'actPseudoFullscreen',
                    ]
                 }, {
                    name: 'menu_special',
                    subActions: [
                        'actZoomall',
                        'actCut',
                        'actCustomDimensions',
                        'actExplosion',
                        'actLabels',
                        'actScreenShot'
                    ]
                 }];
                 const favoriteActions = [
                    "actAnimate",
                    "actCustomDimensions",
                    "actEnableHotSpots",
                    "actHotSpots",
                    "actLine",
                    "actShadeLine",
                    "actEnv",
                    "actToggleRotationMode",
                 ];
                const settings = {
                    $container: $('#viewer'),
                    viewerBackendType: psol.components.WebViewer3D.ViewerBackends.WebGL,
                    webglViewerSettings: {
                        devicePixelRatio: window.devicePixelRatio,
                        radialMenuActions: radialMenuActions,
                        favoriteActions: favoriteActions,
                        ColorTL: '#ffffff',
                        ColorTR: '#ffffff',
                        ColorML: '#ffffff',
                        ColorMR: '#ffffff',
                        ColorBL: '#ffffff',
                        ColorBR: '#ffffff',
                        logoTexture: 'boschrexrothlogo.svg',
                        logoScaleFactor: 0,
                        logoMixFactor: 0,
                        logoScaleModeFill:false,
                        material: {
                            preset: 'pcloud'
                        },
                        measureGrid: {
                            colors: {
                                dimensions: '#000000',
                                outline: '#0000ff',
                                grid: '#b3b3b3'
                            }
                        },
                        helperOptions: {
                            gridOn: false,
                            axisOn: false
                        },
                        shadeMode: psol.components.WebViewer3D.ShadeModes.ShadeAndLines,
                        enableEditableDimensions: true,
                        showPartNameTooltip: false
                    }
                 };

                viewerRef.current = new psol.components.WebViewer3D(settings);

                viewerRef.current.show().then(() => {
                    if (apiData) {
                        viewerRef.current.loadByUrl(apiData);  // Use the API data here
                    }
                });
            } catch (error) {
                console.error('Error loading PSOL scripts', error);
            }
        };

        if (!viewerRef.current) {
            initViewer();
        } else if (apiData) {
            viewerRef.current.loadByUrl(apiData);
        }

    }, [apiData]);

    return (

        <div>
            <div id="viewer" className="viewer-container"></div>
        </div>

    );
};

export default WebViewer3D;
