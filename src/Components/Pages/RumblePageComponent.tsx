import React from 'react'
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';


const RumblePageComponent = () => {
  return (
    <Container>
    <h1 className='text-center mt-5'>Front-End Developer (<a className='link' href="https://corp.rumble.com/careers/current-job-openings/" target="_blank" rel="noopener noreferrer">Rumble</a> Advertising Center)</h1>
    <Accordion className='mt-5'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Why do I want to work here?</Accordion.Header>
        <Accordion.Body>
          I believe in rumbles message of restoring the Internet to its roots by making it free and open once again. This job is also remote so I'll be able to work with a setup I'm more intuned with making my output higher than if I were in person. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Do I currently have the skillset for this position?</Accordion.Header>
        <Accordion.Body>
          They require 5+ years experience developing with VueJS and vanilla JavaScript with Dom. They also want Experience / Understanding of back-end development. Some other desired qualifications they want are knowledge in other JavaScript frameworks such as Angular or React.
          At the moment I have about 6 months experience with JavaScript and about 3 months expereince with React. so At the moment I do not have the skills required, but I do have the desire and will to eventually meet these requirements.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What goals would I like to achieve in this position?</Accordion.Header>
        <Accordion.Body>
          In this role, my focus is on elevating our front-end capabilities, crafting seamless user experiences, and fostering collaboration with our back-end counterparts. My objective is to drive impact at Rumble while sharpening my skills and achieving meaningful results.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Job Desciption and Requirements</Accordion.Header>
        <Accordion.Body>
          Description:
          <ul>
            <li>Developing and maintaining live / interactive user interfaces.</li>
            <li>Writing JavaScript code both with Vue JS and without (vanilla JavaScript).</li>
            <li>Designing and writing extensive libraries (with and without frameworks) that can be reused and included on demand </li>
            <li>Writing code optimized for size and speed.</li>
            <li>Styling interfaces using efficient and responsive CSS (that looks good on all devices)</li>
            <li>Consume APIs via HTTPS requests</li>
            <li>Creating & optimizing the users' experiences.</li>
            <li>Implementing SEO best practices where possible.</li>
            <li>Fixing and testing your code for bugs and maintainability</li>
            <li>Be able to coordinate with back-end teams</li>
            <li>Other duties, as assigned.</li>
          </ul>
          Requirements:
          <ul>
            <li>5+ years of experience in front-end development using VueJS and vanilla JavaScript with DOM.</li>
            <li>Strong foundation in JavaScript, extensive experience and theoretical knowledge.</li>
            <li>Experience / understanding of back-end development.</li>
            <li>Understanding the importance of a balance between lean, efficient code, compatibility, and maintainability</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
  )
}

export default RumblePageComponent