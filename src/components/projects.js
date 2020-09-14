import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }





    //toggle categories method
    toggleCategories() {
        if(this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.linkpicture.com/q/mappergraph-2.jpg) center / cover'}} > MAPPERing Communities of Interest</CardTitle>
                  <CardText>
                    This project involved working with the MAPPER algorithm, which helps visualize high dimensional datasets using topological methods. Here you will find code that processes Census data for input into MAPPER, and running and analyzing MAPPER results. 
                  </CardText>
                  <CardActions border>
                    <Button colored>GitHub</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
      
                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.linkpicture.com/q/oswbackground.jpg) center / cover'}} >OpenSidewalks API</CardTitle>
                  <CardText>
                    This tool allows municipalities to convert their centerline sidewalk data into an OpenStreetMap compatible GeoJSON output. 
                  </CardText>
                  <CardActions border>
                  <a href="https://github.com/alishahusain/OpenSidewalks-API">
                    <Button colored>GitHub</Button>
                    </a>
                   
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
      
                {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.linkpicture.com/q/heatmap_1.png) center / cover'}} >What's Poppin'</CardTitle>
                  <CardText>
                    For people who want to know how busy someplace is before they visit it - an application that displays popular time data on an interactive map.
                  </CardText>
                  <CardActions border>
                  <a href="https://github.com/alishahusain/whats-poppin">
                    <Button colored>GitHub</Button>
                    </a>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </div>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <div><h1></h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return (
              <div className="projects-grid">
              {/* Project 1 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.linkpicture.com/q/reactpic2.png) center / cover'}} > alishahusain.github.io</CardTitle>
                <CardText>
                  This website was created using JavaScript and ReactJS.
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
    
              {/* Project 2 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.linkpicture.com/q/nostalgic-youtube.jpg) center / cover'}} >Nostalgia Extension</CardTitle>
                <CardText>
                Chrome browser extension that plays a random nostalgic YouTube video.
                </CardText>
                <CardActions border>
                <a href="https://github.com/alishahusain/Nostalgia-Extension">
                  <Button colored>GitHub</Button>
                  </a>
                 
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
    

            </div>
            )
        } else if(this.state.activeTab === 3) {
            return (
              <div className="projects-grid">
              {/* Project 1 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.linkpicture.com/q/usexports.jpg) center / cover'}} > US Exports, Visualized</CardTitle>
                <CardText>
                This research project investigates the United States state level export product data. Our team seeks to understand the diverse selection of export products, the trends in these exports, as well as the financial significance from different spatial scales.
                </CardText>
                <CardActions border>
                <a href="https://github.com/alishahusain/GEOG458_Final"> </a>
                  <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
  

            </div>
            )
        }
    }
    


    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab:tabId })} ripple>
                    <Tab>Python</Tab>
                    <Tab>Java</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>R</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
        
                </div>

        )
    }
}

export default Projects;