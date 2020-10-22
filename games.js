let canvs = document.getElementById("canvas");
//get draw 2d
let ctx = canvs.getContext("2d");
bg = new Image();
bg.src = 'images/OOK2510.jpg';
img = new Image();
img.src = 'images/10918-NN3ZDA.jpg';

img2 = new Image();
img2.src = 'images/fuel_dispenser.png';
img3 = new Image();
img3.src = 'images/star-icon.png';
img4 = new Image();
img4.src = 'images/Gauge-512.png'
logo=new Image();
logo.src='logo/sky2.png';

let xClm = 1024+parseInt(Math.random()*200);
let yClm = 200+parseInt(Math.random()*200);
let xClm1 = 1024+parseInt(Math.random()*200);
let yClm1 = 300+parseInt(Math.random()*200);
let xClm2 = 1024+parseInt(Math.random()*200);
let yClm2 = 400+parseInt(Math.random()*200);
// 鸟
birds1=new Image();
birds1.src='images/Transparent PNG/Bird A/frame-1.png';
birds2=new Image();
birds2.src='images/Transparent PNG/Bird B/frame-1.png';
birds3=new Image();
birds3.src='images/Transparent PNG/Bird C/frame-1.png';
cloud=new Image();
cloud.src='images/81279-OGBU5G-780.jpg';
let dx=100,
    dy=100,
    s=200+parseInt(Math.random()*200),
    s1=400+parseInt(Math.random()*200),
    sy=-200,
    ssy=-200,
    dd=8,
    score=parseInt(document.getElementById('star').innerHTML),
    times = parseInt(document.getElementById('fire').innerHTML),
    timese = parseInt(document.getElementById('timein').innerHTML)
    cx=700,
    cy=400;
let gameStart = false;
let gameOver = false;
let gameStop = false;
let starc = document.getElementById('star');
let fire = document.getElementById('fire');
let timein = document.getElementById('timein');
// game dom
let gameof = document.getElementById('gameof');
let gogame = document.getElementById('goGame');
let gameCode = document.getElementById('gameCode');
let continues = document.getElementById('continues');
let rankgo = document.getElementById('rankgo');
let rank = document.getElementById('rank');
let names = document.getElementById('names');
let rankgame = document.getElementById('rankgame');
let ranks = document.getElementById('ranks');
// game dom out
let size = 16;

function runColumn(xClm,yClm,dx,dy){
    if(xClm<=(194+dx) && xClm>dx){
        if(dy<yClm && dy>(yClm-50) || dy>yClm && dy<(yClm+40) || dy<yClm && dy>(yClm-100)){
            return true;
        }
    }
    return false;
}
function starGet(s1,ssy,dx,dy){
    if(dy>ssy && dy<(ssy+50) || dy<=ssy && dy>=(ssy-90)){
        if(s1>=(dx-30) && s1<dx || s1>dx && s1<=(dx+180)){
            return true;
        }
    }
}
function fireGet(s,sy,dx,dy){
    if(dy>sy && dy<(sy+50) || dy<=sy && dy>=(sy-90)){
        if(s>=(dx-30) && s<dx || s>dx && s<=(dx+180)){
            return true;
        }
    }
}
function timeof(){
    times--;
    timese++;
    fire.innerHTML = times;
    timein.innerHTML = timese;
}

function flyBird(){
    ctx.clearRect(0,0,canvs.width,canvs.height);
    // ctx.drawImage(bg,0,0,2000,2000,0,0,1024,768);
    ctx.drawImage(cloud,900,850,1660,400,cx,cy,700,300);
    ctx.drawImage(img,600,570,350,160,dx,dy,200,100);
    ctx.drawImage(logo,190,0,512,512,0,0,150,150);
    ctx.drawImage(img2,0,0,512,512,s,sy,50,50);
    ctx.drawImage(img3,0,0,1024,1024,s1,ssy,50,50);
    ctx.drawImage(birds1,0,0,1024,1024,xClm,yClm,100,100);
    ctx.drawImage(birds2,0,0,1024,1024,xClm1,yClm1,100,100);
    ctx.drawImage(birds3,0,0,1024,1024,xClm2,yClm2,100,100);
    ctx.drawImage(img3,0,0,1024,1024,190,60,30,30);
    ctx.drawImage(img2,0,0,1024,1024,270,60,80,80);
    ctx.drawImage(img4,0,0,1024,1024,350,60,80,80);
    // game start
    if(gameStart && gameOver !=true && gameStop ==false){
        let isRun = runColumn(xClm,yClm,dx,dy);
        let isRun1 = runColumn(xClm1,yClm1,dx,dy);
        let isRun2 = runColumn(xClm2,yClm2,dx,dy);
        let stars = starGet(s1,ssy,dx,dy);
        let firein = fireGet(s,sy,dx,dy);
        if(stars){
            score+=1;
            starc.innerHTML = score;
            ssy=-200;
        }
        if(firein){
            if (times +10>=30){
                times=30;
                fire.innerHTML = times;
            }else{
                times+=10;
                fire.innerHTML = times;
            }
            sy=-200;
        }
        if(isRun){
            times-=10;
            fire.innerHTML = times;
            xClm = 1400;
        }else if(isRun1){
            times-=10;
            fire.innerHTML = times;
            xClm1 = 1400;
        }else if(isRun2){
            times-=10;
            fire.innerHTML = times;
            xClm2 = 1400;
        }

        if(times<=0){
            gameOver = true;
            clearInterval(stopImg)
        }
        sy++;
        ssy+=2;
        xClm--;
        xClm1--;
        xClm2--;
        cx--;
        xClm <-78?xClm = 1000 :'';
        xClm1 <-78?xClm1 = 1000 :'';
        xClm2 <-78?xClm2 = 1000 :'';
        cx < -78?cx=1000:'';
        sy >800?sy = 0 :'';
        ssy>800?ssy=0:'';
    }
    if (gameOver == true){
        continues.style.display = 'block';
        gameCode.style.display = 'none';
        gameOver=false;
        clearInterval(gobird)
    }
    // game start over
}
let gobird = setInterval(flyBird,50)

// 音乐播放
function bf(){
    var audio = document.getElementById('myaudio');
    if(audio!==null){
        if(audio.paused){
            audio.play();
        }else{
            audio.pause();
        }
    }
}
// 音乐播放结束

// 尺寸开始
function sizes(){
    starc.style.fontSize=size+'px';
    fire.style.fontSize=size+'px';
    timein.style.fontSize=size+'px';
    size++;
}
function sized(){
    starc.style.fontSize=size+'px';
    fire.style.fontSize=size+'px';
    timein.style.fontSize=size+'px';
    size--;
}
// 尺寸结束

// 暂停游戏
function stops(){
    if (gameStop==false){
        gameStop = true;
        clearInterval(stopImg)
    }else if(gameStop==true){
        gameStop = false;
        stopImg = setInterval(timeof,1000)
    }
}
// 暂停游戏结束

// 游戏界面方法
names.onchange  = function (){
    rankgo.removeAttribute('disabled');
}

gogame.onclick=function (){
    gameof.style.display = 'none';
    gameCode.style.display='block';
    gameStart=true;
    flyBird();
    stopImg  = setInterval(timeof,1000);
}
rankgo.onclick=function(){
    if ($('#names').val() == ''){
        return false;
    }else{
        $.ajax({
            url: 'php/register.php',
            type: 'POST',
            data:{
                name:$('#names').val(),
                time:timese,
                stars:score
            },
            dataType: 'json',
            success: function(data) {
                let i=1;
                for (o in data){
                    let li = document.createElement('li');
                    li.innerHTML ='<span>'+i+'</span>'+
                        '<span>'+data[o].name+'</span>'+
                        '<span>'+data[o].stars+'</span>'+
                        '<span>'+data[o].time+'</span>';
                    ranks.appendChild(li);
                    i++;
                }

            }
        });
        continues.style.display='none';
        rank.style.display='block';
    }
}
rankgame.onclick = function (){
    gameStart = true;
    gameOver = false;
    gameStop = false;
    rank.style.display ='none';
    gameCode.style.display = 'block';
    gobird = setInterval(flyBird,50);
    score=0;
    times = 30;
    timese =0;
    stopImg  = setInterval(timeof,1000);
}
// 游戏界面方法结束

// 飞机飞行
window.onload = function(){
    let  left = false;
    let  right = false;
    let  top = false;
    let  bottom = false;
    setInterval( function (){
        if (left){
            dx-=dd;
        } else if (top){
            dy-=dd;
        } else if (right){
            dx+=dd;
        } else  if (bottom){
            dy+=dd;
        }
    },50);
    document.onkeydown =  function (ev){
        var  ev = ev || event;
        var  keyCode = ev.keyCode;
        switch (keyCode){
            case  37: left = true; break ;
            case  38: top = true; break ;
            case  39: right = true; break ;
            case  40: bottom = true; break ;
            case  32:
            if (gameStop==false){
                gameStop = true;
                clearInterval(stopImg)
            }else if(gameStop==true){
                gameStop = false;
                stopImg = setInterval(timeof,1000)
            }
        }
    }
    document.onkeyup =  function (ev){
        var  ev = ev || event;
        var  keyCode = ev.keyCode;
        switch (keyCode){
            case  37: left = false; break ;
            case  38: top = false; break ;
            case  39: right = false; break ;
            case  40: bottom = false; break ;
        }
    }
}
