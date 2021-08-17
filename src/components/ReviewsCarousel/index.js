import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  onClickRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsData} = this.props

    if (activeReviewIndex < reviewsData.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review_container">
        <img src={imgUrl} alt={`${username}-avatar`} />
        <p className="username">{username}</p>
        <p className="companyname">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsData} = this.props
    const {activeReviewIndex} = this.state
    const currentReviewData = reviewsData[activeReviewIndex]

    return (
      <div className="bg_container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel_container">
          <button
            type="button"
            testId="leftArrow"
            className="arrow_button"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left Arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewData)}
          <button
            type="button"
            testId="rightArrow"
            className="arrow_button"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right Arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
