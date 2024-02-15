import UpperSection from './components/UpperSection';
import Navbar from './components/Navbar';
import LowerSection from './components/LowerSection';
import logo from './images/Airbnb-logo.jpg';
import img1 from "./images/1.png"
import img2 from "./images/2.png"
import img3 from "./images/3.png"
import img4 from "./images/4.png"
import Data from "./Data" 
function App() {
  const colors = ["red","blue","yellow", "green","orange","purple","pink"]
  const dataElements = Data.map(dataElement =>
    {
      return <UpperSection setup={dataElement.setup}
      punchline={dataElement.punchline} />
    }
    )
  return (
    <div className="App">
      
      <Navbar 
      img = {logo}
      logotext = "Airbnb Travel"
      title = "Enjoy Life!"
      />
      {dataElements}
      <LowerSection
      img1 = {img1}
      img2 = {img2}
      img3 = {img3}
      img4 = {img4}
      />
    </div>
  );
}

export default App;
