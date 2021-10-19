import React from 'react'

const Socials = ({ nextPage, prevPage, activeTab, setActiveTab }) => {
  return (
    <div className="social">
      <p className="step">Step 2/3</p>
      <h3 className="tab-heading social-heading">Social Handles</h3>
      <p className="social-handles">Enter your business social media handle</p>

      <form className="social-form">
        <div className="form-group abeg-form">
          <div className="abeg-input">
            <label htmlFor="abeg">Choose your Abeg Tag (required)</label>
            <input type="text" defaultValue="@" className="form-control" />
          </div>
          <div className="ghost"></div>
        </div>
        <div className="social-media">
          <div className="form-group insta-form">
            <label htmlFor="insta">Instagram</label>
            <input
              type="text"
              defaultValue="@"
              className="form-control insta"
            />
          </div>
          <div className="form-group twitter-form">
            <label htmlFor="twitter">Twitter</label>
            <input
              type="text"
              defaultValue="@"
              className="form-control tweet"
            />
          </div>
        </div>
      </form>
      <div className="cta-button">
        <button onClick={nextPage} className="btn btn-primary">
          Confirm Social Handles
        </button>
      </div>
    </div>
  )
}

export default Socials
