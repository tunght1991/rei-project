import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div id="left-panel">
        <ul className="list-unstyled text-left">
          <li><a href="#">Header</a></li>
          <li><a href="#">Thông tin dự án</a></li>
          <li><a href="#">Vị trí dự án</a></li>
          <li><a href="#">Tiện ích</a></li>
          <li><a href="#">Mặt bằng</a></li>
          <li><a href="#">Nhà mẫu</a></li>
        </ul>
      </div>
      <div id="editor">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="editor-wrapper">
                <section className="editor-section">
                  <h1>Header</h1>
                </section>
                <section className="editor-section">
                  <img className="img-fluid" src="/banner.jpg"/>
                </section>
                <section className="editor-section">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        Left Content
                      </div>
                      <div className="col-12 col-md-6">
                        <img className="img-fluid" src="/banner.jpg"/>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
