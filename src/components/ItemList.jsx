import { useState } from 'react';
import EmptyView from './EmptyView';
import Select from 'react-select';

const sortingOptions = [
  { value: 'default', label: 'Sort by default' },
  { value: 'packed', label: 'Sort by packed' },
  { value: 'unpacked', label: 'Sort by unpacked' },
];

const ItemList = ({ items, handleDeleteItem, handleToggleItem }) => {
  const [sortBy, setSortBy] = useState('default');

  const sortedItem = [...items].sort((a, b) => {
    if (sortBy === 'packed') {
      return b.packed - a.packed;
    }

    if (sortBy === 'unpacked') {
      return a.packed - b.packed;
    }

    return;
  });

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.length > 0 ? (
        <section className="sorting">
          <Select
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      ) : null}

      {sortedItem.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
          />
        );
      })}
    </ul>
  );
};

export default ItemList;

const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        {item.name}
      </label>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};
