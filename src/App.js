import React from 'react';
import './App.css';
import {AddCourse, CourseList} from './pagess';

const DATA = [
    {title: "Title 1", description: "des1"},
    {title: "Title 1", description: "des1"}
]



function App() {

    const [screenName, setScreenName] = React.useState('')
    let ScreenComponent
    let props = {}

    switch(screenName) {
        case "course-list":
            ScreenComponent = CourseList
            props = {
                courses: DATA
            }
            break;
        case "add-course":
            ScreenComponent = AddCourse
            props = {
                courses: DATA
            }
            break;
        default:
            ScreenComponent = CourseList
            props = {
                courses: DATA
            }
            break;
    }

    const onNavigate = (screenName) => {
        setScreenName(screenName)
    }
    
    return(
        <div className='App'>
            {/* <CourseList courses={DATA} /> */}
            <ScreenComponent {...props} onNavigate={onNavigate} />
        </div>
    )
}

export default App;
