import React, { useState } from 'react'
import { useViewPort } from '../hooks/Viewport';

const BvnForm = ({ handleBvn }) => {
  const [rotate, setRotate] = useState(false)
  const [bvn, setBvn] = useState('')
  const { width } = useViewPort()
  const breakPoint = 600;

  const onClick = () => {
    setRotate(!rotate)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    handleBvn(bvn)
  }

  const onChange = (e) => {
    setBvn(e.target.value)
  }

  return (
    <div className="bvn-form">
      <form onSubmit={onSubmit}>
        <div className="bvn-group">
          <div className="form-group">
            <label htmlFor="bvn">Bank Verification Number (11-digits)</label>
            <input
              type="number"
              name="bvn"
              required
              className="form-control bvn-control"
              value={bvn}
              onChange={onChange}
            />
          </div>
        </div>
      </form>
      <div className="bvn-faq" onClick={onClick}>
        <div className="visible">
          <div className="bvn-why">
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.25 5V4.25C2.25 2.17893 3.92893 0.5 6 0.5C8.07107 0.5 9.75 2.17893 9.75 4.25V5C10.9926 5 12 6.00736 12 7.25V13.25C12 14.4926 10.9926 15.5 9.75 15.5H2.25C1.00736 15.5 0 14.4926 0 13.25V7.25C0 6.00736 1.00736 5 2.25 5ZM3.75 4.25C3.75 3.00736 4.75736 2 6 2C7.24264 2 8.25 3.00736 8.25 4.25V5H3.75V4.25Z"
                fill="#5257F5"
              />
            </svg>{' '}
            Why we need your BVN
          </div>
          <button className="show-hide" onClick={onClick}>
            {rotate ? 'Hide' : 'Show'}
            <svg
              width="8"
              height="4"
              viewBox="0 0 8 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 3.5L4 0.5L7 3.5"
                stroke="#5257F5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className={`content ${rotate ? "drop-height": null}`}>
          <p className="we-only-need">We only need access to your:</p>
          <ul className="we-only-need-list">
            <li className="we-only-need-list-item">
              <svg
                width="8"
                height="6"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.20711 0.926772L2.35355 5.78033L0 3.42677L0.707107 2.71967L2.35355 4.36611L6.5 0.219666L7.20711 0.926772Z"
                  fill="#56F2C3"
                />
              </svg>{' '}
              Full Name
            </li>
            <li className="we-only-need-list-item">
              <svg
                width="8"
                height="6"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.20711 0.926772L2.35355 5.78033L0 3.42677L0.707107 2.71967L2.35355 4.36611L6.5 0.219666L7.20711 0.926772Z"
                  fill="#56F2C3"
                />
              </svg>{' '}
              Phone Number
            </li>
            <li className="we-only-need-list-item">
              <svg
                width="8"
                height="6"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.20711 0.926772L2.35355 5.78033L0 3.42677L0.707107 2.71967L2.35355 4.36611L6.5 0.219666L7.20711 0.926772Z"
                  fill="#56F2C3"
                />
              </svg>{' '}
              Date of Birth
            </li>
          </ul>
          <div className="horizontal-rule"></div>
          <div className="safe">
            <p className="no-access">
              {width > breakPoint && <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="8px"
                height="9px"
                style={{
                  shapeRendering: 'geometricPrecision',
                  textRendering: 'geometricPrecision',
                  imageRendering: 'optimizeQuality',
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                }}
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <path
                    style={{ opacity: '0.729' }}
                    fill="#9c9f9b"
                    d="M -0.5,0.5 C -0.5,0.166667 -0.5,-0.166667 -0.5,-0.5C 1.16667,-0.5 2.83333,-0.5 4.5,-0.5C 4.5,-0.166667 4.5,0.166667 4.5,0.5C 3.66175,0.841711 3.32842,1.50838 3.5,2.5C 3.16667,2.5 2.83333,2.5 2.5,2.5C 1.83333,2.83333 1.16667,3.16667 0.5,3.5C 0.166667,3.5 -0.166667,3.5 -0.5,3.5C -0.5,2.83333 -0.5,2.16667 -0.5,1.5C 0.833333,1.16667 0.833333,0.833333 -0.5,0.5 Z"
                  />
                </g>
                <g>
                  <path
                    style={{ opacity: '0.659' }}
                    fill="#dda834"
                    d="M 4.5,-0.5 C 5.16667,-0.5 5.83333,-0.5 6.5,-0.5C 6.5,-0.166667 6.5,0.166667 6.5,0.5C 6.5,1.16667 6.5,1.83333 6.5,2.5C 5.16667,2.5 4.5,1.83333 4.5,0.5C 4.5,0.166667 4.5,-0.166667 4.5,-0.5 Z"
                  />
                </g>
                <g>
                  <path
                    style={{ opacity: '1' }}
                    fill="#dbae46"
                    d="M 4.5,0.5 C 4.5,1.83333 5.16667,2.5 6.5,2.5C 6.15829,3.33825 5.49162,3.67158 4.5,3.5C 3.83333,3.5 3.5,3.16667 3.5,2.5C 3.32842,1.50838 3.66175,0.841711 4.5,0.5 Z"
                  />
                </g>
                <g>
                  <path
                    style={{ opacity: '0.753' }}
                    fill="#bfba7b"
                    d="M 2.5,2.5 C 2.92271,4.78121 2.25605,6.44787 0.5,7.5C 1.83333,6.16667 1.83333,4.83333 0.5,3.5C 1.16667,3.16667 1.83333,2.83333 2.5,2.5 Z"
                  />
                </g>
                <g>
                  <path
                    style={{ opacity: '0.939' }}
                    fill="#978b54"
                    d="M 2.5,2.5 C 2.83333,2.5 3.16667,2.5 3.5,2.5C 3.5,3.16667 3.83333,3.5 4.5,3.5C 5.30071,5.04181 5.63404,6.70848 5.5,8.5C 3.5,8.5 1.5,8.5 -0.5,8.5C -0.5,8.16667 -0.5,7.83333 -0.5,7.5C -0.166667,7.5 0.166667,7.5 0.5,7.5C 2.25605,6.44787 2.92271,4.78121 2.5,2.5 Z"
                  />
                </g>
                <g>
                  <path
                    style={{ opacity: '0.925' }}
                    fill="#d7a643"
                    d="M 6.5,0.5 C 6.83333,0.5 7.16667,0.5 7.5,0.5C 7.5,1.83333 7.5,3.16667 7.5,4.5C 6.16667,5.5 6.16667,6.5 7.5,7.5C 7.5,7.83333 7.5,8.16667 7.5,8.5C 6.83333,8.5 6.16667,8.5 5.5,8.5C 5.63404,6.70848 5.30071,5.04181 4.5,3.5C 5.49162,3.67158 6.15829,3.33825 6.5,2.5C 6.5,1.83333 6.5,1.16667 6.5,0.5 Z"
                  />
                </g>
                <g>
                  <path
                    style={{ opacity: '0.784' }}
                    fill="#d6cf89"
                    d="M -0.5,3.5 C -0.166667,3.5 0.166667,3.5 0.5,3.5C 1.83333,4.83333 1.83333,6.16667 0.5,7.5C 0.166667,7.5 -0.166667,7.5 -0.5,7.5C -0.5,6.16667 -0.5,4.83333 -0.5,3.5 Z"
                  />
                </g>
              </svg>}{' '}{' '}
              Your BVN does not give us access to your bank accounts or
              transactions
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BvnForm
