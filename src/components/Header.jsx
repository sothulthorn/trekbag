import Logo from './Logo';
import Counter from './Counter';

import { useItemStore } from '../stores/itemsStore';

const Header = () => {
  const items = useItemStore((state) => state.items);

  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={items.filter((item) => item.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
};

export default Header;
