import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const buttonHover = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const SelectorWrapper = styled.div`
  margin: 20px 0;
  animation: ${fadeIn} 1s ease-in-out;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.button.background};
  color: ${({ theme }) => theme.colors.button.color};
  border: none;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  outline: none;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    animation: ${buttonHover} 0.6s ease-in-out;
  }

  &:focus {
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary};
  }

  &:active {
    transform: scale(0.95);
  }

  &::after {
    content: attr(data-tooltip);
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.colors.tooltip.background};
    color: ${({ theme }) => theme.colors.tooltip.color};
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    display: none;
    white-space: nowrap;
  }

  &:hover::after {
    display: block;
  }
`;

interface TimeframeSelectorProps {
  onTimeframeChange: (timeframe: string) => void;
}

const TimeframeSelector: React.FC<TimeframeSelectorProps> = ({ onTimeframeChange }) => {
  return (
    <SelectorWrapper>
      <Button data-tooltip="View daily data" onClick={() => onTimeframeChange('daily')}>Daily</Button>
      <Button data-tooltip="View weekly data" onClick={() => onTimeframeChange('weekly')}>Weekly</Button>
      <Button data-tooltip="View monthly data" onClick={() => onTimeframeChange('monthly')}>Monthly</Button>
    </SelectorWrapper>
  );
};

export default TimeframeSelector;