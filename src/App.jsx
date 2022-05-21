import './App.css';
import { Header, Footer, BlogProdukt, NotFound, SinglePost } from './components';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<BlogProdukt />} />
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
