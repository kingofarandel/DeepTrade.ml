import React, { Fragment, useEffect, useRef, useState } from 'react';
import ReactDOM from "react-dom";
import { gridData } from '../../../config/constant'
import * as SRD from "storm-react-diagrams";
import "storm-react-diagrams/dist/style.min.css";
import "./styles.css";

function DrawingCanvas() {
    const canvasRef = useRef();
    const [diagram, setDiagram] = useState();

    const init = () => {
        const engine = new SRD.DiagramEngine();
        engine.installDefaultFactories();

        const model = new SRD.DiagramModel();

        const node1 = new SRD.DefaultNodeModel("BTC", "rgb(220,220,220)");
        const port1 = node1.addOutPort("Out");
        const port4 = node1.addOutPort("in");
        node1.setPosition(100, 100);
        node1.width = 1000;

        const node2 = new SRD.DefaultNodeModel("BNB", "rgb(220,220,220)");
        const port2 = node2.addInPort("In");
        node2.setPosition(400, 100);

        const node3 = new SRD.DefaultNodeModel("ETH", "rgb(220,220,220)");
        const port3 = node3.addInPort("in");
        node3.setPosition(200, 400);
        const link1 = port1.link(port2);
        link1.color = 'yellow';
        const link2 = port1.link(port3);
        link2.color = 'purple';
        const link3 = port2.link(port3);
        link3.color = 'purple';
        model.addAll(node1, node2, node3, link1, link2, link3);

        engine.setDiagramModel(model);

        setDiagram(engine);
    }

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
        init();
        drawBoard();

    }, [])

    console.log(diagram);

    if(diagram == null)
        init();
    else
        return (
            <Fragment>
                
                <div id = "sporeContainer">
                    <canvas id="mainCanvas" className='main-canvas-container' ref={canvasRef}>
                    
                    </canvas>
                    <SRD.DiagramWidget
                            style={{position:'absolute'}}
                            className="srd-demo-canvas"
                            diagramEngine={diagram}
                        />
                    
                    
                </div>
            </Fragment>
        );
}

export default DrawingCanvas;
