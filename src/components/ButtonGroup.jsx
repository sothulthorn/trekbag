import { useItemStore } from '../stores/itemsStore';
import Button from './Button';

const ButtonGroup = () => {
  const markAllAsComplete = useItemStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemStore((state) => state.resetToInitial);
  const removeAllItems = useItemStore((state) => state.removeAllItems);

  const secondaryButtons = [
    {
      text: 'Mark all as complete',
      onClick: markAllAsComplete,
    },
    {
      text: 'Mark all as incomplete',
      onClick: markAllAsIncomplete,
    },
    {
      text: 'Reset to initial',
      onClick: resetToInitial,
    },
    {
      text: 'Remove all items',
      onClick: removeAllItems,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, onClick }) => (
        <Button key={text} onClick={onClick} buttonType="secondary">
          {text}
        </Button>
      ))}
    </section>
  );
};

export default ButtonGroup;
