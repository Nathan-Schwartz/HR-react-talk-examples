import React from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

export default class ContactCard extends React.Component {

  state = {
    expanded: false,
  }

  // Here we are using shouldComponentUpdate to make sure that
  // we only rerender when values change
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.email !== this.props.email
      || nextState.expanded !== this.state.expanded
  }

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  noopClick = () => {}

  render() {
    console.log("Card Render")
    const { email, first_name, last_name, image } = this.props;
    return (
      <span style={{ width: 250, display: 'inline-block', margin: 10 }}>
        <Card>
          <CardHeader
            title={`${first_name} ${last_name}`}
            subtitle={email}
            avatar={image}
          />
          <CardText>
            <Toggle
              toggled={this.state.expanded}
              onToggle={this.handleToggle}
              style={{ marginLeft: 20 }}
              labelPosition="right"
              label="random toggle"
            />
          </CardText>
          <CardActions>
            <FlatButton label="Expand" onTouchTap={this.noopClick} />
            <FlatButton label="Reduce" onTouchTap={this.noopClick} />
          </CardActions>
        </Card>
      </span>
    );
  }
}