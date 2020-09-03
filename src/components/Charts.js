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

const colorsForCharts = [
  '#ffadad',
  '#ffd6a5',
  '#fdffb6',
  '#caffbf',
  '#9bf6ff',
  '#a0c4ff',
  '#bdb2ff',
  '#ffc6ff',
];

const Charts = ({ langData, repoData }) => {
  console.log(repoData);

  const [chartLangData, setChartLangData] = useState({});
  const [chartStarredData, setChartStarredData] = useState({});
  const [chartPerLangData, setChartPerLangData] = useState({});

  useEffect(() => {
    // Create Chart for Top Langs
    const arrayOfLangLabels = langData.map(lang => lang.label);
    const arrayOfLangScores = langData.map(lang => lang.value);

    const initLangChart = () => {
      setChartLangData({
        labels: arrayOfLangLabels,
        datasets: [
          {
            data: arrayOfLangScores,
            backgroundColor: colorsForCharts,
            borderWidth: 2,
          },
        ],
      });
    };

    // Create Chart for Most Starred
    const initMostStarredChart = () => {
      const LIMIT = 5;
      const sortProp = 'stargazers_count';
      const mostStarredRepos = repoData
        .filter(repo => !repo.fork)
        .sort((a, b) => b[sortProp] - a[sortProp])
        .slice(0, LIMIT);
      const arrOflabels = mostStarredRepos.map(repo => repo.name);
      const arrOfData = mostStarredRepos.map(repo => repo[sortProp]);

      setChartStarredData({
        labels: arrOflabels,
        datasets: [
          {
            data: arrOfData,
            backgroundColor: colorsForCharts,
            borderWidth: 2,
          },
        ],
      });
    };

    // Create Chart for Star per Lang
    const initStarredPerLangChart = () => {
      const filteredRepos = repoData.filter(
        repo => !repo.fork && repo.stargazers_count > 0
      );
      const uniqueLangs = new Set(filteredRepos.map(repo => repo.language));
      const langLabels = Array.from(uniqueLangs);
      const starCounts = langLabels.map(lang => {
        const repos = filteredRepos.filter(repo => repo.language === lang);
        const starsArr = repos.map(repo => repo.stargazers_count);
        const starSum = starsArr.reduce((a, b) => a + b, 0);
        return starSum;
      });

      setChartPerLangData({
        labels: langLabels,
        datasets: [
          {
            data: starCounts,
            backgroundColor: colorsForCharts,
            borderWidth: 2,
          },
        ],
      });
    };

    initLangChart();
    initMostStarredChart();
    initStarredPerLangChart();
  }, [langData, repoData]);

  return (
    <ChartsStyles>
      <div className='chart'>
        <header>
          <h2>Top Languages</h2>
        </header>

        <div className='chart-container'>
          {/* {langChartError && <p>Nothing to see here!</p>} */}
          <Pie
            data={chartLangData}
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
            data={chartStarredData}
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
            data={chartPerLangData}
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
