// Dumb Component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterForm from '../../components/news/RegisterForm';
import { newsAction } from '../../actions/newsActions';
import { setLoading } from '../../actions/loaderAction';
import { getNewsByCategory} from '../../parseMethod/NewsMethod';

function mapStateToProps(store) {
  return {
    loader: store.loader,
    articles: store.articles
  }
}

class Sports extends Component {
  componentDidMount() {
    // console.log("Props")
    const { match } = this.props;
    const { params } = match || {};
    const { data } = params || "";
    getNewsByCategory(params).then(
      result => {
        this.props.dispatch(setLoading(false));
        this.props.dispatch(newsAction(result));
      }, function (error) {
        this.props.dispatch(setLoading(false));
      }
    );
  }
  render() {
    const {
      history,
      loader,
      dispatch,
      match,
      articles,
    } = this.props;
    const { item } = articles || [];
    // console.log("Props", this.props);
    return (
      <RegisterForm
        history = {history}
        loader = {loader}
        match = {match}
        items = {item}
        dispatch = {dispatch}
      />
    )
  }
}

Sports.propTypes = {
  history: PropTypes.object,
  loader: PropTypes.object,
  match: PropTypes.object,
  dispatch: PropTypes.func
};

// By passing nothing to connect it still gives access to dispatch as a prop, which is useful in this case, I do not need mapstatetoprops here.
export default connect(mapStateToProps)(Sports);
