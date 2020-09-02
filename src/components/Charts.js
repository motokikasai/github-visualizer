import React, { useState, useEffect } from 'react';
import { Pie, Bar, Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';

const ChartsStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 1280px;
  margin: 0 auto;
`;

const Charts = ({ langData, repoData }) => {
  // Create cahrt with Language data
  // const [langChartdata, setLangChartData] = setState(null);
  // const initLangChart = () => {};

  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
      datasets: [
        {
          label: 'level of thickness',
          data: [3, 5, 6, 4, 3],
          backgroundColor: ['hotpink', 'blue', 'orangered', 'teal', 'cyan'],
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    // <div>
    //   <h1>hello Chartjs!</h1>
    //   <div>
    //     <Pie data={chartData} />
    //     <Bar data={chartData} />
    //     <Doughnut data={chartData} />
    //   </div>
    // </div>

    <ChartsStyles>
      <div className='chart'>
        <header>
          <h2>Top Languages</h2>
        </header>

        <div className='chart-container'>
          {/* {langChartError && <p>Nothing to see here!</p>} */}
          <Pie data={chartData} />
        </div>
      </div>

      <div className='chart'>
        <header>
          <h2>Most Starred</h2>
        </header>
        <div className='chart-container'>
          {/* {starChartError && <p>Nothing to see here!</p>} */}
          <Bar data={chartData} />
        </div>
      </div>

      <div className='chart'>
        <header>
          <h2>Stars per Language</h2>
        </header>
        <div className='chart-container'>
          {/* {thirdChartError && <p>Nothing to see here!</p>} */}
          <Doughnut data={chartData} />
        </div>
      </div>
    </ChartsStyles>
  );
};

export default Charts;
