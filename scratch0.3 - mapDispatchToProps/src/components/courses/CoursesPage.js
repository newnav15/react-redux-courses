import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component{
  constructor(props, context){
    super(props,context);
    this.state ={
      course:{title:""}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course:course});
  }

  onClickSave(){
    //alert(`Saving ..................................... ${this.state.course.title}`);
    this.props.createCourse(this.state.course); //since we do not define a dispatch object to connect, connect will give dispatch
  }

  courseRow(course, index){
    return <div key={index}> {course.title}</div>;
  }

  render(){
    return(
      <div>
        <h1> Courses </h1>
        {this.props.courses.map(this.courseRow)}
        <h2> Add Courses </h2>
        <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
        <input type="submit" onClick={this.onClickSave} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  return{
    courses: state.courses // name from reducer file ie index.js
  };
}

function mapDispatchToProps(dispatch){
   return{
     createCourse: course => dispatch(courseActions.createCourse(course))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);