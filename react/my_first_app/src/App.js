import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Greetings from './components/Greetings';
import Addition from './components/Addition';
import Fruits from './components/Fruits';


function App() {
  let fruits = ['apple', 'orange', 'mango', 'pineapple']
  return (
    <>
    {/* <Header />
    <Content />
    <Footer />
    <Greetings name1="Himansu"/>
    <Greetings name1="Rajaram"/>
    <Greetings name1="Deepthi"/>
    <Addition a={6} b={2}/>
    <Addition a={5} b={5}/>
    <Addition a={16} b={21}/> */}
    <Fruits f={fruits}/>

    </>
  );
}

export default App;
