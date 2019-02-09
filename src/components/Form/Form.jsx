/* eslint-disable no-useless-escape */
import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  _mounted = false;

  state = {
    modalVisible: false,
    modalMessage: "",
    emailValue: "",
    messageValue: ""
  };

  componentDidMount = () => {
    this._mounted = true;
  };

  componentWillUnmount = () => {
    this._mounted = false;
  };

  submitForm = () => {
    const { emailValue, messageValue } = this.state;
    let error;

    if (emailValue === "" && messageValue === "") return;

    if (
      !emailValue.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    )
      error = "Erroneous email.";

    if (messageValue.length < 10)
      error =
        error === undefined
          ? "Message too short."
          : `${error}\nMessage too short.`;

    if (!this._mounted) return;

    if (error === undefined) {
      this.setState(
        {
          modalVisible: true,
          modalMessage: "Message sent",
          emailValue: "",
          messageValue: ""
        },
        () => {
          setTimeout(() => {
            this.setState({
              modalVisible: false,
              modalMessage: ""
            });
          }, 2000);
        }
      );
    } else {
      this.setState(
        {
          modalVisible: true,
          modalMessage: error
        },
        () => {
          setTimeout(() => {
            this.setState({
              modalVisible: false,
              modalMessage: ""
            });
          }, 2000);
        }
      );
    }
  };

  onEmailChange = e => {
    this.setState({
      emailValue: e.target.value
    });
  };

  onMessageChange = e => {
    this.setState({
      messageValue: e.target.value
    });
  };

  render() {
    const { emailValue, messageValue, modalVisible, modalMessage } = this.state;

    return (
      <div className="Form--container">
        <input
          type="text"
          placeholder="Email"
          value={emailValue}
          onChange={e => this.onEmailChange(e)}
          className="Form--email"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={messageValue}
          onChange={e => this.onMessageChange(e)}
          cols="30"
          rows="10"
          className="Form--message"
        />
        <div className="Form--submit" onClick={this.submitForm}>
          Send
        </div>
        {modalVisible && <div className="Form--modal">{modalMessage}</div>}
      </div>
    );
  }
}
