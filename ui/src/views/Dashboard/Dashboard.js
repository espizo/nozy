import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Dropdown, DropdownMenu, DropdownItem, Progress } from 'reactstrap';

const brandPrimary =  '#20a8d8';
const brandSuccess =  '#4dbd74';
const brandInfo =     '#63c2de';
const brandDanger =   '#f86c6b';

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40]
    }
  ],
};

const cardChartOpts1 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent',
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
      }
    }],
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11]
    }
  ],
};

const cardChartOpts2 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent',
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
      }
    }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40]
    }
  ],
};

const cardChartOpts3 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }],
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
    }
  ],
};

const cardChartOpts4 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false,
      barPercentage: 0.6,
    }],
    yAxes: [{
      display: false,
    }]
  }
}

// Main Chart

// convert Hex to RGBA
function convertHex(hex,opacity) {
  hex = hex.replace('#','');
  var r = parseInt(hex.substring(0,2), 16);
  var g = parseInt(hex.substring(2,4), 16);
  var b = parseInt(hex.substring(4,6), 16);

  var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
  return result;
}

//Random Numbers
function random(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50,200));
  data2.push(random(80,100));
  data3.push(65);
}

const mainChart = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: convertHex(brandInfo,10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3
    }
  ]
}

const mainChartOpts = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        drawOnChartArea: false,
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        maxTicksLimit: 5,
        stepSize: Math.ceil(250 / 5),
        max: 250
      }
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    }
  }
}

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-primary">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <button onClick={this.toggle} className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                      <i className="icon-settings"></i>
                    </button>

                    <DropdownMenu>

                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>

                    </DropdownMenu>
                  </Dropdown>
                </div>
                <h4 className="mb-0">13</h4>
                <p>Events in last hour</p>
              </div>
              <div className="chart-wrapper px-1">
                <Line data={cardChartData1} options={cardChartOpts1} height={70}/>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-info">
              <div className="card-block pb-0">
                <button type="button" className="btn btn-transparent active p-0 float-right">
                  <i className="icon-location-pin"></i>
                </button>
                <h4 className="mb-0">245</h4>
                <p>Events in last day</p>
              </div>
              <div className="chart-wrapper px-1">
                <Line data={cardChartData2} options={cardChartOpts2} height={70}/>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-warning">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  <button type="button" className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="icon-settings"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
                <h4 className="mb-0">823</h4>
                <p>Events in last week</p>
              </div>
              <div className="chart-wrapper">
                <Line data={cardChartData3} options={cardChartOpts3} height={70}/>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-danger">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  <button type="button" className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="icon-settings"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
                <h4 className="mb-0">1543</h4>
                <p>Total events</p>
              </div>
              <div className="chart-wrapper px-1">
                <Bar data={cardChartData4} options={cardChartOpts4} height={70}/>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-block">
            <div className="row">
              <div className="col-sm-5">
                <h4 className="card-title mb-0">Events</h4>
                <div className="small text-muted">Last Month</div>
              </div>
              <div className="col-sm-7 hidden-sm-down">
                <button type="button" className="btn btn-primary float-right"><i className="icon-cloud-download"></i></button>
                <div className="btn-toolbar float-right" role="toolbar" aria-label="Toolbar with button groups">
                  <div className="btn-group mr-1" data-toggle="buttons" aria-label="First group">
                    <label className="btn btn-outline-secondary">
                      <input type="radio" name="options" id="option1"/> Day
                    </label>
                    <label className="btn btn-outline-secondary active">
                      <input type="radio" name="options" id="option2" defaultChecked/> Month
                    </label>
                    <label className="btn btn-outline-secondary">
                      <input type="radio" name="options" id="option3"/> Year
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="chart-wrapper" style={{height: 300 + 'px', marginTop: 40 + 'px'}}>
              <Line data={mainChart} options={mainChartOpts} height={300}/>
            </div>
          </div>
          <div className="card-footer">
            <ul>
              <li>
                <div className="text-muted">Camera 1</div>
                <Progress className="progress-xs mt-h" color="success" value="100" />
              </li>
              <li className="hidden-sm-down">
                <div className="text-muted">Camera 2</div>
                <Progress className="progress-xs mt-h" color="info" value="100" />
              </li>
              <li className="hidden-sm-down">
                <div className="text-muted">Camera 3</div>
                <Progress className="progress-xs mt-h" color="warning" value="100" />
              </li>
              <li className="hidden-sm-down">
                <div className="text-muted">Camera 4</div>
                <Progress className="progress-xs mt-h" color="danger" value="100" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
