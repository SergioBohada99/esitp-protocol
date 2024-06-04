import React, { useState } from "react";
import Frame from '../control/Frame.js';
import FrameControl from '../control/FrameControl.js';

function ProtocolInterface() {
  const [data, setData] = useState("");  // Valor inicial definido
  const [seg, setSeg] = useState("");  // Valor inicial definido
  const [frame, setFrame] = useState({
    ppt: false,
    ack: false,
    dtt: false,
    chk: false,
    dtl: false,
    crl: false,
    gd: false,
  });

  const handleTxtData = (e) => {
    setData(e.target.value);
  }

  const handleSegData = (e) => {
    setSeg(e.target.value);
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFrame((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const resetData = () => {
    setData("")
    setSeg("")
    setFrame({
        ppt: false,
        ack: false,
        dtt: false,
        chk: false,
        dtl: false,
        crl: false,
        gd: false,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let frameFlow = new Frame(frame.ppt, frame.ack, frame.dtt, frame.chk, frame.dtl, frame.crl, frame.gd, 1, null, data);
    const frameController = new FrameControl(frameFlow, seg);
    frameController.initCom();
    resetData()
    console.log("Final frame", frame)
  };

  return (
    <div className="main-content">
      <div className="element-content">
        <h2>ESIPT PROTOCOL</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-element">
            <h1>Introducir el mensaje: </h1>
            <input
              type="text"
              name="msg"
              className="input"
              pattern="\d+"
              placeholder="Mensaje"
              value={data}  // Asegúrate de que el valor esté definido
              onChange={handleTxtData}
            />
          </div>
          <div className="form-element">
            <h1>Numero de segmentos</h1>
            <input
              type="number"
              name="text"
              className="input"
              pattern="\d+"
              placeholder="Numero"
              value={seg}  // Asegúrate de que el valor esté definido
              onChange={handleSegData}
            />
          </div>
          <div className="form-element">
            <h1>Campos</h1>
            <label className="material-checkbox">
              <input
                type="checkbox"
                name="ppt"
                checked={frame.ppt}
                onChange={handleCheckboxChange}
              />
              <span className="checkmark"></span>
              ENQ
            </label>
            <label className="material-checkbox">
              <input
                type="checkbox"
                name="ack"
                checked={frame.ack}
                onChange={handleCheckboxChange}
              />
              <span className="checkmark"></span>
              ACK
            </label>
            <label className="material-checkbox">
              <input
                type="checkbox"
                name="dtt"
                checked={frame.dtt}
                onChange={handleCheckboxChange}
              />
              <span className="checkmark"></span>
              DTT
            </label>
            <label className="material-checkbox">
              <input
                type="checkbox"
                name="chk"
                checked={frame.chk}
                onChange={handleCheckboxChange}
              />
              <span className="checkmark"></span>
              CHK
            </label>
            <label className="material-checkbox">
              <input
                type="checkbox"
                name="dtl"
                checked={frame.dtl}
                onChange={handleCheckboxChange}
              />
              <span className="checkmark"></span>
              DTL
            </label>
            <label className="material-checkbox">
              <input
                type="checkbox"
                name="crl"
                checked={frame.crl}
                onChange={handleCheckboxChange}
              />
              <span className="checkmark"></span>
              CRL
            </label>
            <label className="material-checkbox">
              <input
                type="checkbox"
                name="gd"
                checked={frame.gd}
                onChange={handleCheckboxChange}
              />
              <span className="checkmark"></span>
              GD
            </label>
          </div>
          <button className="animated-button">
            <svg
              viewBox="0 0 24 24"
              className="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className="text">Enviar</span>
            <span className="circle"></span>
            <svg
              viewBox="0 0 24 24"
              className="arr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </form>
      </div>
      <div className="element-content console">
        <p>Source control</p>
        <br />
        <p>-----------------------------{">"}</p>
      </div>
    </div>
  );
}

export default ProtocolInterface;