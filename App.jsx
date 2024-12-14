import Header from './components/header'; // تأكد من أن هذا المسار صحيح
import styleHeader from './components/header.css?inline'; // استخدام ?inline
import Hero from './components/Hero'; // تأكد من أن هذا المسار صحيح
import Companies from './components/components';
import Residencies from './Residencies/Residencies';
import Valvo from './valvo/valvo';



import './Apps.css'; 
function App() {
  return ( 
    <div className="App">
      <div>
        <Header />
        <Hero />
        
        
      </div>
      <Companies /> 
    <Residencies />
<Valvo/>  
    </div>
  );
}

export default App;