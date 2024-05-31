import request from "supertest";
import app from "../src/app";
import fs from "fs";

const jobDescription = `Role & Responsibilities:
    ·       Translate business requirements into working customer focused solutions.
    ·       Play an active role in a multi-disciplinary SCRUM team, developing working software.
    ·       Actively support the Scrum ceremonies (daily stand ups, retrospectives, backlog review, show and tell).
    ·       Providing technical support and advice to the business users as required.
    ·       Take ownership of assigned features of work , investigations, and unit testing.
    ·       Work to agreed coding standards and quality.
    ·       Develop/Configure plug-ins, workflows, SSIS packages and SSRS reports as required.
    ·       Support the continuous improvement doctrine of the scrum team; share technical knowledge, peer review development work as required, identify opportunities for quick wins.
    ·       Deploy releases to Test and production environments as required.
    ·       Develop and maintain solutions that comply with the bank’s security standards.
    ·       Proactively identify opportunities to simplify and improve the current process and implementation, to reduce complexity, cost, and development time.
    ·       Investigate and resolve incidents and service requests as required.
    ·       Maintain clear and up to date documentation in agreed repository.
    ·       Manage Microsoft Dynamics release cadence to minimize business impact.
    ·       Coordinate with other technology teams to schedule sprint deployments and integration testing.
    ·       Evaluate existing and proposed design against UX best practice and engage with key stakeholders to map best user experience.
    ·       Being part of the out of hours support for the CRM system, based on the current Rota system.
    Mandatory Skills:
    ·       Experienced Microsoft Dynamics CRM domain expertise with exceptional development skills and a strong understanding of how D365 integration works.
    ·       End to end development experience from ideation, analysis, and design
    ·       Clear knowledge of Microsoft stack such as .NET, JavaScript, ASP.NET, MVC, C# .Net for Plugins and custom workflows
    ·       Experience with Dynamics 365 online and Microsoft Power Platform
    ·       Experience with CRM customization, Plugins, Custom workflow activity, REST APIs, JavaScript, C#
    ·       Experience with power automate and power apps.
    ·       Experience with DevOps technology (GIT, Azure DevOps, CI/CD)
    ·       Strong communication and stakeholder management skills; able to explain concepts to a non-technical audience.
    Desirable Skills:
    ·       Knowledge with Azure Integration services (Service bus, logic App,
    Function App), Azure SQL Server
    Interdisciplinary Skills:
    ·       Self-motivated with a creative and positive “can do” attitude.
    ·       Good problem solver, able to work across multiple simultaneous workstreams to deliver value for our business.
    ·       Passionate about user-focused design and development.
    ·       Proactive self-development ethos, keeping up to date on latest developments in the D365 product space.
    ·       Experience of working in truly agile teams with a good understanding of SCRUM.
    ·       Exceptional professionalism and self-organization.
    ·       Strong ability to plan, schedule and manage a demanding workload.
    ·       Excellent team player with a collaborative attitude.`;

describe("POST /api/upload", () => {
  it("should return a detailed analysis response for Resume in Docx file", async () => {
    try {
      const response = await request(app)
        .post("/api/upload")
        .field("jobDescription", jobDescription)
        .attach(
          "resume",
          fs.readFileSync("tests/Sample-Resume.docx"),
          "Sample-Resume.docx"
        );
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("fileName");
      expect(response.body).toHaveProperty("analysisResponse");
      expect(response.body).toHaveProperty("score");
      expect(response.body).toHaveProperty("suitability");
      console.log("---------WITHIN TESTING DOCX------------------");
      console.log("---------------------------");
      console.log(response.body);
      console.log("---------------------------");
    } catch (error) {
      console.log(error);
    }
  });

  it("should return a detailed analysis response for Resume in PDF file", async () => {
    try {
      const response = await request(app)
        .post("/api/upload")
        .field("jobDescription", jobDescription)
        .attach(
          "resume",
          fs.readFileSync("tests/Sample-Resume.pdf"),
          "Sample-Resume.pdf"
        );
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("fileName");
      expect(response.body).toHaveProperty("analysisResponse");
      expect(response.body).toHaveProperty("score");
      expect(response.body).toHaveProperty("suitability");
      console.log("---------WITHIN TESTING PDF------------------");
      console.log("---------------------------");
      console.log(response.body);
      console.log("---------------------------");
    } catch (error) {
      console.log(error);
    }
  });
});
