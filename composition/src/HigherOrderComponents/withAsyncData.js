import React from 'react';
import fakeFetch from '../util/fakeFetch';

// Using this instead of Redux or Relay
export default function withAsyncData(Component) {

  return class DataContainer extends React.Component {

    state = {
      loading: true,
      data: null,
    }

    componentDidMount() {
      fakeFetch('https://notathing.com')
        .then((data) => {
          this.setState({ loading: false, data: data });
        })
    }

    render() {
      const { loading, data } = this.state;
      return <Component loading={loading} data={data} />
    }
  }
}