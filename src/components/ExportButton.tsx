import React from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';

const Button = styled.button`
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.button.background};
  color: ${({ theme }) => theme.colors.button.color};
  border: none;
  border-radius: 5px;
  display: block;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ExportButton: React.FC = () => {
  const handleExport = async () => {
    const chart = document.querySelector('.recharts-wrapper');
    if (chart) {
      const canvas = await html2canvas(chart as HTMLElement);
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'chart.png';
      link.click();
    }
  };

  return <Button onClick={handleExport}>Export Chart</Button>;
};

export default ExportButton;