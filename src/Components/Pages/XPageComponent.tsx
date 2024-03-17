import React from 'react'
import { Accordion, Container } from 'react-bootstrap'

const XPageComponent = () => {
  return (
    <Container>
    <h1 className='text-center mt-5'>Android Engineering Intern <a className='link' href="https://careers.x.com/en#positions" target="_blank" rel="noopener noreferrer">X</a></h1>
    <Accordion className='mt-5'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Why do I want to work here?</Accordion.Header>
        <Accordion.Body>
        Working at X presents an exciting opportunity to contribute to the creation of a groundbreaking real-time information-sharing app with a global impact. The company's commitment to minimal censorship within legal boundaries aligns with my values of promoting open public discourse and freedom of expression. I am eager to be part of a team dedicated to fostering an environment where every user can freely create and share ideas without barriers.

        As an Android Engineering Intern at X, I will have the chance to work on cutting-edge technologies and tackle challenging technical problems at scale. Collaborating with passionate teams across engineering, data science, research, product, and design will provide me with invaluable learning experiences and opportunities for personal growth. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Do I currently have the skillset for this position?</Accordion.Header>
        <Accordion.Body>
          At the moment, far from it. I would have to learn Java and Koltin. I'd also have to learn Android Studio. I'd also need to be studying Computer Science.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What goals would I like to achieve in this position?</Accordion.Header>
        <Accordion.Body>
        In this role as an Android Engineering Intern at X, my primary goal is to contribute significantly to the development and enhancement of the X app. I aim to actively participate in building and refining its features, ensuring they meet high standards of performance, reliability, and user experience. Throughout the internship, I seek to expand my technical skills in mobile application development, particularly in Java and Kotlin programming languages, while gaining practical experience with Android Studio. Additionally, I aspire to sharpen my problem-solving abilities by tackling complex technical challenges inherent in developing a real-time information-sharing app. By collaborating closely with cross-functional teams, including engineering, data science, research, product, and design, I aim to foster an environment of innovation and teamwork, contributing positively to the project's success. Furthermore, I am committed to continuous learning and growth, staying updated on the latest industry trends and technologies to deliver impactful results that enhance the app's value to its users and the company as a whole.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Job Desciption and Requirements</Accordion.Header>
        <Accordion.Body>
          <p>Description:</p>
          <p>X serves our community of users and customers by working tirelessly to preserve free expression and choice, create limitless interactivity, and create a marketplace that enables the economic success of all its participants.</p>


          <p>The X mobile engineering team is responsible for bringing you all the features of X for Android. Our work impacts hundreds of millions of users, which brings with it exciting product and technical challenges at that scale. We keep development lightweight and agile, make data driven decisions, and release with high quality and velocity.</p>

          <p>Who we are: Our teams love using the latest mobile technologies and tools for making the highest quality and best performing mobile app. Our work is an integral part of X’s product vision and directly impacts the lives of our users and the success of our business. Our teams work on everything in the X app - various features like spaces, explore; foundational building blocks like posts, Timeline, DM, core frameworks and APIs. We solve complicated problems that are unique to both the scale of our customer base and the size of the engineering organization we have.</p>


          <p>What you’ll do: In X, you will use your creativity, excellent problem solving, and technical skills to enable X to reach every person on the planet. You will build high quality features and code. You will work at all layers of the stack and work closely with partners across engineering, data science, research, product, and design. You will contribute to our codebase, design fun and exciting new features, and stay ahead of the curve of the constantly evolving development ecosystem.</p>

          <p>Who you are: We are looking for talented students to join us for an internship in 2024 to make X one of the best mobile experiences out there. You are someone who excels at customer-centric product development and has a passion for working on application architecture and design, and making smooth, delightful user experiences. You care deeply about quality, are energized by partnership and collaboration, and you strive to enable others around you to excel. If this sounds like you, you probably have: Strong programming skills in Java and/or Kotlin and exposure to building high quality, scalable, reusable code. You have technical depth that allows you to rapidly fix bugs and solve problems. Knowledge of core CS concepts such as: common data structures and algorithms, profiling, and optimization</p> 
          <p>Requirements:</p>
          <ul>
            <li>Knowledge of programming in Kotlin and Java</li>
            <li>Knowledge of Android Studio </li>
            <li>Currently pursuing an undergraduate or masters degree in CS or Engineering-related field</li>
            <li>Able to commit to at least 12 weeks or more at SF or NYC X Office location</li>
            <li>In compliance with federal law, all offers are subject to verification of identity and eligibility to work in the US, and completion of the required employment eligibility verification form.</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
  )
}

export default XPageComponent