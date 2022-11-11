document.onclick= setImage;
function displayImage(){
    document.getElementById("center").style.display="block";
}

function setImage(e){
    console.log(e)
    function positions(){
        document.getElementById("uvimg").style.position="absolute";
        document.getElementById("uvimg").style.left=e.clientX+"px";
        document.getElementById("uvimg").style.top=e.clientY+"px";
        console.log(document.getElementById("uvimg"));
        console.log(e.clientX,e.clientY);
    }
    
    
    if(e.target.id==="uv"){
    document.getElementById("uvimg").setAttribute('src',"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-yuvraj.png")
    displayImage();
    positions();
    
}
    else if(e.target.id==="sehwag"){
        document.getElementById("uvimg").setAttribute('src',"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sehwag.png")
    displayImage();
    positions();
    
    }
    
    else if(e.target.id==="dhoni"){
        document.getElementById("uvimg").setAttribute('src',"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-dhoni.png")
        displayImage();
        positions();
    }
     else if(e.target.id==="sachin"){
        document.getElementById("uvimg").setAttribute('src',"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sachin.png")
        displayImage();
        positions();
    }
    else if(e.target.id==="kohli"){
        document.getElementById("uvimg").setAttribute('src',"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-virat-kohli.png")
        displayImage();
        positions();
    }
    else if(e.target.id==="gambhir"){
        document.getElementById("uvimg").setAttribute('src',"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-gambhir.png")
        displayImage()
        positions();
        positions();
    }
    else if(e.target.id==="raina"){
        document.getElementById("uvimg").setAttribute('src',"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-suresh-raina.jpg")
        displayImage()
        positions();
    }
    else if(e.target.id==="singh"){
        document.getElementById("uvimg").setAttribute('src',"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-harbhajan.jpg")
        displayImage()
        positions();
    }
    else if(e.target.id==="khan"){
        document.getElementById("uvimg").setAttribute('src',"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-zaheer-khan.jpg")
        displayImage()
        positions();
    }
    else if(e.target.id==="patel"){
        document.getElementById("uvimg").setAttribute('src',"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-munaf-patel.jpg")
        displayImage()
        positions();
    }
    else if(e.target.id==="s"){
        document.getElementById("uvimg").setAttribute('src',"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sreeshanth.jpg")
        displayImage()
        positions();
    }
    else {
        document.getElementById("center").style.display="none";
    }
    
}