import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
// import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
  
} from "react-router-dom";
import News from './components/News';
// import NewsItem from './components/NewsItem';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize=5
  state = {
    progress:0
  }

  setProgress = (progress) => {
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
            color='#f11946'
            progress={this.state.progress}
            
          />
          <Routes>
            <Route path='/' element={<News setProgress={this.setProgress}  key='general' pageSize={this.pageSize} country='in' category='general' my-3/>}></Route>
            <Route path='/business' element={<News setProgress={this.setProgress}  key='business' pageSize={this.pageSize} country='in' category='business' my-3/>}></Route>
            <Route path='/entertainment' element={<News setProgress={this.setProgress}  key='entertainment' pageSize={this.pageSize} country='in' category='entertainment'my-3 />}></Route>
            <Route path='/health' element={<News setProgress={this.setProgress}  key='health' pageSize={this.pageSize} country='in' category='health'my-3 />}></Route>
            <Route path='/science' element={<News setProgress={this.setProgress}  key='science' pageSize={this.pageSize} country='in' category='science' my-3/>}></Route>
            <Route path='/sports' element={<News setProgress={this.setProgress}  key='sports' pageSize={this.pageSize} country='in' category='sports' my-3/>}></Route>
            <Route path='/technology' element={<News setProgress={this.setProgress}  key='technology' pageSize={this.pageSize} country='in' category='technology'my-3 />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
