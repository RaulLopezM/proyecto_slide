import './App.css'
import { PagePilling } from './PagePilling'
import img1 from "./assets/pintura.jpg";
import img2 from "./assets/pintura2.jpg";
import img3 from "./assets/pintura3.jpg";

function App() {
   
  return (
    <div>

      <PagePilling>
        <img className='' src={img1} alt="imagen" />
        <img className=''src={img2} alt="imagen" />
        <img className=''src={img3} alt="imagen" />
       
      </PagePilling>
     
    </div>
  )
}

export default App
