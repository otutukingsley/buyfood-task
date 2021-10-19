import React, { useState } from 'react'

const Business = () => {
  const [active, setActive] = useState(2)

  const toNo = (e) => {
    setActive(2)
  }
  const toYes = (e) => {
    setActive(1)
  }

  return (
    <div className="business">
      <p className="step">Step 3/3</p>
      <h3 className="tab-heading">Business Category</h3>
      <form className="business-form">
        <div className="form-group select">
          <label htmlFor="type">Type of your business</label>
          <select className="form-control">
            <option value="select"> </option>
            <option value="access">POS Business</option>
            <option value="eco">Buying and Selling</option>
            <option value="fidelity">Freelancing</option>
          </select>
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.41421 0C0.523309 0 0.077142 1.07714 0.707107 1.70711L3.29289 4.29289C3.68342 4.68342 4.31658 4.68342 4.70711 4.29289L7.2929 1.70711C7.92286 1.07714 7.47669 0 6.58579 0H1.41421Z"
              fill="#A5B4CB"
            />
          </svg>
        </div>
        <div className="form-group select">
          <label htmlFor="category">Business Category</label>
          <select className="form-control">
            <option value="select"> </option>
            <option value="access">Trading</option>
            <option value="eco">Technology</option>
            <option value="fidelity">Education</option>
          </select>
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.41421 0C0.523309 0 0.077142 1.07714 0.707107 1.70711L3.29289 4.29289C3.68342 4.68342 4.31658 4.68342 4.70711 4.29289L7.2929 1.70711C7.92286 1.07714 7.47669 0 6.58579 0H1.41421Z"
              fill="#A5B4CB"
            />
          </svg>
        </div>
      </form>
      <div className="pos-for-business">
        <p className="pos-faq">Do you use POS machines for your business?</p>
        <div className="yes-no">
          <button
            className={`btn btn-ash ${active === 1 && 'btn-blue-active'}`}
            onClick={toYes}
          >
            Yes
          </button>
          <button
            className={`btn btn-ash ${active === 2 && 'btn-blue-active'}`}
            onClick={toNo}
          >
            No
          </button>
        </div>
      </div>
      <div className="cta-button">
        <button className="btn btn-primary">
          Complete
        </button>
      </div>
    </div>
  )
}

export default Business
