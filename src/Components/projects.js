import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0};
  }

  toggleCategories() {
    if(this.state.activeTab === 0) {
      return(
      <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '400px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center / cover'}} >React Project</CardTitle>
        <CardActions border>
          <Button href="https://github.com">GitHub</Button>
        </CardActions>
      </Card>
      )
    } else if(this.state.activeTab === 1) {
      return(
        <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '400px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq_HG6V3BRQBteC6VnmzEq5e2e-SXuQn4ECg&usqp=CAU) center / cover'}} >C++ Work</CardTitle>
        <CardActions border>
          <Button href="https://github.com/COSC-A211-2020-01-Spring/cosc-a211-term-project-spring-2020-WesleyAnderson2244">GitHub</Button>
        </CardActions>
      </Card>
      )
    } else if(this.state.activeTab === 2) {
      return(
        <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '400px', background: 'url(https://wallpapercave.com/wp/wp2163541.jpg) center / cover'}} >Arduino Project</CardTitle>
        <CardActions border>
          <Button href="https://github.com/20F-COSC-A212/FinalProject-WesleyAnderson2244">GitHub</Button>
        </CardActions>
      </Card>
      )
    } else if(this.state.activeTab === 3) {
      return(
        <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '400px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2PwRQttmK18ZBYWADrccj8tjjsnIWtDFvqQ&usqp=CAU) center / cover'}} >JavaScript Work</CardTitle>
        <CardActions border>
          <Button href="https://github.com/20F-COSC-A319/COSC-A319-20F-A1-ethernet-parser-synchronous-WesleyAnderson2244">GitHub</Button>
        </CardActions>
      </Card>
      )
    }
  }

    render() {
        return (
           <div className="category-tabs">
             <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} >
               <Tab>React</Tab>
               <Tab>C++</Tab>
               <Tab>Arduino</Tab>
               <Tab>JavaScript</Tab>
             </Tabs>

               <Grid className="projects-grid">
                 <Cell col={12}>
                   <div className="content">{this.toggleCategories()}</div>
                 </Cell>
               </Grid>
           </div> 
        )
    }
}

export default Projects;