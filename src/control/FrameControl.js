class FrameControl {
    constructor(frame, seg) {
      this.frame = frame;
      this.seg = seg;
    }

    startCom(){
    
    }
   
  
    initCom() {
      const { ppt, ack, dtt, chk, dtl, crl, gd } = this.frame;
      const countTrue = [chk, dtl, crl, gd].filter(Boolean).length;
      console.log("Countrtrue",countTrue)
      if (ppt && !ack && !dtt && countTrue == 1) {
        startCom()
      } else {
        alert("La comunicación debe iniciar con una solicitud PPT y solo con un bit de control")
        console.log(this.frame);
      }
    }
  }


  export default FrameControl;
  