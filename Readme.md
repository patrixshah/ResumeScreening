## Resume Screening: An AI Driven User Profile Screening Tool.

## About

Resume Screening is an efficient recruitment assistant powered by OpenAI's GPT-3.5. The tool allows recruiters to upload resumes(in file format Doc/Docx/PDF) along with a job description. As a result, the tool will provide an evaluation of passed resume against the provided job description and give insights into the suitability of the candidate for the role.

## Features

- Upload of resumes in Doc/Docx/PDF format only.
- Provide a job description to compare the resumes against.
- Analysis of resumes using OpenAI GPT-3.5 to generate Matching score & Suitability remarks.
- Response of the Tool with columns uploaded resume file name, analysis response, score, and suitability.

## Requirements

- Node
- Express
- Multer
- OpenAI
- Pdf-parser
- Mammoth
- TypeScript

## Setup

1. Clone the repository.

   ```
   git clone https://github.com/patrixshah/ResumeScreening.git
   ```

2. Change directory to the cloned repository.

   ```
   cd ResumeScreening
   ```

3. Code structure of Project

   ```lua
    /ResumeScreening
    |-- /src
    |   |-- /routes
    |   |   |-- resumeRoutes.ts
    |   |-- /interfaces
    |   |   |-- analysisResult.ts
    |   |-- server.ts
    |   |-- app.ts
    |   |-- analyzeResume.ts
    |-- /tests
    |   |-- resumeRoutes.test.ts
    |   |-- Sample-Resume.docx
    |-- .env-sample
    |-- .eslintrc.js
    |-- .prettierc
    |-- package.json
    |-- tsconfig.json
    |-- jest.config.js
    |-- /uploads
   ```

4. Install development dependencies.

   ```
   npm install typescript supertest jest ts-jest eslint eslint-config-prettier eslint-plugin-prettier @types/node @types/express @types/multer @types/pdf-parse @types/supertest @types/jest @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
   ```

   ```
   npm install --save-dev ts-node
   ```

5. Install the required packages.

   ```
   npm update
   ```

6. Update the OpenAI API key in the openai.api_key = "OPEN AI KEY" line with your own key.
7. Run the application.

   ```
   npm run dev
   ```

8. Build the application source code.

   ```
   npm run build
   ```

9. Perform testing of application.
   Make sure that application is running and then you can perform automated test using following statement.

   ```
   npm run test
   ```

10. To perform API testing using Postman
    ![Postman Testing](https://github.com/patrixshah/ResumeScreening/blob/main/tests/Postman-Testing.png?raw=true)

## Usage

1. Access the tool by visiting http://localhost:5000 in your browser.
2. Upload the desired resumes.
3. Provide a detailed job description.
4. Click on "Submit" to get the analysis.

## Limitations

1. As the tool uses the OpenAI API, you will need a valid API key which might have associated costs.
2. The current version supports resumes in Doc/Docx/PDF format only.

## Contributing

Feel free to submit pull requests, raise issues, or give feedback. Your contributions are welcome!

## If you find this tool useful, please give us a ⭐! Starring the repository supports the project and encourages further development.

## License

This project is open source and available under the MIT License.
