import React from 'react'

const Course = ({courses}) => (
    courses.map(course => {
        let accumulator = 0
        course.parts.map(part => accumulator += part.exercises)
        return(
        <div>
            <Header key={course.id} course={course.name}/>
            {course.parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises}/>)}
            <p> total of {accumulator} exercises </p>
        </div>
        )
    })
)

const Header = ({course}) => {
    return (
      <div>
        <h1>{course}</h1>
      </div>
    )
}
  
const Part = ({part, exercises}) => {
    return (
      <div>
        <p>{part} {exercises}</p>
      </div>
    )
}

export default Course