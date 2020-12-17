import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
           <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img
                    src="https://d21gd0ap5v1ndt.cloudfront.net/web03/loyola/images/mug_shots/2019-20/wes_anderson_32_mba.jpg?v5545afe0a061115bfa779523ee60978a5c7d8b54"
                    alt="headshot"
                    className="headshot-img"
                    />
                    <div className="banner-text">
                        <h1>Computer Information Systems Major</h1>

                        <p>C++ | JavaScript | React | Management</p>

                    </div>
                </Cell>
            </Grid>
           </div> 
        )
    }
}

export default Landing;