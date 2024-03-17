import React from 'react'
import { Accordion, Container } from 'react-bootstrap'

const NavigoPageComponent = () => {
  return (
    <Container>
    <h1 className='text-center mt-5'>Front-End Developer <a className='link' href="https://www.redballoon.work/employer/profile/9716" target="_blank" rel="noopener noreferrer">NAVIGO</a></h1>
    <Accordion className='mt-5'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Why do I want to work here?</Accordion.Header>
        <Accordion.Body>
        The opportunity at NAVIGO really stands out to me. Their dedication to global safety through innovative software solutions is both inspiring and impactful. I'm excited about the chance to contribute my skills to a growing firm with such a meaningful mission. The flexibility of remote work and the emphasis on results-driven performance are also appealing. Overall, I'm eager to be part of NAVIGO's team, collaborate with talented individuals, and make a real difference in the world.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Do I currently have the skillset for this position?</Accordion.Header>
        <Accordion.Body>
          I may have less than a year in experience with HTML5, CSS, JavaScript, and React, but I have learned A LOT in that short period of time. At the end of the day though I am always learning, so if not enough now then eventually I will.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What goals would I like to achieve in this position?</Accordion.Header>
        <Accordion.Body>
        In this role at NAVIGO, my goals are to contribute to the development of the analysis and communications platform, utilizing modern web technologies effectively. I aim to expand my expertise in API-driven architecture and data visualization while fostering collaboration and continuous improvement within the team. Ultimately, I strive to support NAVIGO's mission of ensuring global safety through innovative solutions.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Job Desciption and Requirements</Accordion.Header>
        <Accordion.Body>
          Description:
          <p>Navigo is a software/data/consulting firm dedicated to keeping people safe as they travel and work in dangerous situations around the world. Navigo does this through a suite of risk management and analysis and intelligence tools designed for NGOs and enterprise customers. Today we support dozens of organizations and thousands of people across nearly 100 nations, and help them navigate tough situations and even crises. Our solutions play significant roles in saving lives and ensuring that NGOs and companies can operate more effectively.</p>

          <p>We are also a growing firm and need an experienced developer to help us continue our mission to build services that help companies and people across the globe.</p> 
          Requirements:
          <ul>
            <li>Strong experience with modern web technologies especially react, JavaScript, CSS, HTML5</li>
            <li>Experience working with APIs and API-driven architecture</li>
            <li>GitHub or GitLab for version control</li>
            <li>Experience with bootstrap, tailwind and/or other front-end CSS frameworks</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
  )
}

export default NavigoPageComponent