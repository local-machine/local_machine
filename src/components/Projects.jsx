import React from 'react';

function Projects() {
  return (
    <div>
      <h3>Projects</h3>
      <hr />
      <h6>What I've Been Up To</h6>
      <br />
      <ul>
        <li>
          <h6>C# | .NET Core | MySQL</h6>
          <a
            href="https://github.com/local-machine/AnimalShelter"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web API application that utilizes MySQL to document an animal
            shelter's dogs and cats with MySQL.
          </a>
        </li>
        <br />
        <li>
          <h6>JavaScript | API | jQuery</h6>
          <a
            href="https://github.com/local-machine/AnimalShelter"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web application to search for medical professionals in the area via
            the BetterDoctor API.
          </a>
        </li>
        <br />
        <li>
          <h6>C# | .NET Core | MySQL | User Authentication</h6>
          <a
            href="https://github.com/local-machine/doctorlookup"
            target="_blank"
            rel="noopener noreferrer"
          >
            MVC Web application to track Pierre's Bakery treats and flavors with
            a many-to-many database relationship via MySQL. Includes user
            authentication with Identity.
          </a>
        </li>
        <br />
      </ul>
      <h6>
        Discover more on my{' '}
        <a
          href="https://github.com/local-machine"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        !
      </h6>
    </div>
  );
}

export default Projects;
