import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class LandingPage extends Component {
    render() {
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src='https://i.ibb.co/QPLJGjK/avatar-1.png'
                            alt='avatar'
                            className='avatar-img'
                        />
                        <div className='banner-text'>
                            <h1>Software Developer</h1>
                            <hr/>
                            <p>Python   |   Java   |   SQL   |   R   |   HTML/CSS   |   JavaScript   | React</p>
                            <div className="social-links">
                            {/* LinkedIn*/}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* GitHub*/}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>
                            </div>
                        </div>
                    </Cell>


                </Grid>



            </div>
        )
    }
}

export default LandingPage;