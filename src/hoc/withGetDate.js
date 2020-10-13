import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getPhotos} from '../action/api';

export const withGetDate = (Component) => {
  class HOC extends React.Component {
    componentDidMount() {
      const dispatch = useDispatch();
      useEffect(() => dispatch(getPhotos()), []);
    }
    render() {
      return (
        <>
          <Component {...this.props} />
        </>
      );
    }
  }

  return HOC;
};
