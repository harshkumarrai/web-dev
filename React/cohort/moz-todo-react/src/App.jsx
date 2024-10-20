import { useState } from "react";
import { useEffect } from "react";
function App(){
    return(
      <div>
        hi there 2
        </div>
    )
}
const style={width :200 , backgroundColor:"white",borderRadius :10,borderColor:"grey"};
function postcomponent(){
  return <div style={style}>
    <img src={""} alt="" />
  </div>
}
export default App;
//   return <div>
  
//     <Counter/>
//   </div>
// }
// function Counter(){
//   const [count, setCount] = useState(0);
//   function increasecount(){
//     setCount(count + 1);
//   }

//   function decreasecount(){
//     setCount(count - 1);
  
//   }
//   useEffect(() => {
//     setInterval(function(){
//       setCount(function(x){
//         return x +1;
//       })
//   },1000);
//   }, [])
  

//   return <div>
//     <h1 id="text">Count: {count}</h1>
//     <button onClick={increasecount}>increasecount</button>
//     <button onClick={decreasecount}>decreasecount</button>
//   </div>
//}
