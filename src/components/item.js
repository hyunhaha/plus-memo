import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
const TodoItemBlock = styled.div`
  display: flex;
  justify-content: center;
`;
const CheckCircle = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;
const LabelInput = styled.input`
  width:40%;
  padding: 8px;
  margin: -1px;
  border: none; 
  border:solid 1px #ccc;
  border-radius: 0;
  outline:none;
`;
const ValueInput = styled.input`
  width:40%;
  padding: 8px;
  margin: -1px;
  border: none; 
  border:solid 1px #ccc;
  border-radius: 0;
  outline:none;
  text-align: end;
`;
const Remove = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: #dee2e6;
font-size: 22px;
cursor: pointer;
margin-left:6px;
&:hover {
  color: #ff6b6b;
}

`;
const Item = ({ status, label, value, toggleStatus, editItemLabel, editItemValue, deleteItem, id }) => {
  const [inputStatus, setInputStatus] = useState(true);
  const [inputLabel, setInputLabel] = useState('');
  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    setInputStatus(status);
    setInputLabel(label);
    setInputValue(value);

  }, [status, label, value])
  const onChangeHandler = (event) => {

    setInputValue(Number(event.target.value))
    editItemValue(Number(event.target.value), id)
  }

  const onChangeLabelHandler = (event) => {
    setInputLabel(event.target.value)
    editItemLabel(event.target.value, id)
  }
  const onChangeCheckboxHandler = (event) => {
    setInputStatus(!inputStatus)
    toggleStatus(!inputStatus, id)
  }
  const deleteHandler = (event) => {
    deleteItem(id)
  }
  return (
    <TodoItemBlock>

      {/* <input type='checkbox' checked={inputStatus} onChange={onChangeCheckboxHandler}></input> */}
      <CheckCircle done={inputStatus} onClick={onChangeCheckboxHandler}>{inputStatus && <MdDone />}</CheckCircle>
      <LabelInput value={inputLabel} onChange={onChangeLabelHandler}></LabelInput>
      <ValueInput value={inputValue} type="number" onChange={onChangeHandler}></ValueInput>

      <Remove onClick={deleteHandler}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  )
};

export default Item;