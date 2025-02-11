# Student-Face-Recognition-Web-App

# EduTrackon Student Face Recognition Attendance System

This project is a **Student Face Recognition Attendance System** built using **EJS, CSS, JavaScript, Node.js, Express.js, MongoDB, and face-api.js**. It allows students to mark their attendance using facial recognition, track their attendance records through a student portal, and provides an **admin panel** for university admins and teachers to manage student records through CRUD operations.

---

## Features

- **Face Recognition Attendance:** Students can mark their attendance using facial recognition.
- **Student Portal:** Students can log in and track their attendance records.
- **Admin Panel:** University admins and teachers can manage student records (CRUD operations).
- **Secure Authentication:** JWT-based authentication with password hashing using `bcrypt`.
- **Session Management:** Secure cookies using `cookie-parser`.
- **Environment Variables:** Uses a `.env` file for configuration.
- **Database:** MongoDB is used to store student data and attendance records.

---

## Technologies Used

- **Frontend:** EJS (Embedded JavaScript), CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication & Security:** JWT, bcrypt, cookie-parser
- **Face Recognition:** face-api.js
- **File Handling:** fs module
- **Canvas Support:** canvas module

---

## Requirements

To successfully run this project after cloning the repository, ensure you have the following installed on your system:

- **Node.js** (v14 or later) – [Download Here](https://nodejs.org/)
- **MongoDB** (latest stable version) – [Download Here](https://www.mongodb.com/try/download/community)
- **Git** (latest version) – [Download Here](https://git-scm.com/downloads)
- **A modern web browser** (Chrome, Firefox, Edge, etc.)
- **PowerShell (For Windows users)** – Required if you face execution policy issues

Additionally, make sure MongoDB is running before starting the project.

---

## Installation & Setup

Follow these steps to set up and run the project on your local machine:

### 1. Clone the Repository
```sh
git clone https://github.com/sohailamjad39/Student-Face-Recognition-Web-App.git
cd Student-Face-Recognition-Web-App
```

### 2. Initialize Node.js
```sh
npm init -y
```

### 3. Install Dependencies
Install the required npm packages:
```sh
npm install express node jsonwebtoken bcrypt cookie-parser ejs mongoose nodemon dotenv face-api.js canvas fs
```
Additional dependencies may be required based on your implementation.

### 4. Set Up Environment Variables
Rename `.env.example` to `.env` and edit it with your MongoDB connection string and other necessary configurations:
```
PORT=your_port
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
```

### 5. Seed Initial Admin User
To create the initial admin user, run:
```sh
npx nodemon seed.js
```
If you encounter an error regarding script execution being disabled, run the following command in **PowerShell as Administrator**:
```sh
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
```
After running `seed.js`, go to:
```sh
http://localhost:<your_port>/seed
```
Then press `CTRL + C` to stop the server (After admin seeded successfully).

### 6. Start the Server
Run the main project:
```sh
npx nodemon main.js
```

### 7. Open in Browser
Visit:
```sh
http://localhost:<your_port>
```

---


## Admin Panel
- Admin can add, update, delete students.
- Initial admin can add more new admins.
- Admin can view, edit, and delete attendance records.
- Admin can manage user authentication.

## Student Portal
- Students can log in.
- Students can view their attendance and academic records records.

---

## Troubleshooting
- **Error: MongoDB connection failed?**
  - Check if MongoDB is running and the `MONGO_URI` is correct.
- **Error: `nodemon` command not found?**
  - Run `npm install -g nodemon` to install it globally.
- **Face recognition not working?**
  - Ensure `face-api.js` is installed correctly. (I've also included it locally in scripts folder)

---

## Contributing
Feel free to fork this repository and submit pull requests with improvements.

---

## License
This project is open-source and available under the [MIT License](LICENSE)

---

## Author
Developed by [Sohail Amjad](https://github.com/sohailamjad39)

