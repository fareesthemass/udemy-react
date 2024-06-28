import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import Saleimage from "./components/Saleimage";
import Topics from "./components/Topics"
import Mostpopular from "./components/Mostpopular";
import Footer from "./components/Footer";
function App(){
  return(
  <div>
    <Navbar></Navbar>
    <Categories></Categories>
    <Saleimage></Saleimage>
    <Recommend></Recommend>
    <Topics></Topics>
    <Mostpopular></Mostpopular>
    <Footer></Footer>
    </div>
  )
}

export default App