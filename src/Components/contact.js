import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
           <div className="contact-body">
               <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Wesley Anderson</h2>
                    <img
                        src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-0/p206x206/50820932_585076858581794_137475001132515328_n.jpg?_nc_cat=100&ccb=2&_nc_sid=da31f3&_nc_ohc=mhGh-HWsc6MAX8ZG0k9&_nc_ht=scontent-dfw5-2.xx&tp=6&oh=13c83d15455bd0ad16079975c56127bc&oe=60007790"
                        alt="avatar"
                        styler={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        Here are a few ways of reaching me. I tend to get back to emails
                        within a 24-hour period, but the best way of reaching me would be
                        a phone call or text.
                        </p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px',fontWeight: 'bold'}}
                                icon="phone">225-955-1781</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px',fontWeight: 'bold'}}
                                icon="mail">wcanders@my.loyno.edu</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px',fontWeight: 'bold'}}
                                icon="mail">wesley.anderson2244@yahoo.com</ListItemContent>
                            </ListItem>
                        </List>
                    </div>
                 </Cell>
              </Grid>
            </div> 
        )
    }
}

export default Contact;