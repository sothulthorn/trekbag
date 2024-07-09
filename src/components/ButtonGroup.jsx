import Button from './Button';
import { secondaryButtons } from '../lib/constants';

const ButtonGroup = () => {
  return (
    <section className="button-group">
      {secondaryButtons.map((text) => {
        return (
          <Button key={text} type="secondary">
            {text}
          </Button>
        );
      })}
    </section>
  );
};

export default ButtonGroup;
