var arrlen =0
if(localStorage.getItem('mycart')!=undefined){
  let arr = JSON.parse(localStorage.getItem('mycart'));
   arrlen= arr.length
}
else{
   arrlen = 0
}
const initialState = {cart:arrlen}
function Cartreducer(state=initialState,actions){
let arr = JSON.parse(localStorage.getItem('mycart'));

  console.log(state)
  switch(actions.type){
    case 'ADD' :return {cart:state.cart +1}
    default: return state
  }
}

export default Cartreducer