import React from 'react';


import Navbar from './components/Navbar/Navbar';
import NavItem from './components/NavbarItem/NavbarItem';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';

import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CartIcon } from './icons/caret.svg';

import './index.css';


function App() {

  return (
    <div className="App">
      <Navbar>
        <NavItem icon={<PlusIcon />}></NavItem>
        <NavItem icon={<BellIcon />}></NavItem>
        <NavItem icon={<MessengerIcon />}></NavItem>
        <NavItem icon={<CartIcon />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
    </div>
  );
}

export default App;
