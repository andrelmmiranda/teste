import logo from './logo.svg';
import './style/global.scss';
import './App.css';
import CatsPage from './pages/catsPage';
import LoginPage from './pages/loginPage';
import RandomDogPage from './pages/RandomDogPage';
import RandomUser from './pages/randomUser';



function App() {
  return(
    <>
      {/* <LoginPage/> */}
      {/* <CatsPage/> */}
      {/* <RandomDogPage /> */}
      <RandomUser />
    </>
  )
}

export default App;
