import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class AboutMe extends Component {
    render() {
        return(
            <div>
            <Grid className="about-page">
                    <Cell col={12}>
                    <div className="about-desc">
                    <h1>Hi!</h1>  
                    <h2>I am an aspiring full-stack software developer, with a particular interest in smart cities, AI/ML, data science for social good, and GIS. <br/>
                    Please contact me at alishahusain20@gmail.com if you would like to connect.      
                    </h2>  
                    </div>

                    <h1>Thanks for stopping by!</h1>  
                    </Cell>  
                        
            </Grid>
            </div>
        )
    }
}

export default AboutMe;