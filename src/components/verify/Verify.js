import React, { useState } from 'react'
import BvnForm from './BvnForm'
import AccountForm from './AccountForm'

const Verify = () => {
  const [bvn, setBvn] = useState('')
  const [account, setAccount] = useState('')
  const [bank, setBank] = useState('')
  const [active, setActive] = useState(1)

  const toAccount = (e) => {
    setActive(2)
  }
  const toBvn = (e) => {
    setActive(1)
  }

  const handleBvn = (value) => {
    setBvn(value)
  }

  const handleAccount = (accountNumber, accountName) => {
    setAccount(accountNumber)
    setBank(accountName)
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
      {active === 1 && <BvnForm handleBvn={handleBvn} />}
      {active === 2 && <AccountForm handleAccount={handleAccount} />}
    </div>
  )
}

export default Verify
