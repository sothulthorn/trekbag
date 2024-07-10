import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';
import { useItemContext } from '../lib/hooks';

const Sidebar = () => {
  const { handleAddItem } = useItemContext();
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
};

export default Sidebar;
