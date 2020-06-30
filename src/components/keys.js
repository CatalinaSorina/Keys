import Button from './Button/Button';
import Highlighter from './Highlighter/Highlighter';
import Input from './Input/Input';
import Modal from './Modal/Modal';
import Paragraphs from './Paragraphs/Paragraphs';
import Spinners from './Spinners/Spinners';
import Cross from './Spinners/1.Cross/Cross';
import Dots from './Spinners/2.Dots/Dots';
import RoundedSquares from './Spinners/3.RoundedSquares/RoundedSquares';
import Keyboard from './Spinners/4.Keyboard/Keyboard';
import Flower from './Spinners/5.Flower/Flower';
import Web from './Spinners/6.Web/Web';
import StyledComponent from './StyledComponent/StyledComponent';
import Tab from './Tab/Tab';
import TabHolder from './TabHolder/TabHolder';
import Wrapper from './Wrapper/Wrapper';

export const KEYS = {
  BUTTON: 'Button',
  HIGHLIGHTER: 'Highlighter',
  INPUT: 'Input',
  MODAL: 'Modal',
  PARAGRAPHS: 'Paragraphs',
  SPINNERS: 'Spinners',
  CROSS: 'Cross',
  DOTS: 'Dots',
  ROUNDED_SQUARES: 'Rounded squares',
  KEYBOARD: 'Keyboard',
  FLOWER: 'Flower',
  WEB: 'Web',
  STYLED_COMPONENT: 'Styled component',
  TAB: 'Tab',
  TAB_HOLDER: 'TabHolder',
  WRAPPER: 'Wrapper',
};

export {
  Button,
  Highlighter,
  Input,
  Modal,
  Paragraphs,
  Spinners,
  Cross,
  Dots,
  RoundedSquares,
  Keyboard,
  Flower,
  Web,
  StyledComponent,
  Tab,
  TabHolder,
  Wrapper,
};

export const getKey = (keyName) => {
  switch (keyName) {
    case KEYS.BUTTON: return Button;
    case KEYS.HIGHLIGHTER: return Highlighter;
    case KEYS.INPUT: return Input;
    case KEYS.MODAL: return Modal;
    case KEYS.PARAGRAPHS: return Paragraphs;
    case KEYS.SPINNERS: return Spinners;
    case KEYS.CROSS: return Cross;
    case KEYS.DOTS: return Dots;
    case KEYS.ROUNDED_SQUARES: return RoundedSquares;
    case KEYS.KEYBOARD: return Keyboard;
    case KEYS.FLOWER: return Flower;
    case KEYS.WEB: return Web;
    case KEYS.STYLED_COMPONENT: return StyledComponent;
    case KEYS.TAB: return Tab;
    case KEYS.TAB_HOLDER: return TabHolder;
    case KEYS.WRAPPER: return Wrapper;
    default: return null;
  }
};
