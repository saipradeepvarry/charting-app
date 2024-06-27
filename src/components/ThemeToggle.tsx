import React from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const ToggleButton = styled.button<{ isDarkMode: boolean }>`
  background: ${({ theme }) => theme.colors.toggle.background};
  border: 2px solid ${({ theme }) => theme.colors.toggle.border};
  border-radius: 20px;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50px;
  height: 25px;

  &::after {
    content: '';
    background: ${({ theme }) => theme.colors.toggle.circle};
    border-radius: 50%;
    height: 20px;
    width: 20px;
    transition: 0.3s;
    transform: ${({ isDarkMode }) => (isDarkMode ? 'translateX(25px)' : 'translateX(0)')};
  }
`;

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <ToggleWrapper>
      <ToggleButton onClick={toggleTheme} isDarkMode={isDarkMode}></ToggleButton>
    </ToggleWrapper>
  );
};

export default ThemeToggle;