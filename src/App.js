import React from 'react';

import './App.css';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage />

      <footer class="text-center text-lg-start bg-black text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block text-col">
            © 2022 Socale, All rights reserved
          </div>

          <div>
            <a href="" class="me-4 text-reset"><i class="fab fa-twitter text-col"></i></a>
            <a href="" class="me-4 text-reset"><i class="fab fa-instagram text-col"></i></a>
            <a href="" class="me-4 text-reset"><i class="fab fa-linkedin text-col"></i></a>
            <a href="" class="me-4 text-reset"><i class="fab fa-youtube text-col"></i></a>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
