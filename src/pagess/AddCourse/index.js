import React from 'react'
import { Button, ButtonGroup, Form } from 'react-bootstrap'
import { StyledContainer, StyledTitle } from './style'
import FormInput from '../../components/FormInput'
import useAddCourseState from './useAddCouseState'

const FORM_LIST = [
    { id: "title", label: "TItle", type: "text", placeholder: "Enter course title" },
    { id: "description", label: "Description", type: "textarea", placeholder: "Enter course description" },
    { id: "typeId", label: "Type Id", type: "text", placeholder: "Enter course type id" },
    { id: "courseFile", label: "Course Material", type: "file", placeholder: "Choose course material" },
    { id: "level", label: "Level", type: "text", placeholder: "Enter course level" },
    { id: "duration", label: "Duration", type: "text", placeholder: "Enter course duration" }
]

const AddCourse = (props) => {
    const { getter, setter } = useAddCourseState()
    // const {onNavigate} = props

  return (
    <StyledContainer>
        <StyledTitle>Add Course</StyledTitle>
        <Form>
            { FORM_LIST.map(item => (
                <FormInput 
                    label={item.label}
                    type={item.type}
                    value={getter[item.id]}
                    onChange={setter[item.id]}
                    placeholder={item[item.placeholder]}
                />
            )) }
            <ButtonGroup>
                <Button variant='success'>
                    Submit
                </Button>
                <Button variant='secondary' onClick={() => props.onNavigate("/")}>
                    Cancel
                </Button>
            </ButtonGroup>
        </Form>
    </StyledContainer>
  )
}

export default AddCourse