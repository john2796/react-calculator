import React, { Component } from 'react';
import styled from 'styled-components';

const TweetsFormWrapper = styled.div`
input[type="text"], textarea {
  display: flex;
  width: 100%;
  padding: 10px 0;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  outline-color:#30acf1;
  &:active {
    outline-color:#30acf1;
  }
}

.form__inputs {
  margin-bottom: 15px;
}

.form__button {
  background: #30acf1;
  color: #ffff;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 25px;
  border-radius: 10px;
}

`

class TweetsForm extends Component {
  state = {
    items: [],
    currentItem: { name: 'a', tweet: 'b', date: 'c' }
  }

  handleInput = (name, e) => {
    const currentItem = { ...this.state.currentItem };
    currentItem[name] = e.target.value;
    this.setState({ currentItem });
  }

  addItem = (e) => {
    e.preventDefault();
    console.log(this.state.currentItem);

  }

  render() {
    const { currentItem: { name, tweet, date } } = this.state;
    return (
      <TweetsFormWrapper>
        <form onSubmit={this.addItem}>
          <div className="form__inputs input__01">
            <label htmlFor="name">Your Name</label> <br />
            <input
              type="text"
              value={name}
              onChange={this.handleInput.bind(this, 'name')}
            />
          </div>
          <div className="form__inputs">
            <label htmlFor="placeholder">Your tweets</label> <br />
            <textarea
              name="tweets"
              id="tweets"
              cols="30"
              rows="10"
              value={tweet}
              onChange={this.handleInput.bind(this, 'tweet')}
            ></textarea>
          </div>
          <button type="submit" className="form__button">Send Tweet</button>
        </form>
        <h1>Tweet posts</h1>
        <hr />
      </TweetsFormWrapper >
    );
  }
}

export default TweetsForm;

