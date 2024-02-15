import Header from "./Header"
import Contents from "./Contents"
import Footer from "./Footer"


function Page(){
    return (
   <div>
    <Header/>
    <Contents/>
    <Footer/>
   </div>
    );
  }
  // Append the array of elements to an existing DOM element
   const containerElement = document.getElementById('root');
   
  
  // Use ReactDOM.render to render the elements
  ReactDOM.render(<Page/>, containerElement);
