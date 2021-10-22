import React, { useState, useEffect, useMemo } from 'react';
import Item from './item';
import styled from 'styled-components';
import { AiFillPlusCircle } from 'react-icons/ai';
const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
const OrderList = styled.ol`
  padding:0;
  margin:0;
`;
const AddButton = styled.div`
  cursor: pointer;
  &:hover {
    color: #38d9a9;
  }
`;
const Total = styled.div`
  padding:8px 50px;
  display:flex;
  justify-content:space-between;
`;
const Explain = styled.p`
  text-align: right;
  font-size: 12px;
`
const List = (props) => {
  const [items, setItems] = useState([
    { id: Date.now() + 1, status: true, label: '포도', value: 1000 },
    { id: Date.now() + 2, status: true, label: '당근', value: 2000 },
    { id: Date.now() + 3, status: true, label: '양파', value: 3000 }]);

  const sum = useMemo(() => {
    return items.reduce((acc, item) => acc += item.status ? item.value : 0, 0);
  }, [items]);

  const editItemValue = (changedValue, id) => {
    setItems(cur => {
      const newItems = [...cur];
      const target = newItems.findIndex(i => i.id === id);
      newItems[target].value = changedValue;
      return newItems;
    })
  };

  const editItemLabel = (changedLabel, id) => {
    setItems(cur => {
      const newItems = [...cur];
      const target = newItems.findIndex(i => i.id === id);
      newItems[target].label = changedLabel;
      return newItems;
    })
  }
  const toggleStatus = (status, id) => {
    setItems(cur => {
      const newItems = [...cur];
      const target = newItems.findIndex(i => i.id === id);
      newItems[target].status = status;
      return newItems;
    })
  }

  const deleteItem = (id) => {
    setItems(cur => {
      const newItems = [...cur];
      const target = newItems.findIndex(i => i.id === id);
      newItems.splice(target, 1);
      return newItems;
    })
  }
  const addItem = () => {
    setItems(cur => {
      const newList = [...cur];
      newList.push({ id: Date.now(), status: true, label: '', value: 0 });
      return newList;
    })
  }

  const elements = items.map((item, index) =>
    <Item
      key={index}
      id={item.id}
      status={item.status}
      label={item.label}
      value={item.value}
      toggleStatus={toggleStatus}
      editItemLabel={editItemLabel}
      editItemValue={editItemValue}
      deleteItem={deleteItem}
    />)
  return (
    <TodoListBlock>
      <Explain>*체크시 총합 계산에 포함됩니다.</Explain>
      <OrderList>
        {elements}
      </OrderList>
      <Total>
        <div>총</div>
        <div>{sum}</div>
      </Total>
      <AddButton onClick={addItem}>

        <AiFillPlusCircle style={{ verticalAlign: 'text-top' }} />


        <span>새로운 항목 추가</span>
      </AddButton>
    </TodoListBlock>

  )
};

export default List;