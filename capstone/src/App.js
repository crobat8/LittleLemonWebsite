
import './App.css';
import './offer.js';
import Navigation from'./navigation.js';
import Offer from './offer.js';


function App() {
  return (
    <div class="mainframe">
      <Navigation />
      <header>
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
      
      <main>
        <div>
          <h1>
          special offer
          </h1>
          <button>
            order now
          </button>
        </div>
        <div>
          <Offer/>
          <Offer/>
          <Offer/>
        </div>
        

      </main>
      <footer>
        contact information
      </footer>
    </div>
    
  );
}

export default App;
