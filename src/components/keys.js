import Button from './Button/Button';
import Highlighter from './Highlighter/Highlighter';
import Input from './Input/Input';
import Modal from './Modal/Modal';
import Paragraphs from './Paragraphs/Paragraphs';
import Spinners from './Spinners/Spinners';
import StyledComponent from './StyledComponent/StyledComponent';
import Tab from './Tab/Tab';
import TabHolder from './TabHolder/TabHolder';
import Wrapper from './Wrapper/Wrapper';

export {
  Button,
  Highlighter,
  Input,
  Modal,
  Paragraphs,
  Spinners,
  StyledComponent,
  Tab,
  TabHolder,
  Wrapper,
};

export const getKey=(keyName)=>{
  switch (keyName) {
    case "Button": return Button;
    default: return null;
  }
}