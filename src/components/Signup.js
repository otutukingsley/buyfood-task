import React, { useState, useEffect } from 'react'
import Verify from './Verify'
import Socials from './Socials'
import Business from './Business'
import { useViewPort } from './hooks/Viewport'

const Signup = () => {
  const [openTab, setOpenTab] = useState(false)
  const [active, setActive] = useState(1)
  const { width } = useViewPort()
  const breakPoint = 1138
  const breakPointTwo = 800
  const breakPointThree = 555

  const nextPage = (e) => {
    setActive(active + 1)
    if (active >= 3) {
      setActive(3)
    }
  }
  const prevPage = (e) => {
    setActive(active - 1)
    if (active <= 1) {
      setActive(1)
    }
  }

  useEffect(() => {}, [])

  return (
    <div className="signup-wrapper">
      {width > breakPoint && (
        <div className="left-flex">
          <div className="left-image-container">
            <img src="/images/card.svg" alt="logo" className="logo" />
          </div>
        </div>
      )}
      <div className="register">
        <div className="btn-container">
          <button className="log-out btn btn-danger">Logout</button>
        </div>
        <div className="details-container">
          <div className="tab">
            <div
              className={
                active === 1
                  ? 'tab-item-active'
                  : active !== 1 && width < breakPointThree
                  ? 'tab-item-complete'
                  : 'tab-item'
              }
            >
              <span
                className={`number ${active === 1 ? 'active' : 'inactive'}`}
              >
                {active === 1 ? (
                  1
                ) : (
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 13 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.99854 4.49751L5.00103 7.5L11.0013 1.5"
                      stroke="#006AFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </span>{' '}
              {width > breakPointTwo && 'Verify Account'}
            </div>
            <div
              className={
                active === 2
                  ? 'tab-item-active'
                  : active !== 2 && width < breakPointThree
                  ? 'tab-item-complete'
                  : 'tab-item'
              }
            >
              <span
                className={`number ${active === 2 ? 'active' : 'inactive'}`}
              >
                {active === 3 ? (
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 13 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.99854 4.49751L5.00103 7.5L11.0013 1.5"
                      stroke="#006AFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  2
                )}
              </span>
              {width > breakPointTwo && 'Social Handles'}
            </div>
            <div
              className={
                active === 3
                  ? 'tab-item-active'
                  : active !== 3 && width < breakPointThree
                  ? 'tab-item-complete'
                  : 'tab-item'
              }
            >
              <span
                className={`number ${active === 3 ? 'active' : 'inactive'}`}
              >
                3
              </span>
              {width > breakPointTwo && 'Business Category'}
            </div>
          </div>
          <div className="tab-content">
            {active === 1 && (
              <Verify
                nextPage={nextPage}
                prevPage={prevPage}
                activeTab={active}
                setActiveTab={setActive}
              />
            )}
            {active === 2 && (
              <Socials
                nextPage={nextPage}
                prevPage={prevPage}
                activeTab={active}
                setActiveTab={setActive}
              />
            )}
            {active === 3 && (
              <Business
                nextPage={nextPage}
                prevPage={prevPage}
                activeTab={active}
                setActiveTab={setActive}
              />
            )}
          </div>
          <div className="footer">
            <button onClick={nextPage}>Continue</button>
            <button onClick={prevPage}>Back</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
