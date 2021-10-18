import React, { useState, useEffect, useMemo } from 'react';
import Item from './item';

const List = (props) => {
  const [items, setItems] = useState([
    { id: Date.now() + 1, label: 'aaa', value: 1 },
    { id: Date.now() + 2, label: 'bbb', value: 2 },
    { id: Date.now() + 3, label: 'ccc', value: 3 }]);
  useEffect(() => {
    console.log(items)
  }, [items])

  const sum = useMemo(() => {
    return items.reduce((acc, item) => acc += item.value, 0);
  }, [items]);

  const editItemValue = (changedValue, id) => {
    console.log(changedValue)
    console.log(id)
    setItems(cur => {
      const newItems = [...cur];
      const target = newItems.findIndex(i => i.id === id);
      console.log(target)
      console.log(newItems[target])
      newItems[target].value = changedValue;
      return newItems;
    })
  };

  const editItemLabel = (changedLabel, id) => {
    setItems(cur => {
      const newItems = [...cur];
      const target = newItems.findIndex(i => i.id === id);
      console.log(target)
      console.log(newItems[target])
      newItems[target].label = changedLabel;
      return newItems;
    })
  }

  const addItem = () => {
    setItems(cur => {
      const newList = [...cur];
      newList.push({ id: Date.now(), label: '', value: 0 });
      return newList;
    })
  }

  const elements = items.map((item, index) => <Item key={index} id={item.id} label={item.label} value={item.value} editItemLabel={editItemLabel} editItemValue={editItemValue} />)
  return (
    <div>
      <ol>
        {elements}
      </ol>
      <div>합{sum}</div>
      <button onClick={addItem}>add</button>
    </div>

  )
};

export default List;