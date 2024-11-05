//spa 
import { useState } from "react";
import { useEffect } from "react";
import{BrowserRouter,Routes,Route,Link,useNavigate, redirect, Outlet} from "react-router-dom";
function App(){
    return(
      //creae allen site
      <>
      <div>     
       
        <BrowserRouter>
            
        <Routes>
          <Route path ='/' element={<Layout/>}>
        <Route path="/neet/online--coaching-class-11" element={<Class11Program/>}/>
        <Route path="/neet/online--coaching-class-12" element={<Class12Program/>}/>
        <Route path="/" element={<Landing/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        </Route>
        </Routes>
      </BrowserRouter>
      </div>
      </>
    )
}
function  Layout(){
  return(
    <div style={{height:"100vh"}}>
      {/* header */}
          <Link to="/">Allen</Link>
      <div></div>
    <Link to="/neet/online--coaching-class-11">Class11Program</Link>
    <div></div>
    <Link to="/neet/online--coaching-class-12">Class12Program</Link>
      <div style={{height: "90vh"}}>
      <Outlet/>
      </div>
      
    {/* <footer></footer> */}
    </div>
  )
}
function ErrorPage(){
  return <div>
    sorry page not found
  </div>
}
function  Class11Program(){
  const navigate=useNavigate();
  function redirectUser() {
    navigate('/')
  }
  return <div>
    neet program for class 11th
    <div></div>

    <button onClick={redirectUser}>Go back to landing page</button>
  </div>
}
function Landing(){
  return <div>
    welcome to allen
  </div>
}
function  Class12Program(){
  return <div>
    neet program for class 12th
  </div>
}
export default App;
