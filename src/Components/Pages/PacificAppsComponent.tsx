import React from 'react'
import { Accordion, Container } from 'react-bootstrap'

const PacificAppsComponent = () => {
  return (
    <Container>
    <h1 className='text-center mt-5'>Front End Engineer (React) <a className='link' href="https://www.glassdoor.com/job-listing/front-end-engineer-react-pacific-apps-JV_IC1147436_KO0,24_KE25,37.htm?jl=1006651260630" target="_blank" rel="noopener noreferrer">Pacific Apps</a></h1>
    <Accordion className='mt-5'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Why do I want to work here?</Accordion.Header>
        <Accordion.Body>
        Working at Pacific Apps as a Front End Engineer excites me because it offers the chance to spearhead the development of cutting-edge web and mobile products. The company's commitment to Agile methodologies and sound UI/UX principles aligns perfectly with my expertise and passion. Collaborating with Solutions Architects and team members, I look forward to designing, building, and testing cross-platform solutions. Pacific Apps' emphasis on clean code, automated testing, and modern technologies ensures high-quality, innovative products. This opportunity promises a dynamic environment where I can leverage my skills and contribute to impactful projects.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Do I currently have the skillset for this position?</Accordion.Header>
        <Accordion.Body>
          I believe I have part of the skills for this job. I have knowledge in React, JavaScript, HTML, and CSS. Though I do believe with time I will meet the rest of the requirements for this position.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What goals would I like to achieve in this position?</Accordion.Header>
        <Accordion.Body>
        In this role as a Front End Engineer at Pacific Apps, my primary goal is to deliver high-quality web and mobile products that adhere to sound UI/UX principles. I aim to continuously enhance my skills and expertise in front-end development, particularly in React, Redux, and mobile development for both iOS and Android platforms. Additionally, I aspire to be an innovator within the iDialogue product, actively seeking opportunities for improvement and efficiency. Collaboration is essential, and I intend to work closely with Solutions Architects and team members, effectively communicating ideas and contributing positively to the team's goals. Ensuring code quality and robustness is paramount; thus, I commit to delivering clean code and implementing thorough testing procedures. Finally, my aim is to contribute to building scalable and efficient solutions, optimizing performance and scalability to meet the demands of a growing user base. Ultimately, my goal is to make meaningful contributions to Pacific Apps by delivering high-quality products, continuously learning and growing, innovating, collaborating effectively, and ensuring code quality and scalability.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Job Desciption and Requirements</Accordion.Header>
        <Accordion.Body>
          Description:
          <p>The Front End Engineer owns the desktop and mobile user interfaces of the iDialogue product. This person is an integral part of our product development team and will contribute to the design, building and testing of cross platform product solutions.</p>

          <p>Responsibilities</p> 
          <ul>
            <li>Collaborate with Solutions Architect and other team members in building and scaling a reliable and efficient web and mobile product in an Agile environment using sound UI/UX principles.</li>
            <li>Write clean code and be an innovator to find ways for product improvement.</li>
            <li>Deliver unit tests and automated tests to ensure code quality, correctness, robustness, and scalability.</li>
          </ul>
          <p>Qualifications</p>
          <p>BS degree in Computer Science or Engineering, or equivalent job experience. Experience with React, Redux, JavaScript, HTML, CSS, UI/UX, and mobile development on both iOS and Andriod platform. Ideal candidate is familiar with functional programming, Reactive, one-way data binding, Immutable state management, Stateless components and REST API I/O. You should also have experience with Scrum/Agile development methodologies and sound DevOps practice. Excellent collaborative, communication, interpersonal skills</p>
          Requirements:
          <ul>
            <li>BS degree in Computer Science or Engineering, or equivalent job experience</li>
            <li>Experience with React, Redux, JavaScript, HTML, CSS, UI/UX, and mobile development on both iOS and Andriod platform</li>
            <li>Ideal candidate is familiar with functional programming, Reactive, one-way data binding, Immutable state management, Stateless components and REST API I/O</li>
            <li>You should also have experience with Scrum/Agile development methodologies and sound DevOps practice</li>
            <li>Excellent collaborative, communication, interpersonal skills</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
  )
}

export default PacificAppsComponent