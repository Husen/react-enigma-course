import React from "react";
import {Button, Container} from "react-bootstrap";

import {StyledListGroup, StyledText} from "./styles";
import CourseItem from "./components/CourseItem";


const EmptyList = () => (
    <StyledText>Data Kosong...</StyledText>
)

const ListItem = (props) => {
    const {data} = props
    return (

        <StyledListGroup>
            {
                data.map((course, index) => {
                    return (
                        <CourseItem
                        title={course.title}
                        description={course.description}
                        key={index}
                        />
                    )
                })
            }
        </StyledListGroup>
    )
}

const CourseList = (props) => {
    const {courses, onNavigate} = props
    console.log(courses)
    return (
        <>
            <Container>
                <h1>Course list page</h1>
                <Button variant="primary" onClick={() => onNavigate("add-course")}>Add Course</Button>
                {
                    courses.length > 0 ? <ListItem data={courses} /> : <EmptyList text="Data masih kosong" />
                }
            </Container>
        </>
    )
}


export default CourseList;