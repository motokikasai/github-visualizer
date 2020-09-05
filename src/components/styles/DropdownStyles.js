import styled, { css } from 'styled-components';

const DropdownStyles = styled.div`
  position: relative;
  width: 100px;
  font-size: 14px;
  font-weight: 500;
  .dropdown__button {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    text-align: left;
    color: hotpink;
    background-color: transparent;
    border: 1px solid rgba(0, 118, 255, 0.1);
    padding: 10px 7px;
    border-radius: 5px;
    &:hover,
    &:focus {
      color: hotpink;
      background: rgba(0, 118, 255, 0.1);
      border-color: rgba(0, 118, 255, 0.1);
    }
    svg {
      margin-left: 0.5rem;
    }
    label {
      transition: 0.5s;
      cursor: pointer;
    }
  }
  .dropdown__list {
    position: absolute;
    overflow: hidden;
    width: 100%;
    z-index: 2;
    transition: 0.5s;
    box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);
    opacity: 0;
    visibility: hidden;
    background-color: hotpink;
  }
  .dropdown__list-item {
    border-radius: 0;
    transition: 0.5s;
    &:hover,
    &:focus {
      background-color: hotpink;
    }
    &:first-of-type {
      button {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
    }
    &:last-of-type {
      button {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
    button {
      color: hotpink;
      background: rgba(0, 118, 255, 0.1);
      padding: 10px 7px;
      width: 100%;
      font-size: 14px;
      font-weight: 500;
      line-height: 1;
      text-align: left;
    }
  }
  ${props =>
    props.active &&
    css`
      .dropdown__list {
        opacity: 1;
        visibility: visible;
      }
      .dropdown__button {
        background: rgba(0, 118, 255, 0.1);
        svg {
          transform: rotate(0.5turn);
        }
      }
    `}
`;

export default DropdownStyles;
