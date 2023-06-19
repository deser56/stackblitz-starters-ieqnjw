import React, { useState } from 'react';
import { Grid, Typography, Button, AppBar, Toolbar, IconButton,Drawer,
  List,
  ListItem,
  ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ReactApexChart from 'react-apexcharts';
import './Dashboard.css';

const Dashboard = () => {
  const primaryColor = '#001f3f';
  const themeColor = '#1976d2';
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };



  const lineChartData = {
    options: {
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        labels: {
          style: {
            colors: '#ffffff', // Set the x-axis labels color to white
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#ffffff', // Set the y-axis labels color to white
          },
        },
      },
      legend: {
        labels: {
          colors: '#ffffff', // Set the legend labels color to white
        },
      },
    },
    series: [
      {
        name: 'Sales',
        data: [30, 40, 35, 50, 49, 60],
      },
    ],
  };
  


  const barChartData = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: ['#2196f3'], // Use a specific color for the bars
      xaxis: {
        categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
        labels: {
          style: {
            colors: '#ffffff', // Set the x-axis labels color to white
            rotate: -90, // Rotate the labels by 90 degrees counter-clockwise
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#ffffff', // Set the y-axis labels color to white
          },
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
          dataLabels: {
            position: 'top', // Place data labels at the top of the bars
            style: {
              colors: ['#ffffff'], // Use white color for data labels
            },
          },
        },
      },
      grid: {
        borderColor: 'rgba(0, 0, 0, 0.1)',
        strokeDashArray: 4,
      },
      tooltip: {
        theme: 'dark',
      },
    },
    series: [
      {
        name: 'Revenue',
        data: [500, 700, 600, 800, 750],
      },
    ],
  };
  
  
  
  

  const donutChartData = {
    options: {
      labels: ['Red', 'Blue', 'Yellow', 'Green'],
      plotOptions: {
        pie: {
          donut: {
            labels: {
              name: {
                color: '#ffffff', // Set the label names color to white
              },
            },
          },
        },
      },
      stroke: {
        show: false, // Remove the white line around the donut chart
      },
    },
    series: [44, 55, 13, 33],
  };
  
  
  
  const radialChartData = {
    options: {
      labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    },
    series: [76, 67, 85, 92],
  };

  


  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <AppBar position="static" sx={{ backgroundColor: '#333333' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#ffffff' }}>
              Muru Technologies
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2" sx={{ fontFamily: 'Arial', fontWeight: 'bold', color: '#ffffff' }}>
          Dashboard
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="chart-container">
          <Typography variant="h6" component="h3" sx={{ fontFamily: 'Arial', fontWeight: 'bold', color: '#ffffff' }}>
            Sales Trend
          </Typography>
          <ReactApexChart
            options={lineChartData.options}
            series={lineChartData.series}
            type="line"
            height={300}
          />
          <Typography variant="body1" component="p" sx={{ fontFamily: 'Arial', fontSize: '14px', color: '#ffffff' }}>
            This chart shows the sales trend over time.
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="chart-container">
          <Typography variant="h6" component="h3" sx={{ fontFamily: 'Arial', fontWeight: 'bold', color: '#ffffff' }}>
            Revenue by Category
          </Typography>
          <ReactApexChart
            options={barChartData.options}
            series={barChartData.series}
            type="bar"
            height={300}
          />
          <Typography variant="body1" component="p" sx={{ fontFamily: 'Arial', fontSize: '14px', fontWeight: 'light', color: '#ffffff' }}>
            This chart illustrates the revenue distribution across different categories.
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="chart-container">
          <Typography variant="h6" component="h3" sx={{ fontFamily: 'Arial', fontWeight: 'bold', color: '#ffffff' }}>
            Donut Chart
          </Typography>
          <ReactApexChart
            options={donutChartData.options}
            series={donutChartData.series}
            type="donut"
            height={300}
          />
          <Typography variant="body1" component="p" sx={{ fontFamily: 'Arial', fontSize: '14px', fontWeight: 'light', color: '#ffffff' }}>
            This donut chart provides a visual representation of the data distribution using different colors.
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="chart-container">
          <Typography variant="h6" component="h3" sx={{ fontFamily: 'Arial', fontWeight: 'bold', color: '#ffffff' }}>
            Radial Chart
          </Typography>
          <ReactApexChart
            options={radialChartData.options}
            series={radialChartData.series}
            type="radialBar"
            height={300}
          />
          <Typography variant="body1" component="p" sx={{ fontFamily: 'Arial', fontSize: '14px', fontWeight: 'light', color: '#ffffff' }}>
            This radial chart represents the performance of different products based on a radial scale.
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default Dashboard;





