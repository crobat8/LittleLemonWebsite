
import './App.css';
import './offer.js';
import Navigation from'./navigation.js';
import Offer from './offer.js';


function App() {
  return (
    <div class="mainframe">
      <Navigation />
      <header class="topInfo">
        <div>
          <h1>
          Little Lemon
          </h1>
          <p>
            Little Lemon is an italian retraunt in Seattle
          </p>
          <button>
            Reserve a table
          </button>
        </div>
        
      </header>
      
      <main class="core">
        <div>
          <h1>
          special offer
          </h1>
          <button>
            order now
          </button>
        </div>
        <ul>
          <Offer name='pizza' price = "10.99"   info ='our original peperoni pizza'/>
          <Offer name='lasugna' price='12.99'   info ='large slice of our homade lasugna'/>
          <Offer name='fettichine' price='8.99' info ='fettichine alfredo with chicken'/>
        </ul>
        

      </main>
      <footer class="bottomInfo">
        contact information
      </footer>
    </div>
    
  );
}

export default App;
