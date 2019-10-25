import React from 'react';
import Logo from './images/Logo1.png';
import MainLogo from './images/Logo.png';
import {
  productsFirstRow,
  productsSecondRow,
  productsThirdRow,
} from './Products';
import './App.css';
import './App.sass';

function App() {
  return (
    <>
      <nav
        key="nav"
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand" alt="Photo by Ant Rozetsky on Unsplash">
          <a className="navbar-item" href="https://www.liecantrading.com">
            <img
              src={Logo}
              width="auto"
              height="32"
              alt="Liecan Trading Logo"
            />
          </a>

          <a
            href="/"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
            </a>

            <a className="navbar-item" href="#about">
              About
            </a>
            <a className="navbar-item" href="#about">
              Contact Us
            </a>

            {/* <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div> */}
          </div>

          {/* <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div> */}
        </div>
      </nav>
      <div className="App">
        <header className="App-header">
          <img src={MainLogo} className="App-logo" alt="logo" />
        </header>
      </div>
      <div id="products">
        <div className="columns is-desktop">
          {productsFirstRow.map(item => {
            return (
              <div key={item.title} className="column">
                <img src={item.imgUrl} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="columns is-desktop">
          {productsSecondRow.map(item => {
            return (
              <div key={item.title} className="column">
                <img src={item.imgUrl} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="columns is-desktop">
          {productsThirdRow.map(item => {
            return (
              <div key={item.title} className="column">
                <img src={item.imgUrl} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <footer id="about" className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Liecan Trading ©2019</strong>
          </p>
          <p>Block 100 Lot 7 Northville 2B, Caloocan City</p>
          <h5>Tel. No.: (02) 507-2276</h5>
        </div>
      </footer>
    </>
  );
}

export default App;
