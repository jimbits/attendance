import React, { Component } from "react";
import NavBar from "../../components/ui/navbar/NavBar";
import AddCourse from "../../components/addcourse/AddCourse";
import Alert from "../../components/ui/alert/Alert";
import Courses from "../../components/courses/Courses";
import "./course-container.css";

class CoursesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseList: [{ course: "dmit1530", section: "A01", term: "winter" }],
      message:
        "You can't contiue until you have create a course. Please click on the button bellow to add a course",
      error: true
    };
  }
  componentDidMount() {
    if (this.state.courseList.length !== 0) {
      this.setState({
        error: false
      });
    }
  }
  removeWarning = () => {
    this.setState({
      error: false
    });
  };
  addCourse = aCourse => {
    const newList = [...this.state.courseList];
    newList.push(aCourse);
    console.table(newList);
    this.setState({
      courseList: newList
    });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar title="Course Calander" />
        <section className="courses-page">
          {this.state.error ? (
            <Alert message={this.state.message} onClick={this.removeWarning} />
          ) : (
            <React.Fragment>
              <div className="add-course">
                <AddCourse addCourse={this.addCourse} />
              </div>
              <div className="courses">
                <Courses courses={this.state.courseList}>
                  {this.props.children}
                </Courses>
              </div>
            </React.Fragment>
          )}
        </section>
      </React.Fragment>
    );
  }
}

export default CoursesContainer;
