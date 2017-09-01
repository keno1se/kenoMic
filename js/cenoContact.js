'use strict';

    

function cenoDetails() {
    
    
/*------------------------------------------*/
/* TABLE -  cenoTable
*/

var cenoTable = document.createElement("TABLE");
cenoTable.setAttribute("id", "cenoTable");
document.body.appendChild(cenoTable);

var cenoTbody = document.createElement("TBODY");
cenoTable.appendChild(cenoTbody);

  /*---------------------------------------
  * th1
  */
var th1 = document.createElement("TH");
var txt = document.createTextNode("Feel free to contact me");
th1.appendChild(txt);
th1.setAttribute('colSpan', '2');
cenoTbody.appendChild(th1);

  //closing x
var thSpan = document.createElement('SPAN');
thSpan.setAttribute('onclick', 'cenoDetails.closeCenoTable();');
    
var txt = document.createTextNode('Close');
thSpan.appendChild(txt); 
th1.appendChild(thSpan);
    
    
   /*---------------------------------------
   * tr1
   */
 var tr1 = document.createElement("TR");
 cenoTbody.appendChild(tr1);
 
 var tr1td1 = document.createElement("TD");
 var txt = document.createTextNode("Email:");
 tr1td1.appendChild(txt);
 tr1.appendChild(tr1td1);
 
 var tr1td2 = document.createElement("TD");
 tr1.appendChild(tr1td2);
    
    
  /*---------------------------------------
  * tr2
  */
var tr2 = document.createElement("TR");
cenoTbody.appendChild(tr2);

var tr2td1 = document.createElement("TD");
var txt = document.createTextNode("linkedIn:");
tr2td1.appendChild(txt);
tr2.appendChild(tr2td1);

var tr2td2 = document.createElement("TD");
tr2.appendChild(tr2td2);
    
  /*---------------------------------------
  * tr3
  */
var tr3 = document.createElement("TR");
cenoTbody.appendChild(tr3);

var tr3td1 = document.createElement("TD");
var txt = document.createTextNode("GitHub:");
tr3td1.appendChild(txt);
tr3.appendChild(tr3td1);

var tr3td2 = document.createElement("TD");
tr3.appendChild(tr3td2);
    
/*---------------------------------------
  * tr4
  */
var tr4 = document.createElement("TR");
cenoTbody.appendChild(tr4);

var tr4td1 = document.createElement("TD");
var txt = document.createTextNode("nyNarvaro:");
tr4td1.appendChild(txt);
tr4.appendChild(tr4td1);

var tr4td2 = document.createElement("TD");
tr4.appendChild(tr4td2);
    
   /*---------------------------------------
    * trEmpty - create empty row, for spacing
    */
 var trEmpty = document.createElement("TR");
 cenoTbody.appendChild(trEmpty);
    
 
 /*---------------------------------------
   * th2 - the story of the page txt
   */
 var th2 = document.createElement("TH");
 th2.setAttribute('colSpan', '2');
 var txtP = document.createElement("P");
 var txt = document.createTextNode('This web page project forced me to learn allot on applying down to earth HTML5, CSS3/LESS and java script structures: JS – mouseout, mouseover, onclic, hover. Pre-processor LESS structuring for CSS-styling – good stuff! Solid understanding on how to position and size items on page, z-indexing, align text in a controlled way, Deep colour management – hsla is to prefer. Extract feature and learn from W3.css. All this and a tons of details. I got it to work this time – next time I make it better ;-)');
 txtP.appendChild(txt);
 th2.appendChild(txtP);
 cenoTbody.appendChild(th2);

     
   /*---------------------------------------
    * trEmpty - create empty row, for spacing
    */
 var trEmpty = document.createElement("TR");
 cenoTbody.appendChild(trEmpty);
     
     
   /*---------------------------------------
    * th3 - other links
    */
 var th3 = document.createElement("TH");
 var txt = document.createTextNode("Some fun links:");
 th3.appendChild(txt);
 //th3.setAttribute('colSpan', '2');
 cenoTbody.appendChild(th3);
    
 /*---------------------------------------
  * tr5
  */
var tr5 = document.createElement("TR");
cenoTbody.appendChild(tr5);

var tr5td1 = document.createElement("TD");
var txt = document.createTextNode("Håkan Ehn:");
tr5td1.appendChild(txt);
tr5.appendChild(tr5td1);

var tr5td2 = document.createElement("TD");
tr5.appendChild(tr5td2);   
    
 /*---------------------------------------
  * tr6
  */
var tr6 = document.createElement("TR");
cenoTbody.appendChild(tr6);

var tr6td1 = document.createElement("TD");
var txt = document.createTextNode("David Barrett:");
tr6td1.appendChild(txt);
tr6.appendChild(tr6td1);

var tr6td2 = document.createElement("TD");
tr6.appendChild(tr6td2);       
    
 /*---------------------------------------
  * tr7
  */
var tr7 = document.createElement("TR");
cenoTbody.appendChild(tr7);

var tr7td1 = document.createElement("TD");
var txt = document.createTextNode("Hohner:");
tr7td1.appendChild(txt);
tr7.appendChild(tr7td1);

var tr7td2 = document.createElement("TD");
tr7.appendChild(tr7td2);       
    
 /*---------------------------------------
  * tr8
  */
var tr8 = document.createElement("TR");
cenoTbody.appendChild(tr8);

var tr8td1 = document.createElement("TD");
var txt = document.createTextNode("A place to be:");
tr8td1.appendChild(txt);
tr8.appendChild(tr8td1);

var tr8td2 = document.createElement("TD");
tr8.appendChild(tr8td2);  
    
    
    
    
 /*---------------------------------------
   * A - table links
   */
  
   /* Email */
 var yahoo = document.createElement('A');
 var txt = document.createTextNode
 ('keno1se@yahoo.se');
 yahoo.appendChild(txt);
 yahoo.setAttribute
 ('href', 'mailto:keno1se@yahoo.se');
 tr1td2.appendChild(yahoo);
     
  /* linkedIN */
var linkedIn = document.createElement('A');
var txt = document.createTextNode
('Kenneth Nordman search in: https://www.linkedin.com/');
linkedIn.appendChild(txt);
linkedIn.setAttribute
('href', 'https://www.linkedin.com/in/kenneth-nordman-56349011/');
linkedIn.setAttribute('target', '_blank');
tr2td2.appendChild(linkedIn);    
    
  /* GitHub */
var git = document.createElement('A');
var txt = document.createTextNode
('https://github.com/keno1se/');
git.appendChild(txt);
git.setAttribute
('href', 'https://github.com/keno1se/');
git.setAttribute('target', '_blank');
tr3td2.appendChild(git);
    
  /* Web page */
var kenoMic = document.createElement('A');
var txt = document.createTextNode
('https://keno1se.github.io/nyNarvaro/');
kenoMic.appendChild(txt);
kenoMic.setAttribute
('href', 'https://keno1se.github.io/nyNarvaro/');
kenoMic.setAttribute('target', '_blank');
tr4td2.appendChild(kenoMic);
  
  /* Ehn */
var Ehn = document.createElement('A');
var txt = document.createTextNode
('https://www.youtube.com/user/HakanEhn');
Ehn.appendChild(txt);
Ehn.setAttribute
('href', 'https://www.youtube.com/user/HakanEhn');
Ehn.setAttribute('target', '_blank');
tr5td2.appendChild(Ehn);

  /* David */
var David = document.createElement('A');
var txt = document.createTextNode
('https://www.bluesharmonica.com/home');
David.appendChild(txt);
David.setAttribute
('href', 'https://www.bluesharmonica.com/home');
David.setAttribute('target', '_blank');
tr6td2.appendChild(David);
   
  /* Hohner */
var Hohner = document.createElement('A');
var txt = document.createTextNode
('http://www.hohner.de/');
Hohner.appendChild(txt);
Hohner.setAttribute
('href', 'http://www.hohner.de/');
Hohner.setAttribute('target', '_blank');
tr7td2.appendChild(Hohner);    
    
  /* Festival */
var Festival = document.createElement('A');
var txt = document.createTextNode
('https://www.whf-2017.de/en/welcome/');
Festival.appendChild(txt);
Festival.setAttribute
('href', 'https://www.whf-2017.de/en/welcome/');
Festival.setAttribute('target', '_blank');
tr8td2.appendChild(Festival);   
    
    
    
    
    
  /*-------------------------------------------*/
  /*--         CENO CSS                      --*/
  /*-------------------------------------------*/

  /*----------------------------
   * TABLE - cenoTable
   */

cenoTable.style.position = 'absolute';
cenoTable.style.zIndex = '5';  //put ontop of zIndex stack    
cenoTable.style.marginTop = '15px';
cenoTable.style.marginLeft = '90px';
cenoTable.style.width = '555px';
cenoTable.style.paddingBottom = '15px';
cenoTable.style.paddingRight = '10px';
cenoTable.style.border = 'outSet';
cenoTable.style.background = 'hsla(0, 0%, 90%, 1.0)';  //grey
cenoTable.style.visibility = 'hidden';

/*-- Table Header styling --*/
th1.style.textAlign = 'left';
th2.style.textAlign = 'left';
th3.style.textAlign = 'left';

  //align close text to the right away from TH txt 
thSpan.style.marginRight = '40%';
thSpan.style.marginLeft = '60%';
thSpan.style.background = 'hsla(0, 0%, 80%, 1.0)';  //grey
thSpan.style.cursor = 'pointer'; 

  //empty row, syle how much space needed with height    
trEmpty.style.height = '0px';

txtP.style.color = 'green';
txtP.style.fontWeight = 'normal';
txtP.style.fontStyle = 'italic';

   
    
    
    
  /*-------------------------------------------*/
  /*--         OPEN cenoTable FUNCTION       --*/
  /*-------------------------------------------*/
  /* After ceno table created (with cenoDetails function), 
   * this function will make the table visible again after being closed. 
   */
        
openCenoTable();
    
function openCenoTable() {
    var openTable = document.getElementById("cenoTable");
    openTable.style.visibility = 'visible';
}  //end funct
    
        
  /*----------------------------
   * make this nested function available in console
   * with cenoDetails.openCenoTable or cenoDetails.openCenoTable()    
   */
cenoDetails.openCenoTable = openCenoTable;

    
   
  /*-------------------------------------------*/
  /*--         CLOSE cenoTable FUNCTION      --*/
  /*-------------------------------------------*/
  /* After ceno table created (with cenoDetails function), 
   * this function will make the table hidden again after being opened. 
   */
    
function closeCenoTable() {
    var closeTable = document.getElementById("cenoTable");
    closeTable.style.visibility = 'hidden';
}  //end funct
    
    
  /*----------------------------
   * make this nested function available in console
   * with cenoDetails.closeCenoTable or cenoDetails.closeCenoTable()    
   */
cenoDetails.closeCenoTable = closeCenoTable;

    
    
/***-------------------------------------***/    
/***-------------------------------------***/    
/***-------------------------------------***/    
    
} //end function cenoDetails

/***-------------------------------------***/    
/***-------------------------------------***/    
/***-------------------------------------***/    


