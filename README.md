# 📚 Course Selling Website

## **Description**
A full-stack course-selling app inspired by real-world platforms like Udemy. This app allows **Admins** to manage courses and **Users** to browse and purchase courses. All data is stored persistently using MongoDB.

⚠️ **Note:** Authentication is implemented with username and password sent in headers (no JWT or sign-in route). Advanced authentication will be implemented in future versions.

---

## **Features**
### **Admin Functionality**
- **Sign Up**: Create an admin account.
- **Create Courses**: Add new courses with title, description, price, and image.
- **View Courses**: Retrieve a list of all courses.

### **User Functionality**
- **Sign Up**: Register as a new user.
- **Browse Courses**: View all available courses.
- **Purchase Courses**: Buy courses by specifying the course ID.
- **Purchased Courses**: View all purchased courses.

---

## **API Endpoints**
### **Admin Routes**
1. **POST `/admin/signup`**
   - **Description**: Create a new admin account.
   - **Request Body**:  
     ```json
     { "username": "admin", "password": "pass" }
     ```
   - **Response**:  
     ```json
     { "message": "Admin created successfully" }
     ```

2. **POST `/admin/courses`**
   - **Description**: Add a new course.
   - **Request Headers**:  
     ```json
     { "username": "admin", "password": "pass" }
     ```
   - **Request Body**:  
     ```json
     { 
       "title": "course title", 
       "description": "course description", 
       "price": 100, 
       "imageLink": "https://linktoimage.com" 
     }
     ```
   - **Response**:  
     ```json
     { "message": "Course created successfully", "courseId": "new course id" }
     ```

3. **GET `/admin/courses`**
   - **Description**: Retrieve all courses.
   - **Request Headers**:  
     ```json
     { "username": "admin", "password": "pass" }
     ```
   - **Response**:  
     ```json
     { 
       "courses": [
         { 
           "id": 1, 
           "title": "course title", 
           "description": "course description", 
           "price": 100, 
           "imageLink": "https://linktoimage.com", 
           "published": true 
         }
       ] 
     }
     ```

### **User Routes**
1. **POST `/users/signup`**
   - **Description**: Create a new user account.
   - **Request Body**:  
     ```json
     { "username": "user", "password": "pass" }
     ```
   - **Response**:  
     ```json
     { "message": "User created successfully" }
     ```

2. **GET `/users/courses`**
   - **Description**: View all available courses.
   - **Request Headers**:  
     ```json
     { "username": "user", "password": "pass" }
     ```
   - **Response**:  
     ```json
     { 
       "courses": [
         { 
           "id": 1, 
           "title": "course title", 
           "description": "course description", 
           "price": 100, 
           "imageLink": "https://linktoimage.com", 
           "published": true 
         }
       ] 
     }
     ```

3. **POST `/users/courses/:courseId`**
   - **Description**: Purchase a course.
   - **Request Headers**:  
     ```json
     { "username": "user", "password": "pass" }
     ```
   - **Response**:  
     ```json
     { "message": "Course purchased successfully" }
     ```

4. **GET `/users/purchasedCourses`**
   - **Description**: View all purchased courses.
   - **Request Headers**:  
     ```json
     { "username": "user", "password": "pass" }
     ```
   - **Response**:  
     ```json
     { 
       "purchasedCourses": [
         { 
           "id": 1, 
           "title": "course title", 
           "description": "course description", 
           "price": 100, 
           "imageLink": "https://linktoimage.com", 
           "published": true 
         }
       ] 
     }
     ```

---

## **Tech Stack**
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

---

## **How to Run the Project**
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd course-selling-app
