# HumanChain-AI-Safety-Incident-Log-API

## Overview
This project is a RESTful API built for HumanChain’s backend intern assignment. It allows logging, retrieving, and managing AI safety incidents using a simple and clean design. Built with Node.js, Express, and MongoDB, the service supports full CRUD functionality, follows REST principles, and includes validation and error handling. It reflects core backend development skills, including routing, persistence, and API structure best practices.

🔗 **Live Demo:** [Humanchain-ai-safety-incident-log-api](https://humanchain-ai-safety-incident-log-api.onrender.com/)

## Technologies Used
- HTML
- CSS
- JAVASCRIPT
- Node JS
- Express JS
- MongoDB
- Git

## Prerequisites
- npm

## Running the Application
1. Clone the repository:  
   ```bash
   git clone https://github.com/manuraj23/HumanChain-AI-Safety-Incident-Log-API.git
   cd HumanChain-AI-Safety-Incident-Log-API
   ```
2. Build the project using Maven:  
   ```bash
   npm install core dotenv express mongodb mongoose morgan validator nodemon
   ```
3. Run the application:  
   ```bash
   npm start
   ```
4. The application will be accessible at [http://127.0.0.1:5500/frontend/index.html](http://127.0.0.1:5500/frontend/index.html).  

## API Endpoints
### User Endpoints
- `GET /incidents` - Retrieve all incidents.
- `GET /incidents:id` - Get incident by id.
- `PUT /incidents` - Update the incident by id.
- `DELETE /incidents` - Delete the incident by id.
- `POST /incidents` - Create a new post




## Code Quality Analysis with SonarQube
We used Mongoose, an Object-Document Mapper (ODM) for MongoDB, to simplify database interactions. It allows us to define schemas and models, enabling cleaner, structured, and more maintainable code. By abstracting raw queries, Mongoose improves code readability and ensures better consistency in data handling throughout the application.

## Contributing
1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push to your fork and submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
For queries, reach out to[Manu Raj](mailto:manuraj082004@gmail.com).
