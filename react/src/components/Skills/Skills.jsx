import "./skills.css"
function Skills() {
    return (
        <section id="section2-skills" className="section">
            <h2>Technical Skills</h2>
            <div className="skills-list-container">
                <ul className="skills-list">
                    <li className="skills-list-item"><strong>AI:</strong>
                        <p>
                            Microsoft Agent Framework,  LLM integration,  retrieval (RAG),  Automation,  Tool calling.
                        </p>
                    </li>
                    <li className="skills-list-item"  ><strong>Backend & Application Development:</strong>
                        <p >C#,  .NET Core,  ASP.NET MVC,  Java,  Python,  WCF,  LINQ,  Entity Framework Core,  RESTful API development,
                            WCF, WPF, WebSockets</p>
                    </li>
                    <li className={"skills-list-item"}><strong>Database:</strong>
                        <p>MS SQL Server,  SQLite,  PostgreSQL,  Redis,  MongoDB.</p>
                    </li>
                    <li className="skills-list-item"><strong>Frontend & Web Interfaces:</strong>
                        <p> React,  JavaScript,  HTML,  CSS,  Blazor,  Razor Bootstrap,  Tailwind CSS </p>
                    </li >

                    <li className="skills-list-item"><strong>Testing & Quality Assurance:</strong> 
                        <p>xUnit,  Selenium</p>
                    </li>
                    <li className="skills-list-item"><strong>DevOps & Cloud Platforms:</strong>
                        <p>
                            Docker,  AWS,  Azure,  CI/CD pipelines,  GitHub Actions,  Jenkins,  Bash
                        </p>
                    </li>
                    <li className="skills-list-item"><strong>Development Tools:</strong> 
                       <p>
                           Git,  GitHub,  Postman
                       </p>   
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Skills;
