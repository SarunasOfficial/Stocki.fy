import Header from './Header/Header.jsx'
import Footer from './Footer.jsx'
import People from './People/People.jsx'

function App() {
  
  return(
    <>
      <Header></Header>
      <div className="People_container">
        <People></People>
        <People></People>
        <People></People>
        <People></People>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App
