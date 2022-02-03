import React, { Fragment, useEffect, useRef } from 'react';
import { gridData } from '../../../config/constant'

function DrawingCanvas() {
    const canvasRef = useRef();

    const drawBoard = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        ctx.canvas.width  = 753;
        ctx.canvas.height = 353;

        const data = gridData;

        var DOMURL = window.URL || window.webkitURL || window;
        
        var img = new Image();
        var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
        var url = DOMURL.createObjectURL(svg);
        
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
            DOMURL.revokeObjectURL(url);
        }
        img.src = url;
    };

    useEffect(() => {
        drawBoard();

    }, [])


    return (
        <Fragment>
            <canvas id="mainCanvas" className='main-canvas-container' ref={canvasRef}></canvas>
            <div className='absolute'>Text</div>
        </Fragment>
    );
}

export default DrawingCanvas;
