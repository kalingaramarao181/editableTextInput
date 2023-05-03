import {Component} from 'react'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isSave: true, inputText: ''}

  onChangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isSave: !prevState.isSave}))
  }

  renderInputElement = () => {
    const {inputText} = this.state
    return (
      <input
        className="inputElement"
        value={inputText}
        type="text"
        onChange={this.onChangeInputText}
      />
    )
  }

  renderParagraphElement = () => {
    const {inputText} = this.state
    return <p className="paragraph">{inputText}</p>
  }

  render() {
    const {isSave} = this.state
    const buttonText = isSave ? 'Save' : 'Edit'
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Editable Text Input</h1>
          <div className="button-container">
            {isSave ? this.renderInputElement() : this.renderParagraphElement()}
            <button
              onClick={this.onClickButton}
              type="button"
              className="save-button"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
