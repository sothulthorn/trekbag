import Logo from './Logo';
import Counter from './Counter';
import { useItemContext } from '../lib/hooks';

const Header = () => {
  const { items } = useItemContext();

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
