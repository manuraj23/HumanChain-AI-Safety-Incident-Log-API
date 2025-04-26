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

## Features:
- pagination
- error handling
- searching based on id
- scropt to add local json data tp MongoDB database.

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
3. Create a file .env in rood directory and set mongo_uri and port number.
   
4. Run the application:  
   ```bash
   npm start
   ```

5. The application will be accessible at [http://localhost:3001/](http://localhost:3001/) if you want to setup and use it on loacl system.  

## Snapshots:

### website

![image](https://github.com/user-attachments/assets/d452dc46-72f8-429d-8428-d8395626361b)

![image](https://github.com/user-attachments/assets/d21b9b2c-245a-497e-bba0-cac7f2123791)

![image](https://github.com/user-attachments/assets/b158aa56-bef5-4935-ac28-c3e7b06b60fb)

### database

![image](https://github.com/user-attachments/assets/2596f7e0-b447-475f-a4b4-6fb4ca119dfd)

### Postman

![image](https://github.com/user-attachments/assets/abea1ec7-9ab7-4b56-a8cd-caf007aadf6d)

![image](https://github.com/user-attachments/assets/a776c01a-1517-4d21-a72b-bcaff0384c25)

### Script to add json data to database

![image](https://github.com/user-attachments/assets/eb73ac6d-1dba-403a-a205-70dcde9c7bd3)



## API Endpoints
### User Endpoints
- `GET /incidents` - Retrieve all incidents.
- `GET /incidents:id` - Get incident by id.
- `PUT /incidents` - Update the incident by id.
- `DELETE /incidents` - Delete the incident by id.
- `POST /incidents` - Create a new post


## Code Quality Analysis
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
