// App.tsx
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ChartComponent from './components/ChartComponent';
import TimeframeSelector from './components/TimeframeSelector';
import ExportButton from './components/ExportButton';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './theme';
import ThemeToggle from './components/ThemeToggle';
import { ChartData } from './types';

const AppWrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

const App: React.FC = () => {
  const [timeframe, setTimeframe] = useState<string>('daily');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [chartData, setChartData] = useState<ChartData[]>([]);

  // Function to fetch or generate chart data based on timeframe
  const fetchChartData = (selectedTimeframe: string): ChartData[] => {
    switch (selectedTimeframe) {
      case 'daily':
        return [
          { timestamp: '2023-01-01T00:00:00Z', value: 10 },
          { timestamp: '2023-01-02T00:00:00Z', value: 12 },
          { timestamp: '2023-01-03T00:00:00Z', value: 5 },
          { timestamp: '2023-01-04T00:00:00Z', value: 15 },
          { timestamp: '2023-01-05T00:00:00Z', value: 8 },
          { timestamp: '2023-01-06T00:00:00Z', value: 20 },
          { timestamp: '2023-01-07T00:00:00Z', value: 18 },
          { timestamp: '2023-01-08T00:00:00Z', value: 25 },
          { timestamp: '2023-01-09T00:00:00Z', value: 13 },
          { timestamp: '2023-01-10T00:00:00Z', value: 17 }
        ];
      case 'weekly':
        return [
          { timestamp: '2023-01-01T00:00:00Z', value: 60 },
          { timestamp: '2023-01-08T00:00:00Z', value: 75 },
          { timestamp: '2023-01-15T00:00:00Z', value: 82 },
          { timestamp: '2023-01-22T00:00:00Z', value: 68 },
          { timestamp: '2023-01-29T00:00:00Z', value: 90 }
        ];
      case 'monthly':
        return [
          { timestamp: '2023-01-01T00:00:00Z', value: 250 },
          { timestamp: '2023-02-01T00:00:00Z', value: 280 },
          { timestamp: '2023-03-01T00:00:00Z', value: 300 },
          { timestamp: '2023-04-01T00:00:00Z', value: 320 },
          { timestamp: '2023-05-01T00:00:00Z', value: 290 }
        ];
      default:
        return [];
    }
  };

  // Handle timeframe change
  const handleTimeframeChange = (newTimeframe: string) => {
    setTimeframe(newTimeframe);
    const newData = fetchChartData(newTimeframe);
    setChartData(newData);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Initial fetch of data based on initial timeframe
  React.useEffect(() => {
    const initialData = fetchChartData(timeframe);
    setChartData(initialData);
  }, [timeframe]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppWrapper>
        <h1>Charting Application</h1>
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <TimeframeSelector onTimeframeChange={handleTimeframeChange} />
        <ChartComponent data={chartData} />
        <ExportButton />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;