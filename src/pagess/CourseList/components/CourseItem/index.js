import React from 'react';
import {StyledListItem} from "./styles";
import {Button, ButtonGroup, Col} from "react-bootstrap";

const CourseItem = (props) => {
    return (
        <StyledListItem action>
            <Col>
                <h3 className='lead'>{props.title}</h3>
                <p>{props.description}</p>
            </Col>
            <ButtonGroup>
                <Button variant='warning'>Edit</Button>
                <Button variant='danger'>Delete</Button>
                <Button variant='success'>Download</Button>
            </ButtonGroup>
        </StyledListItem>
    )
}

export default React.memo(CourseItem)