class Frame {


    constructor(ppt,ack,dtt,chk,dtl,crl,gd,seq,preFrame,data) {
        this.ind = "01111110"
        this.ppt = ppt;
        this.ack = ack;
        this.dtt = dtt;
        this.chk = chk;
        this.dtl = dtl;
        this.crl = crl;
        this.gd = gd;
        this.seq = seq;
        this.data = data;
        this.preFrame = preFrame;
    }
    

}

export default Frame;