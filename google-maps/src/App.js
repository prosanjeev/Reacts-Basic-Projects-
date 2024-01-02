import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Google Maps</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.842987671033!2d77.60476917484044!3d12.917811187392576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15aa6848217f%3A0xfe638c503aad819a!2sPatna%20Wale!5e0!3m2!1sen!2sin!4v1704164998356!5m2!1sen!2sin" 
    width="100%" 
    height="450" 
    style={{border:0}} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">

    </iframe>
    </div>
  );
}

export default App;
