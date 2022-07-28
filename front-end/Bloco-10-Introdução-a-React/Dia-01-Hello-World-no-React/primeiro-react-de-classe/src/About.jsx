import { Component } from 'react';

class About extends Component {
  render () {
    const nome = "Rafael";
    const describe = "Advogado e estudante de web desenvolvimento!"
    const skills = ["HTML","CSS","JS","Testes Unitários","React"]
    const liSkills = skills.map((skill) => <li>{skill}</li>)
    return (
      <div>
        <h1>
          { nome }
        </h1>
        <p>
         { describe }
        </p>
        <h2>Habilidades:</h2>
        <ul>{ liSkills }</ul>
      </div>
    );
  }
}

export default About;