import React, { useState } from 'react';
import PropTypes from 'prop-types';
import selectArrow from '../../../public/images/selectArrow.svg';
import {
 SelectHolder, SelectValue, Select, ArrowImg, SelectOptions, Option,
} from './styles/ScrollSelect.styles';

// IF YOU USE SCROLL SELECT DON'T FORGET TO GIVE
// ID'S THE SAME AS HERE, item.replace(/\s/g, "")
// TO THE COMPONENT YOU WANT TO JUMP TO ON ITEM SELECTED
const ScrollSelect = ({ placeholder, items }) => {
  const [hideOptions, setHideOptions] = useState(true);
  const [itemSelected, setItemSelected] = useState(placeholder);

  return (
    <SelectHolder>
      <Select onClick={() => setHideOptions(!hideOptions)}>
        <SelectValue>{itemSelected}</SelectValue>
        <ArrowImg src={selectArrow} />
      </Select>
      <SelectOptions hide={hideOptions}>
        {items && items.length > 0 && items.map((item) => (
          <Option
            to={`#${item.replace(/\s/g, '')}`}
            smooth
            active={itemSelected === item}
            onClick={() => {
              setItemSelected(item);
              setHideOptions(!hideOptions);
            }}
          >
            {item}
          </Option>
        ))}
      </SelectOptions>
    </SelectHolder>
  );
};

export default ScrollSelect;

ScrollSelect.propTypes = {
  placeholder: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  items: PropTypes.arrayOf(PropTypes.string),
};

ScrollSelect.defaultProps = {
  placeholder: 'choose...',
};
