import React, {Component} from 'react';
import './Math.css';

class Math extends Component {
    constructor() {
        super();
        this.state = {
            exampleData: []
        }
    }

    componentDidMount() {
        fetch('/example')
            .then(res => res.json())
            .then(exampleData => this.setState({exampleData}))
    }

    render() {
        return (
            <div>
                <h2>Quick Maths</h2>
                <table border="1">
                    <thead>
                    <tr>
                        <th>A</th>
                        <th>Operator</th>
                        <th>B</th>
                        <th>Results</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.exampleData.map(data =>
                        <tr>
                            <td>{data.a}</td>
                            <td>{data.operator}</td>
                            <td>{data.b}</td>
                            <td>{data.result}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Math;