const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const hero2 = document.querySelector('.hero2')
const text2 = hero2.querySelector('h2')
const shadowWalk = 100;
const shadowWalk2 = 50 //100px

function shadowPosition(e){
    console.log(e,e.target)
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    // one of the better way to write this.
    const {offsetWidth: width, offsetHeight: height}=hero;
    let{ offsetX: x, offsetY: y}=e;
    //use let because we are reassigning the values
    console.log(this)
    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
 
    console.log(x,y);
    const xWalk = Math.round(x/ width * shadowWalk) - (shadowWalk/2);
    const yWalk = Math.round(y/ height * shadowWalk) - (shadowWalk/2);
    console.log(xWalk,yWalk);
    text.style.textShadow = `${xWalk}px ${yWalk}px 5px rgba(1,50,32,1)`
}
function shadowPosition2(e){
    const {offsetWidth: width, offsetHeight: height} = hero2;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft*0.3;
        y = y + e.target.offsetTop*0.3;
    }

    const xWalk = Math.round(x / width * shadowWalk2) - (shadowWalk2 / 2);
    const yWalk = Math.round(y / height * shadowWalk2) - (shadowWalk2 / 2);

    text2.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.6),
    ${xWalk*-1}px ${yWalk}px 0 rgba(0,255,255,0.6),
    ${yWalk}px ${xWalk*-1}px 0 rgba(255,255,0,0.6),
    ${yWalk*-1}px ${xWalk}px 0 rgba(0,0,255,0.6)`;
}

hero.addEventListener('mousemove',shadowPosition);
hero2.addEventListener('mousemove',shadowPosition2);
