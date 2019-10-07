import React from 'react'
import Certificate from './Certificate'
import { Title, Card } from '../UI'

const WorkExperience = () => <Card>
  <Title>Some things I learned along the road.</Title>
  <Certificate title="Neo4j Administration" img="neo4j.png" href="https://graphacademy.neo4j.com/training/certificates/bf9982876866f65cb2de6bdd184fabe726dd9ffcd88aad557a623415f52f7c1e.pdf" company="Neo4j" />
  <Certificate title="Introduction to Neo4j" img="neo4j.png" href="https://graphacademy.neo4j.com/training/certificates/471f76ee38df3e40ee3cb978f8d9f02b00a94cb34fa0723bc49693d9f053898c.pdf" company="Neo4j" />
  <Certificate title="AWS Certified Solutions Architect - Associate 2017" img="udemy.jpg" href="https://www.udemy.com/certificate/UC-K7ANZWAI/" company="Udemy" />
  <Certificate title="AWS Certified Developer - Associate 2017" img="udemy.jpg" href="https://www.udemy.com/certificate/UC-LMBJSDFC/" company="Udemy" />
  <Certificate title="M201: MongoDB Performance" img="mongodb.png" href="http://university.mongodb.com/course_completion/ca1a6a50-c9d6-45d1-ada3-d69ba327" company="MongoDB" />
  <Certificate title="M101JS: MongoDB for Node.js Developers" img="mongodb.png" href="https://university.mongodb.com/course_completion/d38e4a7c-8b1e-4f17-948e-945eca2c" company="MongoDB" />
</Card>

export default WorkExperience