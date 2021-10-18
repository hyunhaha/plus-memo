import React, { useEffect, useState } from 'react';

const Item = ({ status, label, value, toggleStatus, editItemLabel, editItemValue, deleteItem, id }) => {
  const [inputStatus, setInputStatus] = useState(true);
  const [inputLabel, setInputLabel] = useState('');
  const [inputText, setInputText] = useState(0);

  useEffect(() => {
    setInputStatus(status);
    setInputLabel(label);
    setInputText(value);

  }, [status, label, value])
  const onChangeHandler = (event) => {

    setInputText(Number(event.target.value))
    editItemValue(Number(event.target.value), id)
  }

  const onChangeLabelHandler = (event) => {
    setInputLabel(event.target.value)
    editItemLabel(event.target.value, id)
  }
  const onChangeCheckboxHandler = (event) => {
    console.log(event.target.checked)
    setInputStatus(!inputStatus)
    toggleStatus(!inputStatus, id)
  }
  const deleteHandler = (event) => {
    deleteItem(id)
  }
  return (
    <li>
      <input type='checkbox' checked={inputStatus} onChange={onChangeCheckboxHandler}></input>
      <input value={inputLabel} onChange={onChangeLabelHandler}></input>
      <input value={inputText} type="number" onChange={onChangeHandler}></input>
      <button onClick={deleteHandler}>delete</button>
    </li>
  )
};

export default Item;