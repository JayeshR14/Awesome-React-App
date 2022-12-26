let drawPair = [];
let state;
const randomCode = () => {
         let min = 7;
         let max = 9;
         let random = Math.floor(Math.random()*(max-min)+min);
        console.log(random)
         if(random === 7){
         drawPair.push('🎰');
        }
        if(random === 8)
        {
            drawPair.push('🦚');
        }
        if(random === 9)
        {
            drawPair.push('🐱‍👓');
        }
}
    randomCode();
    randomCode();
    randomCode();
    if(drawPair[0] === drawPair[1] && drawPair[1] === drawPair[2]){
             state="Congratulation You Win";
    }
    else{
        state = "Opps! you missed it";
    }

export {drawPair, state};
