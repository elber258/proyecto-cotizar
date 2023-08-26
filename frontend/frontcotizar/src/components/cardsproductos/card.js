/* eslint-disable jsx-a11y/img-redundant-alt */
// src/components/Card.js
import React from 'react';

const Card = ({ imageUrl, title, nombre, precio, author, date }) => {
  return (
    <div className="card">
      <a href="#home">
        <img className="card-img-top" src={imageUrl} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{nombre}</p>
          <p className="card-text">
            <small className="text-muted">
              <i className="fas fa-eye"></i>
              {precio}
              <i className="far fa-user"></i>
              {author}
              <i className="fas fa-calendar-alt"></i>
              {date}
            </small>
          </p>
        </div>
      </a>
      <div className="card">
      <a href="#home">
        <img className="card-img-top" src={imageUrl} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{nombre}</p>
          <p className="card-text">
            <small className="text-muted">
              <i className="fas fa-eye"></i>
              {precio}
              <i className="far fa-user"></i>
              {author}
              <i className="fas fa-calendar-alt"></i>
              {date}
            </small>
          </p>
        </div>
      </a>
    </div>
    <div className="card">
      <a href="#home">
        <img className="card-img-top" src={imageUrl} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{nombre}</p>
          <p className="card-text">
            <small className="text-muted">
              <i className="fas fa-eye"></i>
              {precio}
              <i className="far fa-user"></i>
              {author}
              <i className="fas fa-calendar-alt"></i>
              {date}
            </small>
          </p>
        </div>
      </a>
    </div>
    <div className="card">
      <a href="#home">
        <img className="card-img-top" src={imageUrl} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{nombre}</p>
          <p className="card-text">
            <small className="text-muted">
              <i className="fas fa-eye"></i>
              {precio}
              <i className="far fa-user"></i>
              {author}
              <i className="fas fa-calendar-alt"></i>
              {date}
            </small>
          </p>
        </div>
      </a>
    </div>
    <div className="card">
      <a href="#home">
        <img className="card-img-top" src={imageUrl} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{nombre}</p>
          <p className="card-text">
            <small className="text-muted">
              <i className="fas fa-eye"></i>
              {precio}
              <i className="far fa-user"></i>
              {author}
              <i className="fas fa-calendar-alt"></i>
              {date}
            </small>
          </p>
        </div>
      </a>
    </div>
    <div className="card">
      <a href="#home">
        <img className="card-img-top" src={imageUrl} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{nombre}</p>
          <p className="card-text">
            <small className="text-muted">
              <i className="fas fa-eye"></i>
              {precio}
              <i className="far fa-user"></i>
              {author}
              <i className="fas fa-calendar-alt"></i>
              {date}
            </small>
          </p>
        </div>
      </a>
    </div>
    </div>
  );
};

export default Card;
