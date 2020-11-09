import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

export const SelectHolder = styled.div`
  position: relative;
`;

export const Select = styled.div`
  display: flex;
  position: relative;
  font-size: 12px;
  color: #707070;
  padding: 5px;
  width: 110px;
  height: 15px;
  background: transparent url("img/Rectangle 1904.png") 0% 0% no-repeat
    padding-box;
  border: 1px solid #dadfe5;
  border-radius: 3px;
  cursor: pointer;
`;

export const SelectValue = styled.div`
  width: 102px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ArrowImg = styled.img`
  width: 8px;
  position: absolute;
  top: 10px;
  right: 5px;
`;

export const SelectOptions = styled.div`
  display: ${({ hide }) => (hide ? "none" : "flex")};
  flex-direction: column;
  position: absolute;
  padding: 5px;
  width: 110px;
  height: 107px;
  background-color: #ffffff;
  border: 1px solid #dadfe5;
  border-radius: 3px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 30;

  &::-webkit-scrollbar {
    width: 4px;
    background: #ececec;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    border-radius: 1px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #b9bcbf;
    border-radius: 1px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #004097;
  }
`;

export const Option = styled(HashLink)`
  text-decoration: none;
  font-size: 12px;
  color: #707070;
  width: 110px;
  margin: 2px -5px;
  padding: 0 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${({ active }) => active && `
    background-color:#DADFE5;
    color:#004097;
  `}

  &:hover {
    background-color: #f2f6f7;
  }
`;
