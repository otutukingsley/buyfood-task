import React, { useState } from 'react'
import BvnForm from './BvnForm'
import AccountForm from './AccountForm'

const Verify = ({ nextPage, prevPage, activeTab, setActiveTab }) => {
  const [bvn, setBvn] = useState(null)
  const [account, setAccount] = useState(null)
  const [bank, setBank] = useState('')
  const [active, setActive] = useState(1)

  const toAccount = (e) => {
    setActive(2)
  }
  const toBvn = (e) => {
    setActive(1)
  }

  const onSubmit = () => {}

  const handleBvn = (e) => {
    setBvn(e.target.value)
  }

  const handleAccount = (e) => {
    setAccount(e.target.value)
  }

  return (
    <div className="verify">
      <p className="step">Step 1/3</p>
      <h3 className="tab-heading">Verify Account</h3>
      <p className="choose-method">Select a verification method</p>
      <div className="bvn-number-container">
        <button
          className={`btn btn-ash ${active === 1 && 'btn-blue-active'}`}
          onClick={toBvn}
        >
          BVN
        </button>
        <button
          className={`btn btn-ash ${active === 2 && 'btn-blue-active'}`}
          onClick={toAccount}
        >
          Personal Account Number
        </button>
      </div>
      {active === 1 && <BvnForm />}
      {active === 2 && <AccountForm />}
      <div className="cta-button">
        <button onClick={nextPage} className="btn btn-primary">
          Continue
        </button>
      </div>
    </div>
  )
}

export default Verify
