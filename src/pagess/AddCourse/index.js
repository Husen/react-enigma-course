import React from 'react'
import { Button, ButtonGroup, Form } from 'react-bootstrap'
import { StyledContainer, StyledTitle } from './style'
import FormInput from '../../components/FormInput'
import useAddCourse from './useAddCourse'

const FORM_LIST = [
    { id: "title", label: "TItle", type: "text", placeholder: "Enter course title" },
    { id: "description", label: "Description", type: "textarea", placeholder: "Enter course description" },
    { id: "typeId", label: "Type Id", type: "text", placeholder: "Enter course type id" },
    { id: "courseFile", label: "Course Material", type: "file", placeholder: "Choose course material" },
    { id: "level", label: "Level", type: "text", placeholder: "Enter course level" },
    { id: "duration", label: "Duration", type: "text", placeholder: "Enter course duration" }
]

const AddCourse = ({ onNavigate, setCourses }) => {
    const { getter, setter } = useAddCourse()
    // const { onNavigate, setCourses } = props

    const handleSubmit = () => {
        setCourses((prevState) => {
            const newCourse = {...prevState}
            const payload = {
                ...getter,
                courseId: Math.random().toString()
            }
            newCourse?.data?.push(payload)
            return newCourse
        })

        onNavigate("/")
    }

  return (
    <StyledContainer>
        <StyledTitle>Add Course</StyledTitle>
        <Form onSubmit={handleSubmit}>
            { FORM_LIST.map(item => (
                <FormInput 
                    label={item.label}
                    type={item.type}
                    value={getter[item.id]}
                    onChange={setter[item.id]}
                    placeholder={item[item.placeholder]}
                    key={item.id}
                />
            )) }
            <ButtonGroup>
                <Button variant='success' type='submit' disabled={getter.isDisable}>
                    Submit
                </Button>
                <Button variant='secondary' onClick={() => onNavigate("/")}>
                    Cancel
                </Button>
            </ButtonGroup>
        </Form>
    </StyledContainer>
  )
}

export default AddCourse