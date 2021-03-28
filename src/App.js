import './App.css';
import Home from './Component/Pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import CallToAction from './Component/View/CallToAction';
import Blog from './Component/Pages/Blog';
// import BlogDetails from './Component/Pages/BlogDetails';
import Rooms from './Component/Pages/Room';
import RoomDetails from './Component/Pages/Room-details';
import Gallery from './Component/Pages/Gallary';
import Contact from './Component/Pages/Contact';

function App() {
  return (
    <div className="App">
      {/* <!-- Header --> */}
      <Header />
        <BrowserRouter>
          <Route exact path='/' component={Home}/>
          <Route exact path='/blog' component={Blog}/> 
          {/* <Route exact path='/blog-details' component={BlogDetails}/> */}
          <Route exact path='/room' component={Rooms}/>
          <Route exact path='/room-details' component={RoomDetails}/>   
          <Route exact path='/gallery' component={Gallery}/> 
          <Route exact path='/contact' component={Contact}/>
        </BrowserRouter>
      <CallToAction/>
      <Footer/>
    </div>
  );
}

export default App;
