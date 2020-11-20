import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { NavLink } from 'react-router-dom';
import { newsAction } from '../../actions/newsActions';
import { setLoading } from '../../actions/loaderAction';
import { searchMethod} from '../../parseMethod/NewsMethod';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
  }

  search(data) {
    console.log("data", data);
    searchMethod(data).then(
      result => {
        this.props.dispatch(setLoading(false));
        this.props.dispatch(newsAction(result));
      }, function (error) {
        this.props.dispatch(setLoading(false));
      }
    );
    console.log("search", data.search);
    let url = "http://newsapi.org/v2/top-headlines?country=gb&q="+data.search+"&apiKey=4fa772c7e06049f4b248178d46cd92a5";
    this.props.dispatch(setLoading(true));
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          // console.log("result", result);
          this.props.dispatch(setLoading(false));
          this.props.dispatch(newsAction(result.articles));
        },
        (error) => {
          console.log("error", error);
          this.props.dispatch(setLoading(false));
        }
      )
  }
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Uk News</a>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <NavLink exact to="/">
                Top Headlines
              </NavLink>
            </li>
            <li>
              <NavLink to="/bbc/bbc-news">
                BBC News
              </NavLink>
            </li>
            <li>
              <NavLink to="/business/business">
                Business News
              </NavLink>
            </li>
            <li>
              <NavLink to="/sports/sports">
                Sports News
              </NavLink>
            </li>
            <li>
              <NavLink to="/health/health">
                Health News
              </NavLink>
            </li>
            <li>
              <NavLink to="/technology/technology">
                Technology News
              </NavLink>
            </li>
          </ul>
          <Formik
          initialValues={{ search: '' }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Formik", values);
            this.search(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <Form  className="form-inline ml-auto" style={{paddingTop: "10px", float: "right"}}>
              <Field
                type="text"
                name="search"
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control mr-sm-2"
                placeholder="Search"
                autocomplete="off"
              />
              {errors.otp && touched.otp && errors.otp}
              <button type="submit" className="btn btn-outline-light">Search</button>
            </Form>
          )}
        </Formik>
          {/* <form className="form-inline ml-auto" style={{paddingTop: "10px", float: "right"}}>
            <input type="text" className="form-control mr-sm-2" placeholder="Search" />
            <button type="submit" className="btn btn-outline-light">Search</button>
          </form> */}
        </div>
      </nav>
    )
  }
}
export default Sidebar;
