let array = [];
let y = -10;
let l = 0;
let txt = 0;
let x = 0;
let ct = 0;
let len = 0;
let corr = 0;
localStorage.setItem("txt", 0);
let selectColor = ["pink",'D4173F','E51E2B','495B53',"blue","red",
                   '#F85F68','77B1AD',"orange","green","grey","purple"];
var words = ["go","has","to","was","ate","are","do","so","me","you","mumbai","delhi","he","cat","surat","raj","jaipur",
            "agra","patna", "udaipur","bhopal","kanpur","find","nagpur","anjali","lucknow"];
var theme = ['b','m','o','a','e','u','b','g','i','i','g','d','g','o','r','e','w','l','h','a','i','l','s','u','r','a',
             't','a','g','r','e','a','j','a','h','i','o','d','u','r','p','u','r','e','a','a','g','p','u','r','u',
             'd','a','p','u','o','r','n','o','a','k','p','u','r','k','l','a'];

let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
c.width = window.innerWidth*0.99;
c.height = window.innerHeight*0.86;

function Ball(x, y, r, dy, color, text){
	this.x = x;
	this.y = y;
	this.r = r;
  this.dy = dy;
  this.color = color;
  this.text = text;

	this.draw = function(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.font = "20px Arial";
		ctx.fillStyle = "white";
		ctx.fillText(this.text, this.x - 8, this.y + 5);
	}
	this.update = function(){
		this.draw();
		this.y  +=this.dy;
	}

}

for (let i = 0; i < 70; i++){
	let x = Math.random()*(c.width-800)+360;
  y -= 50;
  let r = 20;
  let dy = 1;
  let color = selectColor[Math.floor(Math.random()*(selectColor.length-1))];
  let text = theme[Math.floor(Math.random()*(theme.length-1))];
  l++;
  array.push(new Ball(x, y, r, dy, color, text));
}

animate();

function animate(){
	requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (let f = 0; f < array.length; f++){
  	array[f].update();
  }
}

window.addEventListener("keyup", function(event){
  let char = String.fromCharCode(event.keyCode).toLowerCase();
  for (let d = 0; d < array.length; d++){
    if (char == array[d].text){
  		if (array[d].y <= c.height - 20 && array[d].y >= 20){
        localStorage.setItem("txt", 1);
        array[d].text = "";
        array[d].r = 0;
        break;
      }
  	}
  }
  if (localStorage.getItem("txt") == 1){
    document.getElementById("ans").innerHTML += char; 
    localStorage.setItem("txt", 0);
  }
});
   

function handleErase(){
	document.getElementById("ans").innerHTML = "";
}

function handleSubmit(){
	x = document.getElementById("ans").innerHTML;
  console.log(x);
		if (x != 'go'){
      document.getElementById("check").innerHTML = "CORRECT";
      len = (document.getElementById("ans").innerHTML).length;
      document.getElementById("score").innerHTML = len;
      let t1 = setTimeout(clear, 500);
      ct = 1;
      
		}
	
	if (ct != 1){
		document.getElementById("check").innerHTML = "WRONG";
		document.getElementById("ans").innerHTML = "";
    let t1 = setTimeout(clear,500);
	}
}

function clear(){
	document.getElementById("check").innerHTML = "";
  document.getElementById("ans").innerHTML = "";
}
