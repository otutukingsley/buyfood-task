import React, { useState } from 'react'

const AccountForm = ({ handleAccount }) => {
  const [selectValue, setSelectValue] = useState('')
  const [account, setAccount] = useState('')

  const handleSelect = (e) => {
    setSelectValue(e.target.value)
  }

  const onChange = (e) => {
    setAccount(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    handleAccount(selectValue, account)
  }
  return (
    <form className="account-form" onSubmit={onSubmit}>
      <div className="account-number-group">
        <div className="form-group ">
          <label htmlFor="account">Account Number</label>
          <input
            type="number"
            name="account"
            required
            className="form-control"
            value={account}
            onChange={onChange}
          />
        </div>
        <div className="form-group select">
          <label htmlFor="bank">Select Bank</label>
          <select
            className="form-control"
            id="standard-select"
            defaultValue={selectValue}
            onChange={handleSelect}
            required
          >
            <option value="select">{' '}</option>
            <option value="access">Access Bank</option>
            <option value="eco">EcoBank</option>
            <option value="fidelity">Fidelity Bank</option>
            <option value="first">First Bank</option>
            <option value="heritage">Heritage Bank</option>
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
      </div>
    </form>
  )
}

export default AccountForm
