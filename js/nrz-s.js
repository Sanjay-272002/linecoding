/*
 * This simulation uses the HTML5 canvas API.
 * Refer to this site https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
 */
var canvas = document.getElementById('canvas3');


/*
 * ctx2 stands for context - Every drawing function call is based on this context
 * The below comment is c special type of comment which will inform VSCode about the type
 * of the variable. Here ctx2 is of type *CanvasRenderingContext2D*. This is optional adding
 * this will var have better autocomplete features. Without this you won't have proper
 * autocompletion when you do *ctx2.*
 */
/** @type {CanvasRenderingContext2D} */
var ctx2 = canvas.getContext('2d');


var wave_frequency_span2 = document.getElementById("Fm1");
var wave_amplitude_span2 = document.getElementById("Am1");
var data2 = document.getElementById("dm1");
// var unsampled_wave_checkbox = document.getElementById("unsampled_wave");
// var sampled_points_checkbox = document.getElementById("sampled_points");
// var staircase_wave_checkbox = document.getElementById("staircase_wave");

var canvas_width2 = canvas.parentElement.clientWidth;
var canvas_height2 = canvas.parentElement.clientHeight;

var orgx2 = 15;
var orgy2 = 185;

var wave_amplitude_slider2 = document.getElementById("amplitude1");
var wave_frequency_slider2 = document.getElementById("frequency1");






/*
 * This function will draw c point at location x, y
 */
var line_start2 = 20;
var line_end2 = 330;


// Draws the axes for the graph
function drawAxesns() {

    ctx2.beginPath();
    // Vertical line
    ctx2.moveTo(15, line_start2);
    ctx2.lineTo(15, line_end2);
    ctx2.strokeStyle = "black";
    ctx2.stroke();

    // Horizontal line
    ctx2.moveTo(15, line_end2);
    ctx2.lineTo(canvas_width2 - 50, line_end2);
    ctx2.strokeStyle = "black";
    ctx2.stroke();

    // Base line
    // ctx2.moveTo(orgx2, (line_start2 + line_end2) / 2);
    // ctx2.lineTo(canvas_width2 - 50, (line_start2 + line_end2) / 2);
    // ctx2.strokeStyle = "black";
    // ctx2.stroke();

    ctx2.font = "20px Arial";
    ctx2.fillStyle = "black";
    ctx2.fillText("Amplitude", orgx2 + 10, line_start2 + 10, 90);
    ctx2.fillText("Time", canvas_width2 - 100, line_end2 + 20, 70);
    ctx2.closePath();

}
var xs1=line_end2,xs2=line_start2;
var c=[1,0,1,0];
let x3=0;
var stp1=10,edp1=80;
stp1=orgx2;
edp1=orgy2;
var ed1=edp1;
var data_bit1 = document.getElementById('data_bit1');
var val1 = data_bit1.value;
function basens(){
    var b=c.length-1;
    // console.log(orgx2);
     //console.log(orgy2);
     //console.log(ed1);
     stp1 = 10;
     edp1 = +wave_frequency_slider2.value;
     ed1=edp1;
     xs1=line_end2, xs2= +wave_amplitude_slider2.value;
    if(+c[0]==0){
            baselinens();
            stp1=edp1;
            edp1+=ed1;
        for(let i=1;i<c.length;i++){
        
        if((+c[i]==1)&&(+c[i-1]==0||+c[i-1]===undefined)){

            baselinens() 
            stp1=edp1;
            edp1+=ed1;
       
         
        }
        else if((+c[i]==1)&&(+c[i-1]==1)){

            baselinens() 
            stp1=edp1;
            edp1+=ed1;
            
            

        }
        else if((+c[i]==0)&&(+c[i-1]==0 ||+c[i-1]===undefined)){
            onedropns()
             x3=xs1;
             xs1=xs2;
              xs2=x3;
              stp1=edp1;
              edp1+=ed1;
        }
        else if((+c[i]==0)&&(+c[i-1]==1)){
            onedropns()
             x3=xs1;
             xs1=xs2;
              xs2=x3;
              stp1=edp1;
              edp1+=ed1;
                 
        }
       
    }
    }else{
            toplinens();
            stp1=edp1;
            edp1+=ed1;
        for(let i=1;i<c.length;i++){
        
        if((+c[i]==1)&&(+c[i-1]==0||+c[i-1]===undefined)){
            baselinens() 
            stp1=edp1;
            edp1+=ed1;
       
         
        }
        else if((+c[i]==1)&&(+c[i-1]==1)){
            baselinens() 
            stp1=edp1;
            edp1+=ed1;
            

        }
        else if((+c[i]==0)&&(+c[i-1]==0 ||+c[i-1]===undefined)){
            onedropns()
             x3=xs1;
             xs1=xs2;
              xs2=x3;
              stp1=edp1;
              edp1+=ed1;
        }
        else if((+c[i]==0)&&(+c[i-1]==1)){
            onedropns()
             x3=xs1;
             xs1=xs2;
              xs2=x3;
              stp1=edp1;
              edp1+=ed1;
                 
        }
        } 
    
 
    }
}
    

    function baselinens(){
            ctx2.beginPath()
            ctx2.moveTo(stp1,xs1);
            ctx2.lineTo(edp1,xs1);
            ctx2.stroke();
            ctx2.strokeStyle="black";
            ctx2.closePath();
    }
  function  onedropns(){


            ctx2.beginPath();
            ctx2.moveTo(stp1,xs1);
            ctx2.lineTo(stp1,xs2);
            ctx2.stroke();
            ctx2.strokeStyle="black";
            ctx2.closePath();
          
            ctx2.beginPath();
            ctx2.moveTo(stp1,xs2);
            ctx2.lineTo(edp1,xs2);
            ctx2.stroke();
            ctx2.strokeStyle="black";
            ctx2.closePath();

  }
    
  function toplinens(){
            ctx2.beginPath();
            ctx2.moveTo(stp1,xs2);
            ctx2.lineTo(edp1,xs2);
            ctx2.stroke();
            ctx2.strokeStyle="black";
            ctx2.closePath();
            x3=xs1;
            xs1=xs2;
            xs2=x3;
    }


function drawGraphns() {
    drawAxesns();
    basens();
}

var size_set = false;

function drawns() {
    requestAnimationFrame(drawns);
    
    canvas_height2 = canvas.parentElement.clientHeight;
   canvas_width2 = canvas.parentElement.clientWidth;
 if (canvas_height2 > 100 && !size_set) {
    canvas_height2 = canvas.parentElement.clientHeight + 200;
            canvas_width2 = canvas.parentElement.clientWidth;
             console.log("length");
          ctx2.canvas.width = canvas_width2;
            ctx2.canvas.height = canvas_height2;
            size_set= true;
    }
    // Clear the screen
    ctx2.fillStyle = "white";
    ctx2.fillRect(0, 0, canvas_width2, canvas_height2);

    // Set values for the indicators.
    wave_amplitude_span2.innerText = wave_amplitude_slider2.value + ' V';
    wave_frequency_span2.innerText = wave_frequency_slider2.value + ' Hz';
    data2.innerText=data_bit1.value;
    drawGraphns();
}


function graphns(){
    c = data_bit1.value.split('')
    
     $('#exampleModal1').modal('show');
     requestAnimationFrame(drawns);
 }
 document.getElementById("buttons1").onclick = graphns;
function setupModalns(event) {
    $('#exampleModalCenter1').modal('show');
}


document.getElementById("button3").onclick = setupModalns;