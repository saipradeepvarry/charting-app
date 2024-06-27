# React Charting Application

This is a React application for visualizing data using charts, with features for exporting charts as images.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This project is a React-based charting application that allows users to visualize data using Line Charts and Bar Charts. It includes features such as switching between daily, weekly, and monthly data views and exporting charts as PNG images.

---

## Features

- **Dynamic Chart Rendering**: Display data in Line Charts and Bar Charts based on selected timeframes.
- **Timeframe Selection**: Switch between daily, weekly, and monthly views of data.
- **Dark Mode Toggle**: Toggle between light and dark themes for improved user experience.
- **Export Charts**: Export Line Charts and Bar Charts as PNG images.

---

## Technologies Used

- React
- TypeScript
- Styled Components
- Recharts
- html2canvas

---

## Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd react-charting-application
2. Install dependencies:
    ```bash
    npm install
3. Start the development server:
    ```bash
    npm start
4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure
# The project structure is organized as follows:

```bash
react-charting-application/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── ChartComponent.tsx
│   │   ├── ExportButton.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── TimeframeSelector.tsx
│   │   └── ...
│   │
│   ├── styles/
│   │   └── GlobalStyles.ts
│   │
│   ├── theme/
│   │   └── theme.ts
│   │
│   ├── types/
│   │   └── types.ts
│   │
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
│
├── .gitignore
├── package.json
└── README.md
```

## Usage

1. **Select Timeframe**: Use the TimeframeSelector to switch between daily, weekly, and monthly data views.
2. **Toggle Theme**: Click the ThemeToggle button to switch between light and dark themes.
3. **Export Charts**: Use the ExportButton to export Line Charts and Bar Charts as PNG images.

## Contributing

- Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or create a pull request.

## License 

- This project is licensed under the MIT License - see the ``LICENSE`` file for details.
