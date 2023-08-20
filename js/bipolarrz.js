
let canvas = document.getElementById('canvas7');
let ctx = canvas.getContext('2d');
let wave_frequency_span = document.getElementById("Fm7");
let wave_amplitude_span = document.getElementById("Am7");
let data = document.getElementById("dm7");
let canvas_width = canvas.parentElement.clientWidth;
let canvas_height = canvas.parentElement.clientHeight;
let wave_amplitude_slider = document.getElementById("amplitude7");
let wave_frequency_slider = document.getElementById("frequency7");
const modal = document.getElementById("exampleModal6");
const downloadButton = document.getElementById("downloadButton6");
let line_start = 10;
let line_end = 320;
let orgx = 10;
let orgy = 80;
let ed;
let a=[0,1,0,1,1,0];
let stp=0,edp=0;
stp=orgx;
edp=orgy;
ed=edp;
let b=a.length-1;
var data_bit = document.getElementById('data_bit'); //6
var val = data_bit.value;
let x1=(line_start + line_end) / 2,x2=140,x3=180;
let count=0;

function base(){
    stp=10,edp= +wave_frequency_slider.value ,ed=edp;
    count=0;
    b=a.length-1;
    x1=(line_start + line_end) / 2,x2=140-(+wave_amplitude_slider.value),x3=190 + (+wave_amplitude_slider.value);
    if(a[0]==0){
        baseline();
        stp=edp;
        
    
    for(let i=1;i<a.length;i++){
       if(a[i]==0){
        edp+=ed;
        baseline();
        stp=edp;
        edp+=ed;
       } else if(count%2==0){
        onedrop()
        count+=1;
       }else{
        down()
        count+=1;
       }
    }
}else{
    firstone()
    count=+1;
    for(let i=1;i<a.length;i++){
       if(a[i]==0){
        edp+=ed;
        baseline();
        stp=edp;
        edp+=ed;
       } else if(count%2==0){
        onedrop()
        count+=1;
       }else{
        down()
        count+=1;
       }
    }
}
}


function baseline(){
            ctx.beginPath()
            ctx.moveTo(stp,x1);
            ctx.lineTo(edp,x1);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
    }
  function  onedrop(){


            ctx.beginPath();
            ctx.moveTo(stp,x1);
            ctx.lineTo(stp,x2);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
            edp=stp;
            edp+=(ed/2);
           console.log(edp)
         
            ctx.beginPath();
            ctx.moveTo(stp,x2);
            ctx.lineTo(edp,x2);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
            stp=edp;
         
            console.log(edp)
            ctx.beginPath();
            ctx.moveTo(stp,x2);
            ctx.lineTo(stp,x1);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
            edp=stp;
            edp+=(ed/2);
            console.log(edp)
            ctx.beginPath();
            ctx.moveTo(stp,x1);
            ctx.lineTo(edp,x1);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
            stp=edp;
            console.log(edp)
          

  }
    
  function firstone(){
            edp=(ed/2);
            ctx.beginPath();
            ctx.moveTo(stp,x2);
            ctx.lineTo(edp,x2);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
            stp=edp;
            
            ctx.beginPath();
            ctx.moveTo(stp,x2);
            ctx.lineTo(stp,x1);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
            edp=stp;
            edp+=(ed/2);
       
            ctx.beginPath();
            ctx.moveTo(stp,x1);
            ctx.lineTo(edp,x1);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
            stp=edp;
            console.log(edp)
}

function down(){
    ctx.beginPath();
            ctx.moveTo(stp,x1);
            ctx.lineTo(edp,x1);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
            stp=edp;
         
            console.log(edp)
            ctx.beginPath();
            ctx.moveTo(stp,x1);
            ctx.lineTo(stp,x3);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
            edp=stp;
            edp+=(ed/2);
            console.log(edp)
            ctx.beginPath();
            ctx.moveTo(stp,x3);
            ctx.lineTo(edp,x3);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
            stp=edp;
            console.log(edp)

            ctx.beginPath();
            ctx.moveTo(stp,x3);
            ctx.lineTo(stp,x1);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
            edp=stp;
            edp+=(ed/2);
           console.log(edp)
}

// Draws the axes for the graph
function drawAxes() {
    

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

   // Base line
    ctx.moveTo(orgx, (line_start + line_end) / 2);
    ctx.lineTo(canvas_width - 50, (line_start + line_end) / 2);
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Amplitude", orgx + 10, line_start + 10, 90);
    ctx.fillText("Time", canvas_width - 100, line_end + 20, 70);
    ctx.fillText("fs", 80, 350, 70);
    ctx.fillText("2fs", 160, 350, 70);
    ctx.fillText("3fs", 240, 350, 70);
    ctx.fillText("4fs", 320, 350, 70);
    ctx.fillText("5fs", 400, 350, 70);
    ctx.fillText("6fs", 480, 350, 70);
    ctx.fillText("7fs", 560, 350, 70);
    ctx.fillText("8fs", 640, 350, 70);
    ctx.closePath();
    
}


function drawGraph() {
    
    drawAxes();
    base();
}

let size_set = false;
function draw() {
   requestAnimationFrame(draw);

    canvas_height = canvas.parentElement.clientHeight;
    canvas_width = canvas.parentElement.clientWidth;
    if (canvas_height > 100 && !size_set) {
        canvas_height = canvas.parentElement.clientHeight +200;
        canvas_width = canvas.parentElement.clientWidth;
        ctx.canvas.width = canvas_width;
        ctx.canvas.height = canvas_height;
        size_set = true;
        console.log("false")
 }
    // Clear the screen
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas_width, canvas_height);

    // Set values for the indicators.
    wave_amplitude_span.innerText = wave_amplitude_slider.value + ' V';
    wave_frequency_span.innerText = wave_frequency_slider.value + ' Hz';
    data.innerText=data_bit.value;
    orgy=wave_frequency_slider.value;
    drawGraph();
}
function graph(){
   a = data_bit.value.split('')
    $('#exampleModal6').modal('show');
    requestAnimationFrame(draw);
}
document.getElementById("button7").onclick = graph; //6


downloadButton.addEventListener("click", function () {
  html2canvas(modal).then(function (canvas) {
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "modal_screenshot.png";
    link.click();
  });
});