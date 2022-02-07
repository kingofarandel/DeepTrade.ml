import React, { Fragment, useEffect, useRef, useState } from 'react';
import ReactModal from 'react-modal';
import { gridData } from '../../../config/constant';

import "beautiful-react-diagrams/styles.css";
import Diagram, { createSchema, useSchema } from "beautiful-react-diagrams";
import DiagramComp from './diaComp';

// the diagram model
const initialSchema = createSchema({
    nodes: [
      {
        id: "node-1",
        content: <DiagramComp string = "Rewards" img="rewards"/>,
        coordinates: [250, 60],
        inputs: [{ id: "port-11", alignment: "left" }],
        outputs: [{ id: "port-12", alignment: "right" }]
      },
      {
        id: "node-2",
        content: <DiagramComp string = "State" img="state"/>,
        coordinates: [100, 200],
        inputs: [{ id: "port-21", alignment: "left" }],
        outputs: [{ id: "port-22", alignment: "right" }]
      },
      {
        id: "node-3",
        content: <DiagramComp string = "Action" img="action"/>,
        coordinates: [250, 220],
        inputs: [{ id: "port-31", alignment: "left" }],
        outputs: [{ id: "port-32", alignment: "right" }]
      }, 
      {
        id: "node-4",
        content: <DiagramComp string = "Agent" img="agent"/>,
        coordinates: [400, 200],
        inputs: [{ id: "port-41", alignment: "left" }],
        outputs: [{ id: "port-42", alignment: "right" }]
      }
    ],
    links: [
      { input: "node-1", output: "node-2" },
      { input: "node-1", output: "node-3" },
      { input: "node-2", output: "node-4" },
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
    const [exit, setExit] = useState(false);
    const [accountSet, setAccountSet] = useState(false);

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

    }, []);


    const handleOpenModal = () => {
        setExit(true);
    }
    
    const handleCloseModal = () => {
        setExit(false);
    }

    const handleOpenAccountModal = () => {
        setAccountSet(true)
    }

    const handleCloseAccountModal = () => {
        setAccountSet(false);
    }

    
    return (
        <>
        <Fragment>
            <div id = "sporeContainer" onKeyUp={handleOpenModal} onDoubleClick = {handleOpenAccountModal}>
                <canvas id= {accountSet == true ?  "mainCanvas_hidden" : 'mainCanvas' } className='main-canvas-container' ref={canvasRef}>
                </canvas>
                <div className='relativeZ10' >
                    {ready == true && <UncontrolledDiagram />}
                </div>
                
            </div>
            
        </Fragment>
        <div>
        {/* {ready == true && */}
            <ReactModal 
            isOpen={exit}
            contentLabel="Minimal Modal Example"
            className="exitModal"
            overlayClassName="Overlay"
            onRequestClose={handleCloseModal}
            >
            <div className = "exit_modal_head">DeepTrade.ML</div>
            <div className = "exit_modal_content">
                <p>There are unsaved changes in this scenario</p>
                <div onClick={handleCloseModal}>Save changes</div>
                <div style={{ background: "#888"}} onClick={handleCloseModal}>Discard Changes</div>
            </div>
            
            </ReactModal>

            <ReactModal 
            isOpen={accountSet}
            contentLabel="Minimal Modal Example"
            className="accountModal"
            overlayClassName="Overlay"
            onRequestClose={handleCloseAccountModal}
            >
            <div className = "account_modal_head">SET UP YOUR ACCOUNT</div>
            <div className = "account_modal_content">
                <p>Account Name</p>
                <input className='accountNameText' placeholder = 'Name'/>
                <p style = {{marginTop:"1em"}}>Your Broker</p>
                <select className='accountNameText'  >
                    <option>Broker</option>
                    <option>Destoryer</option>
                </select>
                <div>
                    <div>API Key:</div><div>handsome920112</div>
                </div>
                <div>
                    <div>Secret Key:</div><div>*******</div>
                </div>
            </div>
            
            </ReactModal>
        {/* } */}
        </div>
        </>
    );
}

export default DrawingCanvas;
