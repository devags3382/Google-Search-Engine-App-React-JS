import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, UpdateSearchInput} = props
  const {suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    UpdateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion}</p>
      <button
        type="button"
        className="arrow-button"
        onClick={onClickSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
