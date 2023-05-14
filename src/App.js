
import './App.css';
import Book from './componentes/Book';
import Footer from './componentes/Footer';
import Header from './componentes/Header';

function App() {

  const title='la vida es bella';
  const pie='resumen del libro la vida es bella'

  return (
    <div>
     <Header title={title}/>
     <Book/>
     <Footer pie={pie}/>
    </div>
  );
}

export default App;
