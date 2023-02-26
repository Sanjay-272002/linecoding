/*
 * This simulation uses the HTML5 canvas API.
 * Refer to this site https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
 */
let canvas = document.getElementById('canvas2');


/*
 * ctx stands for context - Every drawing function call is based on this context
 * The below comment is a special type of comment which will inform VSCode about the type
 * of the variable. Here ctx is of type *CanvasRenderingContext2D*. This is optional adding
 * this will let have better autocomplete features. Without this you won't have proper
 * autocompletion when you do *ctx.*
 */
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext('2d');

let wave_frequency_span1 = document.getElementById("Fm2");
let wave_amplitude_span1 = document.getElementById("Am2");
let data = document.getElementById("dm2");
 let canvas_width = canvas.parentElement.clientWidth;
 let canvas_height = canvas.parentElement.clientHeight;

let orgx1 = 10;
let orgy1 = 80;


let wave_amplitude_slider1 = document.getElementById("amplitude2");
let wave_frequency_slider1 = document.getElementById("frequency2");

let line_start1 = 15;
let line_end1 = 330;
// Draws the axes for the graph
function drawAxesnm() {
    

    ctx.beginPath();
    // Vertical line
    ctx.moveTo(10, 10);           
    ctx.lineTo(10, 330);
    ctx.strokeStyle = "black";
    ctx.stroke();

    // Horizontal line
    ctx.moveTo(10, 330);
    ctx.lineTo(canvas_width - 50, 330);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //Base line
    // ctx.moveTo(orgx2, (line_start2 + line_end2) / 2);
    // ctx.lineTo(canvas_width - 50, (line_start2 + line_end2) / 2);
    // ctx.strokeStyle = "black";
    // ctx.stroke();

    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Amplitude", orgx1 + 10, line_start1 + 10, 90);
    ctx.fillText("Time", canvas_width - 100, line_end1 + 20, 70);
    ctx.closePath();
    
}
let x1=line_end1;
let x2=line_start1;
let x3=0;
let a=[1,0,1,0];
let stp=10,edp=80;
stp=orgx1;
edp=orgy1;
let ed=edp;
let data_bit = document.getElementById('data_bit2');
let val = data_bit.value;
function basenm(){
    let b=a.length-1;
    stp=10,edp= +wave_frequency_slider1.value;ed=edp;
     x1=line_end1;
 x2= +wave_amplitude_slider1.value;
    if(+a[0]==0){
            baselinenm();
            stp=edp;
            edp+=ed;
            
        for(let i=1;i<a.length;i++){
        
        if((+a[i]==1)&&(+a[i-1]==0||+a[i-1]===undefined)){
            onedropnm()
          x3=x1;
          x1=x2;
          x2=x3;
          stp=edp;
          edp+=ed;
         
        }
        else if((+a[i]==1)&&(+a[i-1]==1)){
            onedropnm()
             x3=x1;
             x1=x2;
              x2=x3;
              stp=edp;
              edp+=ed;
            

        }
        else if((+a[i]==0)&&(+a[i-1]==0 ||+a[i-1]===undefined)){
            baselinenm()
                stp=edp;
                edp+=ed;
        }
        else if((+a[i]==0)&&(+a[i-1]==1)){
            baselinenm() 
            stp=edp;
            edp+=ed;
                 
        }
       
    }
    }else{
            toplinenm();
            stp=edp;
            edp+=ed;
        for(let i=1;i<a.length;i++){
        
        if((+a[i]==1)&&(+a[i-1]==0||+a[i-1]===undefined)){
            onedropnm()
          x3=x1;
          x1=x2;
          x2=x3;
          stp=edp;
          edp+=ed;
         
        }
        else if((+a[i]==1)&&(+a[i-1]==1)){
            onedropnm()
             x3=x1;
             x1=x2;
              x2=x3;
              stp=edp;
              edp+=ed;
            

        }
        else if((+a[i]==0)&&(+a[i-1]==0 ||+a[i-1]===undefined)){
            baselinenm()
                stp=edp;
                edp+=ed;
        }
        else if((+a[i]==0)&&(+a[i-1]==1)){
            baselinenm() 
            stp=edp;
            edp+=ed;
                 
        }
        } 
    
 
    }
}
    

    function baselinenm(){
            ctx.beginPath()
            ctx.moveTo(stp,x1);
            ctx.lineTo(edp,x1);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
    }
  function  onedropnm(){


            ctx.beginPath();
            ctx.moveTo(stp,x1);
            ctx.lineTo(stp,x2);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
          
            ctx.beginPath();
            ctx.moveTo(stp,x2);
            ctx.lineTo(edp,x2);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();

  }
    
  function toplinenm(){
            ctx.beginPath();
            ctx.moveTo(stp,x2);
            ctx.lineTo(edp,x2);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
            x3=x1;
            x1=x2;
            x2=x3;
    }
 
function drawGraph() {
    
    drawAxesnm();
    basenm();
}

let size_set = false;
let animateId;

function drawnm() {
 requestAnimationFrame(drawnm);

    canvas_height = canvas.parentElement.clientHeight;
    canvas_width = canvas.parentElement.clientWidth;
    if (canvas_height > 100 && !size_set) {
        canvas_height = canvas.parentElement.clientHeight + 200;
        canvas_width = canvas.parentElement.clientWidth;
        console.log("length");
        ctx.canvas.width = canvas_width;
        ctx.canvas.height = canvas_height;
        size_set = true;
    }
    // Clear the screen
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas_width, canvas_height);

    // Set values for the indicators.
    wave_amplitude_span1.innerText = wave_amplitude_slider1.value + ' V';
    wave_frequency_span1.innerText = wave_frequency_slider1.value + ' Hz';
    data.innerText=data_bit.value;
    
    drawGraph();
  
}

function graphnm(){
    a = data_bit.value.split('')
    
     $('#exampleModal2').modal('show');
     requestAnimationFrame(drawnm);
    //  draw()
 }
 document.getElementById("buttons2").onclick = graphnm;
function setupModalnm(event) {
    $('#exampleModalCenter2').modal('show');
}

document.getElementById("button2").onclick = setupModalnm;