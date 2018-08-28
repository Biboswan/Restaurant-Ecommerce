import React, { Fragment } from 'react';
import { Footer } from 'react-materialize';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

export default () => (
  <Footer
    copyrights="©Shimla Biryani Restaurant Pvt Ltd. Powered by Resto-G"
    moreLinks={
      <Fragment>
        <a href="https://www.facebook.com/shimlarestuarant/">
          <IconContext.Provider
            value={{
              color: 'white',
              className: 'global-class-name',
              size: '1.5em',
            }}
          >
            <Fragment>
              <FaFacebookSquare />
            </Fragment>
          </IconContext.Provider>
        </a>{' '}
        <a href="https://www.instagram.com/shimlabiryani/">
          <IconContext.Provider
            value={{
              color: 'white',
              className: 'global-class-name',
              size: '1.5em',
            }}
          >
            <Fragment>
              <FaInstagram />
            </Fragment>
          </IconContext.Provider>
        </a>
        <a href="https://twitter.com/shimlabiryani">
          <IconContext.Provider
            value={{
              color: 'white',
              className: 'global-class-name',
              size: '1.5em',
            }}
          >
            <Fragment>
              <FaTwitterSquare />
            </Fragment>
          </IconContext.Provider>
        </a>
      </Fragment>
    }
    links={
      <ul>
        <li>
          <Link className="grey-text text-lighten-3" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="grey-text text-lighten-3" to="/menu">
            Menu
          </Link>
        </li>
        <li>
          <Link className="grey-text text-lighten-3" to="/about">
            About Us
          </Link>
        </li>
      </ul>
    }
    className="#b0bec5 blue-grey lighten-3"
  >
    <h5 className="white-text">Shimla Biryani</h5>
    <p className="grey-text text-lighten-4">
      415, Hastings, Hastings Colony, VIP Nagar, Kolkata, West Bengal 700100
    </p>
  </Footer>
);
