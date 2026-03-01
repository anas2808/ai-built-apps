```javascript
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SkillConfidenceGraph = () => {
  const [progressData, setProgressData] = useState({ labels: [], datasets: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const primaryColor = "#4A90E2";
  const secondaryColor = "#50E3C2";

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        setLoading(true);
        setError(null);
        // Replace with your actual API endpoint
        const response = await axios.get('/api/progress', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming token-based auth
          },
        });

        if (response.data && response.data.length > 0) {
          // Assuming the response is an array of progress records for a specific skill
          // For simplicity, let's assume we are plotting progress for a single skill,
          // The actual implementation might need to select a skill or aggregate
          const labels = response.data.map(item => new Date(item.date || Date.now()).toLocaleDateString()); // Assuming a 'date' field or using current date
          const improvementData = response.data.map(item => item.improvement_percentage);

          setProgressData({
            labels: labels,
            datasets: [
              {
                label: 'Skill Improvement (%)',
                data: improvementData,
                borderColor: primaryColor,
                backgroundColor: 'rgba(74, 144, 226, 0.2)',
                fill: true,
                tension: 0.1,
                pointRadius: 5,
                pointBackgroundColor: primaryColor,
                pointBorderColor: '#fff',
                pointHoverRadius: 7,
                pointHoverBackgroundColor: primaryColor,
                pointHoverBorderColor: '#fff',
              },
            ],
          });
        } else {
          setProgressData({ labels: [], datasets: [] }); // No data to display
        }
      } catch (err) {
        console.error("Error fetching progress data:", err);
        setError("Failed to load progress data. Please try again later.");
        setProgressData({ labels: [], datasets: [] });
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333333',
          font: {
            family: 'Roboto',
            size: 14,
          }
        }
      },
      title: {
        display: true,
        text: 'Skill Confidence Trend Over Time',
        color: '#333333',
        font: {
          family: 'Roboto',
          size: 20,
          weight: 'bold',
        },
        padding: {
          top: 10,
          bottom: 20
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += `${context.parsed.y}%`;
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#333333',
          font: {
            family: 'Roboto',
            size: 12,
          }
        },
        grid: {
          display: false, // Hide x-axis grid lines
        }
      },
      y: {
        ticks: {
          color: '#333333',
          font: {
            family: 'Roboto',
            size: 12,
          },
          callback: function(value) {
            return `${value}%`; // Append '%' to y-axis labels
          }
        },
        beginAtZero: true,
        grid: {
          color: 'rgba(51, 51, 51, 0.1)',
        }
      },
    },
    maintainAspectRatio: false, // Allows controlling height via CSS
    layout: {
        padding: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20
        }
    }
  };

  return (
    <div className="skill-confidence-graph-container w-full mx-auto p-6 mt-8 mb-8 rounded-lg shadow-xl" style={{ fontFamily: 'Roboto, sans-serif', background: '#FFFFFF', maxWidth: '900px' }}>
      {loading && <div className="text-center py-8 text-gray-600">Loading progress graph...</div>}
      {error && <div className="text-center py-8 text-red-500">{error}</div>}
      {!loading && !error && progressData.labels.length === 0 && (
        <div className="text-center py-8 text-gray-600">
          No progress data available yet. Start taking assessments to see your progress.
        </div>
      )}
      {!loading && !error && progressData.labels.length > 0 && (
        <div className="chart-wrapper" style={{ height: '400px' }}>
          <Line options={options} data={progressData} />
        </div>
      )}
    </div>
  );
};

export default SkillConfidenceGraph;
```