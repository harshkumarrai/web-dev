
import './App.css'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
function App() {
 

  return (
    <>
      <div>
        
      <BrowserRouter>
      <Link to='/neet/online-coaching-class-11'>Class 11</Link>
        <Link to='/neet/online-coaching-class-12'>Class 12</Link>
        <Link  to="/">Allen</Link> 
       <Routes>
        <Route path="/neet/online-coaching-class-11"  element={<Class11Program/>}></Route>
        <Route path="/neet/online-coaching-class-12" element={<Class12Program/>}></Route>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="*" element={<EroorPage/>}></Route>
       </Routes>
       </BrowserRouter>
      Footer|contact us
       </div> 
    </>
  ) 
}
function EroorPage(){
  return(
    <>
    <div>
      sorry page not found
    </div>
    </>
  )
}

function Landing(){
  return (
    <>
    <div>
      welcome to allen
    </div>
    </>
  )
}
function  Class11Program(){
  return (
    <>
        <div>
          <h1>class11 classes</h1>
        </div>
    </>
  )
}
function  Class12Program(){
  return (
    <>
    <div>
      <h1>class12 classes</h1>
    </div>
    </>
  )
}

export default App
