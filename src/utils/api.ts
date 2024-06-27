// src/utils/api.ts
export const fetchChartData = async (timeframe: string) => {
    // Replace this with your actual data fetching logic
    const response = await fetch(`/api/chart-data?timeframe=${timeframe}`);
    const data = await response.json();
  
    // Example data structure:
    return {
      labels: data.map((item: any) => item.timestamp),
      datasets: [
        {
          label: 'Value',
          data: data.map((item: any) => item.value),
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.1,
        },
      ],
    };
  };