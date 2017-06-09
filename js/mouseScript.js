    
/***********************/
/*** scriptMouseOver ***/
/***********************/

/* (1-reload)"first" text is visible in the DOM at reloade  */
/* (2-mouseover)"Element.childNodes[]" text is hidden but it's content writes over the visible "first" and is now visible  */
/* (3-mouseout)"last" text is hidden but it's content writes over the visible "first" and is now visible   */




function scriptMouseOverPic(Element) {
document.getElementById("first").style.border = "2px solid orange"; //Put this first, childNodes in range

    var picClassNames = document.getElementsByClassName("pic");

    for (var i = 0; i < picClassNames.length; i++){
        picClassNames[i].style.opacity = "0.5"; }   //make all pic half opcity
    
    Element.style.opacity = "1.0";  //Make only the active pic with full opacity
    
    
    
    /***------------------------------------------------------------------------------------------------***/
    /***         test script: find nodeType and nodeName                                                ***/
    /***------------------------------------------------------------------------------------------------***/
    /*var c = document.getElementById("pic4").childNodes;   //use this when want to see childNodes for any id */
    /*var c = Element.childNodes;   //use this when mouseOve any id with (this)    */
    /*var txt = "";
    var i;
    for (i = 0; i < c.length; i++){
        txt = txt + "** " + c[i].nodeType + "- " + c[i].nodeName  + " **" + ", ";
    }*/
    /***------------------------------------------------------------------------------------------------***/

    
    /*** childNodes[3] is nodeType:1- element node, nodeName.DIV ***/
document.getElementById("first").innerHTML = Element.childNodes[3].innerHTML;   /* load picture text in first*/ 
    
    
    
       /* activate this line when using the test script */ 
/*document.getElementById("textBoxBottomNest").innerHTML = txt;*/
        
}   //end function


/**********************/
/*** scriptMouseOut ***/
/**********************/

function scriptMouseOutPic() {
        document.getElementById("first").innerHTML = document.getElementById("last").innerHTML;

        var picClassNames = document.getElementsByClassName("pic");
    
        for (var i = 0; i < picClassNames.length; i++){
        picClassNames[i].style.opacity = "1.0";
        }

    document.getElementById("first").style.border = "2px solid black";
}   //end function


/* (1-reload)"first" text is visible in the DOM at reloade  */
/* (2-mouseover)"Element.childNodes[]" text is hidden but it's content writes over the visible "first" and is now                    visible  */
/* (3-mouseout)"last" text is hidden but it's content writes over the visible "first" and is now visible   */


    /***------------------------------------------------------------------------------------------------***/
    /*** EMAILJS, everytime someone clicks on pic1  - email sent to my gmail                            ***/
    // function can't be called emailjs

document.getElementById("pic1").onclick = function pic1SndEmail() {
     emailjs.send("default_service", "emailjs000",{});
};




