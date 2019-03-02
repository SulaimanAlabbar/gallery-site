/* eslint-disable react/jsx-curly-brace-presence */
import React, { Component } from "react";
import ImageModal from "../ImageModal";
import Form from "../Form";
import "./Contact.css";

export default class Contact extends Component {
  _mounted = false;

  state = {
    selectedImage: false
  };

  componentDidMount = async () => {
    this._mounted = true;
  };

  componentWillUnmount = () => {
    this._mounted = false;
  };

  handleClick = image => {
    if (!this._mounted) return;

    this.setState({
      selectedImage: image
    });
  };

  onModalClose = () => {
    if (!this._mounted) return;

    this.setState({
      selectedImage: false
    });
  };

  render() {
    const { selectedImage } = this.state;

    return (
      <div className="Contact--container">
        <div className="Contact--profilePic">
          <img
            src={`${process.env.REACT_APP_IMAGES_URL}contact_img01.jpg`}
            alt="contact_img01"
            onClick={() =>
              this.handleClick(
                `${process.env.REACT_APP_IMAGES_URL}contact_img01.jpg`
              )
            }
          />
        </div>
        <div className="Contact--info">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque a,
            iste iure mollitia delectus laborum, non perspiciatis qui ipsum hic
            aliquid voluptatem doloribus reiciendis eligendi officia
            praesentium, vero odit animi quas? Blanditiis reprehenderit,
            excepturi eum totam quos culpa sed ea adipisci ut doloribus
            temporibus quis beatae! Sapiente hic voluptatum delectus.
          </p>
        </div>
        <div className="Contact--links">
          <h2 className="Contact--links--header">Links</h2>
          <div className="Contact--links--columns">
            <ul className="Contact--links--list firstColumn">
              <li className="Contact--links--list--item">
                <a href="https://facebook.com">Facebook</a>
              </li>
              <li className="Contact--links--list--item">
                <a href="https://Twitter.com">Twitter</a>
              </li>
              <li className="Contact--links--list--item">
                <a href="https://Instagram.com">Instagram</a>
              </li>
              <li className="Contact--links--list--item">
                <a href="https://Flicker.com">Flicker</a>
              </li>
            </ul>
            <ul className="Contact--links--list secondColumn">
              <li className="Contact--links--list--item">
                <a href="https://LinkedIn.com">LinkedIn</a>
              </li>
              <li className="Contact--links--list--item">
                <a href="https://Youtube.com">Youtube</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Contact--phone">
          <h3>Phone</h3>
          <p>{`Home: 123456789`}</p>
          <p>{`Mobile: 543216789`}</p>
          <h3>Fax</h3>
          <p>987654321</p>
          <h3>Pager</h3>
          <p>192837465</p>
        </div>
        <div className="Contact--form">
          <Form />
        </div>
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            placeholderImage={false}
            onModalClose={this.onModalClose}
          />
        )}
      </div>
    );
  }
}
