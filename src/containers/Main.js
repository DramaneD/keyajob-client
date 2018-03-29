import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import HomePage from '../components/HomePage';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import JobList from '../components/JobList';
import ShowJob from '../components/ShowJob';
import Category from '../components/Category';
import JobPostForm from '../components/JobPostForm';
import RequestForm from '../components/RequestForm';
import AuthForm from '../components/AuthForm';
import Footer from '../components/Footer';

class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {
        jobs: [
          {
            id: 0,
            title: "Junior Front End Developer",
            companyBrand: "/img/zenly.png",
            companyName: "BisSoft",
            favorite: " ",
            category: "Development",
            jobType: "Full Time",
            tags: ["NodeJS", "Front End", "Express"],
            createdAt: "2 days ago"
          },
          {
            id: 1,
            title: "Junior Front End Developer",
            companyBrand: "/img/zenly.png",
            companyName: "BisSoft",
            favorite: " ",
            category: "Development",
            jobType: "Full Time",
            tags: ["NodeJS", "Front End", "Express"],
            createdAt: "2 days ago"
          },
          {
            id: 2,
            title: "Junior Front End Developer",
            companyBrand: "/img/zenly.png",
            companyName: "BisSoft",
            favorite: " ",
            category: "Development",
            jobType: "Full Time",
            tags: ["NodeJS", "Front End", "Express"],
            createdAt: "3 days ago"
          },
          {
            id: 3,
            title: "Junior Front End Developer",
            companyBrand: "/img/zenly.png",
            companyName: "BisSoft",
            favorite: " ",
            category: "Development",
            jobType: "Full Time",
            tags: ["NodeJS", "Front End", "Express"],
            createdAt: "2 days ago"
          },
          {
            id: 4,
            title: "Junior Front End Developer",
            companyBrand: "/img/zenly.png",
            companyName: "BisSoft",
            favorite: " ",
            category: "Development",
            jobType: "Full Time",
            tags: ["NodeJS", "Front End", "Express"],
            createdAt: "2 days ago"
          }
        ]
      }
    }
  render () {
    return (
      <div className="">
        <Switch>
          <Route exact path='/jobs' render={props => (
            <div>
              <Header />
              <div className="container">
                <SearchForm />
              </div>
              <hr style={{width: "50%"}} />
              <div className="container-fluid">
                <div className="row">
                  <Category />
                  <JobList jobs={this.state.jobs} />
                </div>
              </div>
              <Footer />
              </div>
            )}
          />
          <Route exact path="/job/123" render={props => (
            <div>
              <ShowJob jobs={this.state.jobs} />
            </div>
            )} 
          />
          <Route exact path='/jobs/new' render={ props => (
            <div>
              <JobPostForm />
              <Footer />
            </div>
            )} 
          />
          <Route exact path='/request/new' render={ props => (
            <div>
              <RequestForm />
              <Footer />
            </div>
            )} 
          />
          <Route exact path='/signin' render={(props) => (
            <div>
              <AuthForm
                signIn={true}
                heading={"Welcome Back."}
                buttonText={"Log in"}
                {...props}
              />
              <Footer />
            </div>
          )} />
          <Route exact path='/signup' render={(props) => (
            <div>
              <AuthForm
                signIn={false}
                heading={"Join KeyaJob today."}
                buttonText={"Sign me up!"}
                {...props}
              />
              <Footer />
            </div>
          )} />
          <Route to='/' component={HomePage} />
        </Switch>
      </div>
    )
  }
}

export default withRouter((Main));