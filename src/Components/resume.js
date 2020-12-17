import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Resume extends Component {
    render() {
        return (
           <div>
               <Grid>
                   <Cell className="resume-left-col"col={6}>
                       <div style={{textAlign: 'center'}}></div>
                       <h2 style={{paddingTop: '1em'}}>Wesley Anderson</h2>
                       <h4 style={{color: 'white'}}>Programmer</h4>
                       <p>
                       Hello! I am a programmer that can program In C++,
                        and JavaScript. I am currently seeking a bachelor’s
                        degree in Computer Information Systems and am very
                        interested in a job opportunity that will offer me 
                        quality experience while advancing my knowledge. If
                        there are any questions you have for me, my information
                        is below and also on the contact information page. 
                       </p>
                       <h5>
                           Phone:
                       </h5>
                       <p>
                           (225)955-1781
                       </p>
                       <h5>
                           Email:
                       </h5>
                       <p>
                           wcanders@my.loyno.edu
                       </p>
                   </Cell>
                   <Cell className="resume-right-col"col={6}>
                       <div style={{textAlign: 'center'}}></div>
                       <h2 style={{paddingTop: '1em', paddingLeft: '.5em'}}>Education:</h2>
                       <h4 style={{color: 'white', paddingLeft: '1em'}}>Seeking a Bachelor of Science in Computer Information Systems with a concentration in Management.</h4>
                       <p style={{paddingLeft: '1em'}}>
                       University of Loyola at New Orleans, New Orleans, LA; expected graduation 2020; Senior; Current GPA: 3.33
                       Previously Attended Bossier Parish Community College, Bossier City, LA; Overall GPA while at BPPC: 3.22
                       </p>
                       <h2 style={{paddingLeft: '.5em'}}>Honors and Activities:</h2>
                       <h4 style={{color: 'white', paddingLeft: '1em'}}>- Scholorship Athlete in Baseball at Bossier Parish Community College</h4>
                       <h4 style={{color: 'white', paddingLeft: '1em'}}>- Scholorship Athlete in Baseball at University Loyola at New Orleans</h4>
                       <h4 style={{color: 'white', paddingLeft: '1em'}}>- Region XIV Athletic Conference All-Academic Team awarded March, 2018</h4>
                       <h4 style={{color: 'white', paddingLeft: '1em'}}>- Community Service Involvement</h4>
                       <p style={{paddingLeft: '4em'}}>
                           o	Baton Rouge Food Bank 2015
                       </p>
                       <p style={{paddingLeft: '4em'}}>
                           o	Istrouma GO Day- House Remodeling 2016
                       </p>
                       <p style={{paddingLeft: '4em'}}>
                           o	ULL Baseball Camp for children 2018 
                       </p>
                   </Cell>

               </Grid>
           </div> 
        )
    }
}

export default Resume;
