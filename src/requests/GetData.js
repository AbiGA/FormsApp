import React, { Component } from 'react';
import axios from 'axios';

class GetData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datas: []
        }
    }

    componentDidMount() {
        axios.get('http://eletionapp.3m3pfprvaw.ap-south-1.elasticbeanstalk.com/api/forms').then(response => {
            // this.state.data = response;
            this.setState({ datas: response.data })
            console.log(response, this.state)

        }).catch(error => {
            console.log(error)
        })
    }
    render() {
        const { datas } = this.state
        return (
            <div>
                {
                    datas.length ?
                        datas.map(data => <div key={data.id}> {data.formname} </div>) :
                        null
                }

            </div>
        );
    }
}

export default GetData;
