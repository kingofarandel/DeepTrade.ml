import React, { Fragment, useEffect, useRef, useState } from 'react';
import { gridData } from '../../../config/constant';

import "beautiful-react-diagrams/styles.css";
import Diagram, { createSchema, useSchema } from "beautiful-react-diagrams";

// the diagram model
const initialSchema = createSchema({
    nodes: [
      {
        id: "node-1",
        content: "Bitcoin",
        coordinates: [250, 60],
        inputs: [{ id: "port-11", alignment: "left" }],
        outputs: [{ id: "port-12", alignment: "right" }]
      },
      {
        id: "node-2",
        content: "Ethereum",
        coordinates: [100, 200],
        inputs: [{ id: "port-21", alignment: "left" }],
        outputs: [{ id: "port-22", alignment: "right" }]
      },
      {
        id: "node-3",
        content: "Binance Smartchain",
        coordinates: [250, 220],
        inputs: [{ id: "port-31", alignment: "left" }],
        outputs: [{ id: "port-32", alignment: "right" }]
      },
      {
        id: "node-4",
        content: "USDT",
        coordinates: [400, 200],
        inputs: [{ id: "port-41", alignment: "left" }],
        outputs: [{ id: "port-42", alignment: "right" }]
      }
    ],
    links: [
      { input: "node-1", output: "node-2" },
      { input: "node-1", output: "node-3" },
      { input: "node-1", output: "node-4" },
    ]
  });

  const UncontrolledDiagram = () => {
    // create diagrams schema
    const [schema, { onChange }] = useSchema(initialSchema);
  
    return (
      <div style={{ height: "47rem"}} >
        <Diagram schema={schema} onChange={onChange} />
      </div>
    );
  };


function DrawingCanvas() {
    
    const [ready, setReady] = useState(false);
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
        setReady(true);
    };

    useEffect(() => {
        drawBoard();

    }, [])

    
    return (
        <Fragment>
            <div id = "sporeContainer">
                <canvas id="mainCanvas" className='main-canvas-container' ref={canvasRef}>
                </canvas>
                <div className='absolute' >
                    {ready == true && <UncontrolledDiagram />}
                </div>
                
            </div>
            
        </Fragment>
    );
}

export default DrawingCanvas;
