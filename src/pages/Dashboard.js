import React, { Component } from "react"
import {
  Bar,
  Doughnut
} from "react-chartjs-2"
import Layout from "./layouts/Layout"

// TODO
// charts: 
// - https://www.chartjs.org/
// - https://gor181.github.io/react-chartjs-2/
class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bar: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      },
      doughnut: {
        labels: [
          'Red',
          'Green',
          'Yellow'
        ],
        datasets: [{
          data: [300, 50, 100],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
      }
    }
  }

  render() {
    return (
      <Layout>
        <div className="pt-3">
          <h2>Bar Chart</h2>
          <div className="chart-container">
            <Bar
              data={this.state.bar}
              height={100}
              options={{ maintainAspectRatio: false }}
            />
          </div>

          <h2 className="pt-3">Doughnut Chart</h2>
          <div className="chart-container">
            <Doughnut
              data={this.state.doughnut}
              height={100}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Dashboard