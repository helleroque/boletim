function mudacor(e){
    if(e.value>=4.0){
        e.className="notaAzul";
    }
    else{
        e.className="notaVermelha";
    }
}

function mediaAnual(){
    p1= parseFloat(document.getElementById("pt1").value);
    p2= parseFloat(document.getElementById("pt2").value);
    p3= parseFloat(document.getElementById("pt3").value);
    p4= parseFloat(document.getElementById("pt4").value);

    mpt = document.getElementById("mediaPt");
    var mediaPt = (p1+p2+p3+p4)/4 ;
    mpt.innerHTML= mediaPt;
    
    m1= parseFloat(document.getElementById("mt1").value);
    m2= parseFloat(document.getElementById("mt2").value);
    m3= parseFloat(document.getElementById("mt3").value);
    m4= parseFloat(document.getElementById("mt4").value);

    mmt = document.getElementById("mediaMt");
    var mediaMt = (m1+m2+m3+m4)/4 ;
    mmt.innerHTML= mediaMt;

    h1= parseFloat(document.getElementById("ht1").value);
    h2= parseFloat(document.getElementById("ht2").value);
    h3= parseFloat(document.getElementById("ht3").value);
    h4= parseFloat(document.getElementById("ht4").value);

    mht = document.getElementById("mediaHt");
    var mediaHt = (h1+h2+h3+h4)/4 ;
    mht.innerHTML= mediaHt;

    g1= parseFloat(document.getElementById("ge1").value);
    g2= parseFloat(document.getElementById("ge2").value);
    g3= parseFloat(document.getElementById("ge3").value);
    g4= parseFloat(document.getElementById("ge4").value);

    mge = document.getElementById("mediaGe");
    var mediaGe = (g1+g2+g3+g4)/4;
    mge.innerHTML= mediaGe;

    i1= parseFloat(document.getElementById("in1").value);
    i2= parseFloat(document.getElementById("in2").value);
    i3= parseFloat(document.getElementById("in3").value);
    i4= parseFloat(document.getElementById("in4").value);

    min = document.getElementById("mediaIn");
    var mediaIn = (i1+i2+i3+i4)/4 ;
    min.innerHTML= mediaIn;
    
    if(mediaPt >= 4){
        mpt.className= "notaAzul";
    }else{
        mpt.className= "notaVermelha";
    }
    if(mediaMt>= 4){
        mmt.className= "notaAzul";
    }else{
        mmt.className= "notaVermelha";
    }
    if(mediaHt >= 4){
        mht.className= "notaAzul";
    }else{
        mht.className= "notaVermelha";
    }
    if(mediaGe >= 4){
        mge.className= "notaAzul";
    }else{
        mge.className= "notaVermelha";
    }
    if(mediaIn >= 4){
        min.className= "notaAzul";
    }else{
        min.className= "notaVermelha";
    }

    exame();
}

function exame(){
    p1= parseFloat(document.getElementById("pt1").value);
    p2= parseFloat(document.getElementById("pt2").value);
    p3= parseFloat(document.getElementById("pt3").value);
    p4= parseFloat(document.getElementById("pt4").value);
    var mediaPt = (p1+p2+p3+p4)/4 ;
    
    m1= parseFloat(document.getElementById("mt1").value);
    m2= parseFloat(document.getElementById("mt2").value);
    m3= parseFloat(document.getElementById("mt3").value);
    m4= parseFloat(document.getElementById("mt4").value);
    var mediaMt = (m1+m2+m3+m4)/4 ;

    h1= parseFloat(document.getElementById("ht1").value);
    h2= parseFloat(document.getElementById("ht2").value);
    h3= parseFloat(document.getElementById("ht3").value);
    h4= parseFloat(document.getElementById("ht4").value);
    var mediaHt = (h1+h2+h3+h4)/4 ;

    g1= parseFloat(document.getElementById("ge1").value);
    g2= parseFloat(document.getElementById("ge2").value);
    g3= parseFloat(document.getElementById("ge3").value);
    g4= parseFloat(document.getElementById("ge4").value);
    var mediaGe = (g1+g2+g3+g4)/4;

    i1= parseFloat(document.getElementById("in1").value);
    i2= parseFloat(document.getElementById("in2").value);
    i3= parseFloat(document.getElementById("in3").value);
    i4= parseFloat(document.getElementById("in4").value);
    var mediaIn = (i1+i2+i3+i4)/4 ;

    ept = document.getElementById("examePt");
    emt = document.getElementById("exameMt");
    eht = document.getElementById("exameHt");
    ege = document.getElementById("exameGe");
    ein = document.getElementById("exameIn");

    if(mediaPt < 5){
        ept.innerHTML= "Sim";
        ept.className= "notaVermelha";
    }
    else{
        ept.innerHTML= "Não";
        ept.className= "notaAzul";
    }
    if(mediaMt < 5){
        emt.innerHTML= "Sim";
        emt.className= "notaVermelha";
    }
    else{
        emt.innerHTML= "Não";
        emt.className= "notaAzul";
    }
    if(mediaHt < 5){
        eht.innerHTML= "Sim";
        eht.className= "notaVermelha";
    }else{
        eht.innerHTML= "Não";
        eht.className= "notaAzul";
    }
    if(mediaGe < 5){
        ege.innerHTML= "Sim";
        ege.className= "notaVermelha";
    }else{
        ege.innerHTML= "Não";
        ege.className= "notaAzul";
    }
    if(mediaIn < 5){
        ein.innerHTML= "Sim";
        ein.className= "notaVermelha";
    }else{
        ein.innerHTML= "Não";
        ein.className= "notaAzul";
    }

}

function finalizar(){

    rPt= parseFloat(document.getElementById("notaExamePt").value);
    rMt= parseFloat(document.getElementById("notaExameMt").value);
    rHt= parseFloat(document.getElementById("notaExameHt").value);
    rGe= parseFloat(document.getElementById("notaExameGe").value);
    rIn= parseFloat(document.getElementById("notaExameIn").value);

    p1= parseFloat(document.getElementById("pt1").value);
    p2= parseFloat(document.getElementById("pt2").value);
    p3= parseFloat(document.getElementById("pt3").value);
    p4= parseFloat(document.getElementById("pt4").value);

    mpt = document.getElementById("FinalPt");
    var finalPt = (p1+p2+p3+p4+rPt)/2 ;
    mpt.innerHTML= finalPt;
    
    m1= parseFloat(document.getElementById("mt1").value);
    m2= parseFloat(document.getElementById("mt2").value);
    m3= parseFloat(document.getElementById("mt3").value);
    m4= parseFloat(document.getElementById("mt4").value);

    mmt = document.getElementById("FinalMt");
    var finalMt = (m1+m2+m3+m4+rMt)/2 ;
    mmt.innerHTML= finalMt;

    h1= parseFloat(document.getElementById("ht1").value);
    h2= parseFloat(document.getElementById("ht2").value);
    h3= parseFloat(document.getElementById("ht3").value);
    h4= parseFloat(document.getElementById("ht4").value);

    mht = document.getElementById("FinalHt");
    var finalHt = (h1+h2+h3+h4+rHt)/2 ;
    mht.innerHTML= finalHt;

    g1= parseFloat(document.getElementById("ge1").value);
    g2= parseFloat(document.getElementById("ge2").value);
    g3= parseFloat(document.getElementById("ge3").value);
    g4= parseFloat(document.getElementById("ge4").value);

    mge = document.getElementById("FinalGe");
    var finalGe = (g1+g2+g3+g4+rGe)/2 ;
    mge.innerHTML= finalGe;

    i1= parseFloat(document.getElementById("in1").value);
    i2= parseFloat(document.getElementById("in2").value);
    i3= parseFloat(document.getElementById("in3").value);
    i4= parseFloat(document.getElementById("in4").value);

    min = document.getElementById("FinalIn");
    var finalIn = (i1+i2+i3+i4+rIn)/2 ;
    min.innerHTML= finalIn;

    if(finalPt < 4.0){
        mpt.innerHTML = "Reprovado";
        mpt.className ="notaVermelha";
    }else if(finalPt >= 4 && finalPt <7){
        mpt.innerHTML = "Exame";
    }else{
        mpt.innerHTML = "Aprovado";
        mpt.className = "notaAzul";
    }
    if(finalMt < 4.0){
        mmt.innerHTML = "Reprovado";
        mmt.className ="notaVermelha";
    }else if(finalMt >= 4 && finalMt <7){
        mmt.innerHTML = "Exame";
    }else{
        mmt.innerHTML = "Aprovado";
        mmt.className = "notaAzul";
    }
    if(finalHt < 4.0){
        mht.innerHTML = "Reprovado";
        mht.className ="notaVermelha";
    }else if(finalHt >= 4 && finalHt <7){
        mht.innerHTML = "Exame";
    }else{
        mht.innerHTML = "Aprovado";
        mht.className = "notaAzul";
    }
    if(finalGe < 4.0){
        mge.innerHTML = "Reprovado";
        mge.className ="notaVermelha";
    }else if(finalGe >= 4 && finalGe <7){
        mge.innerHTML = "Exame";
    }else{
        mge.innerHTML = "Aprovado";
        mge.className = "notaAzul";
    }
    if(finalIn < 4.0){
        min.innerHTML = "Reprovado";
        min.className ="notaVermelha";
    }else if(finalIn >= 4 && finalIn <7){
        min.innerHTML = "Exame";
    }else{
        min.innerHTML = "Aprovado";
        min.className = "notaAzul";
    }

    mediaAnual();
}
