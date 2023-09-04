import { Navigation } from './Navigation/Navigation.jsx';
import { Top } from './Top/Top.jsx';
import s from './Header.module.scss';
import { Search } from '../Search/Search.jsx';

export const Header = () => (
  <header className={s.header}>
    <Top/>
    <Search />
    <Navigation />
  </header>
)
