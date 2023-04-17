import React from 'react';
import './App.css';
import {AddCourse, CourseList} from './pagess';

const DATA = [
    {title: "Title 1", description: "des1"},
    {title: "Title 2", description: "des2"}
]



function App() {
    const [course, setCourse] = React.useState(DATA)
    const [screenName, setScreenName] = React.useState('')
    let ScreenComponent
    let props = {}

    switch(screenName) {
        case "course-list":
            ScreenComponent = CourseList
            props = {
                courses: course
            }
            break;
        case "add-course":
            ScreenComponent = AddCourse
            break;
        default:
            ScreenComponent = CourseList
            props = {
                courses: course
            }
            break;
    }

    const addCourse = (newCourse) => {
        setCourse([...course, newCourse])
    }

    console.log(course)

    const onNavigate = (screenName) => {
        setScreenName(screenName)
    }
    
    return(
        <div className='App'>
            {/* <CourseList courses={DATA} /> */}
            <ScreenComponent {...props} onNavigate={onNavigate} addCourse={addCourse} />
        </div>
    )
}

export default App;
