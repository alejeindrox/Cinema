import React, { Fragment, } from 'react';
import MenuBar from './menuBar';
import MenuSide from './menuSide';
import { useBooleanValue, } from '../../hooks/useBooleanValue';

const MenuContainer = () => {

  const menu = useBooleanValue(false);
  
  const handleMenuDrawer = () => {
    menu.onBooleanChange();
  }

  return (
    <Fragment>
      <MenuBar
        handleMenuDrawer={handleMenuDrawer}
        />
      <MenuSide
        handleMenuDrawer={handleMenuDrawer}
        open={menu.booleanValue}
        />
    </Fragment>
  );
};

export default React.memo(MenuContainer);
