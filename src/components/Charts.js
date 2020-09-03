import React, { useState, useEffect } from 'react';
import { Pie, Bar, Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';

const ChartsStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1140px;
  margin: 0 auto;
  margin-top: -8rem !important;
  padding: 20px;

  h2 {
    color: #2e3a5f;
  }

  .chart {
    background: white;
    /* max-width: 500px; */
    margin: 5px;
    padding: 18px;
    border-radius: 6px;
    box-shadow: 0px 4px 14px #00000050;
    transition: 0.2s;
    &:hover {
      box-shadow: 0px 2px 6px #00000060;
    }

    .chart-container {
      padding: 40px 0;
    }
  }
`;

const Charts = ({ langData, repoData }) => {
  console.log(langData);
  // Create chart with Language data
  const arrayOfLangLabels = [];
  const arrayOfLangScores = [];
  const arrayOfLangColors = [];

  langData.forEach(langObj => {
    arrayOfLangLabels.push(langObj.label);
    arrayOfLangScores.push(langObj.value);
    arrayOfLangColors.push(langObj.color);
  });

  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: arrayOfLangLabels,
      datasets: [
        {
          data: arrayOfLangScores,
          backgroundColor: arrayOfLangColors,
          borderWidth: 2,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <ChartsStyles>
      <div className='chart'>
        <header>
          <h2>Top Languages</h2>
        </header>

        <div className='chart-container'>
          {/* {langChartError && <p>Nothing to see here!</p>} */}
          <Pie
            data={chartData}
            options={{
              legend: {
                display: true,
                position: 'right',
              },
            }}
          />
        </div>
      </div>

      <div className='chart'>
        <header>
          <h2>Most Starred</h2>
        </header>
        <div className='chart-container'>
          {/* {starChartError && <p>Nothing to see here!</p>} */}
          <Bar
            data={chartData}
            options={{
              legend: {
                display: false,
              },
            }}
          />
        </div>
      </div>

      <div className='chart'>
        <header>
          <h2>Stars per Language</h2>
        </header>
        <div className='chart-container'>
          {/* {thirdChartError && <p>Nothing to see here!</p>} */}
          <Doughnut
            data={chartData}
            options={{
              legend: {
                display: true,
                position: 'right',
              },
            }}
          />
        </div>
      </div>
    </ChartsStyles>
  );
};

export default Charts;
