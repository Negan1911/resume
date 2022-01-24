import React from 'react'
import Company from './Company'
import { Title, Card } from '../UI'

const WorkExperience = () => <Card>
  <Title>I worked in these amazing places</Title>
  <Company href="https://securityscorecard.com/" date_from="Nov 2021" date_to="Today :)" title="Staff Full Stack Engineer" img="ssc.jpg" company="SecurityScorecard" />
  <Company href="https://rocketinsights.com/" date_from="Jun 2019" date_to="Oct 2021" title="Principal Software Engineer" img="rocket.png" company="Rocket Insights" />
  <Company href="https://shiphero.com/" date_from="Oct 2017" date_to="Aug 2019" title="Lead Software Architect" img="sh.png" company="ShipHero LLC">
    Work on projects like Endeavour, Workstation, Marketplace and SSO.
    Develop and maintain the infrastructure and research for technologies that can improve the product quality.
  </Company>
  <Company href="https://www.lateralview.co/" date_from="Apr 2016" date_to="Oct 2017" title="Javascript Technical Leader" img="lv.jpg" company="Lateral View LLC">
    Lead projects that involves the Javascript language, research and teach my coworkers about new technologies and tooling that simplify our work.
    Also develop as Full Stack Developer in various projects, using MERN Stack or Serverless.
  </Company>
  <Company href="https://jellyfishhealth.com/" date_from="Apr 2016" date_to="Apr 2017" title="Frontend Architect" img="jfhealth.jpeg" company="Jellyfish Health">
    Worked as a Frontend Architect for a Health Platform with several products, including Jellyfish Bloom, Jellyfish Access and Jellyfish Connect.
    My Role was not only develop and estimate the new features involved in the project but also do Reviews of the incoming Pull requests and take technical decisions that will impact directly on the products.
  </Company>
  <Company href="https://www.globant.com/" date_from="Sept 2015" date_to="Apr 2016" title="Web Developer" img="globant.png" company="Globant">
    Work on Various projects on Globant, for the Deloitte Account as Web Developer, involving the development of the frontend side of the projects.
  </Company>
</Card>

export default WorkExperience