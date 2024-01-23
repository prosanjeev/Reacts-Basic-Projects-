
import DailyWallet from './components/DailyWallate';
import Wallet from './components/Wallet'; // Adjust the path based on your project structure

const App = () => {
  return (
    <div>
      <h1>My React Wallet App</h1>
      <Wallet />
      {/* Other components or content */}
      <DailyWallet/>
    </div>
  );
};

export default App;
