import Logo from './Logo';
import Counter from './Counter';

const Header = ({ numberOfItemsPacked, totalNumberOfItems }) => {
  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={numberOfItemsPacked}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  );
};

export default Header;
