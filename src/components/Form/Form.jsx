/* eslint-disable no-useless-escape */
import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  _mounted = false;

  state = {
    modalVisible: false,
    modalMessage: [],
    emailValue: "",
    messageValue: "",
    formSuccess: false
  };

  componentDidMount = () => {
    this._mounted = true;
  };

  componentWillUnmount = () => {
    this._mounted = false;
  };

  submitForm = () => {
    const { emailValue, messageValue } = this.state;
    let error = [];

    if (emailValue === "" && messageValue === "") return;

    if (
      !emailValue.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    )
      error = ["Erroneous email."];

    if (messageValue.length < 10) error = error.concat("Message too short.");

    if (!this._mounted) return;

    if (error.length === 0) {
      this.setState(
        {
          modalVisible: true,
          modalMessage: [],
          emailValue: "",
          messageValue: "",
          formSuccess: true
        },
        () => {
          setTimeout(() => {
            this.setState({
              modalVisible: false,
              formSuccess: false
            });
          }, 2000);
        }
      );
    } else {
      this.setState(
        {
          modalVisible: true,
          modalMessage: error,
          formSuccess: false
        },
        () => {
          setTimeout(() => {
            this.setState({
              modalVisible: false,
              modalMessage: []
            });
          }, 2000);
        }
      );
    }
  };

  onEmailChange = e => {
    const ev = { ...e };
    this.setState({
      emailValue: ev.target.value
    });
  };

  onMessageChange = e => {
    const ev = { ...e };
    this.setState({
      messageValue: ev.target.value
    });
  };

  render() {
    const {
      emailValue,
      messageValue,
      modalVisible,
      modalMessage,
      formSuccess
    } = this.state;

    return (
      <div className="Form--container">
        <input
          type="text"
          placeholder="Email"
          value={emailValue}
          onChange={this.onEmailChange}
          className="Form--email"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={messageValue}
          onChange={this.onMessageChange}
          cols="30"
          rows="10"
          className="Form--message"
        />
        <div className="Form--submit" onClick={this.submitForm}>
          Send
        </div>
        {modalVisible && (
          <div
            className={`Form--submit--message${
              formSuccess ? " Form--success" : " Form--error"
            }`}
          >
            {formSuccess ? (
              <h3> Message Sent. </h3>
            ) : (
              modalMessage.map(msg => <li key={`${msg}`}>{msg}</li>)
            )}
          </div>
        )}
      </div>
    );
  }
}
