import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages';
import PageNotFound from './pages/PageNotFound';

function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home login={signedIn} setLogin={setSignedIn} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
