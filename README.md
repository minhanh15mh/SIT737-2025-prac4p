The aim of this task is to create and deploy a microservice offering basic calculator functionality to clients. Utilize Node.js and Express for developing the microservice. is to design and implement a microservice that provides a simple calculator functionality to clients. Here's a detailed breakdown of how it works:

## 1. Import and setup
Express is used to create the server and handle HTTP requests.

<img width="173" alt="Image" src="https://github.com/user-attachments/assets/e45efc84-d0b9-4871-bc51-931443cea861" />

## 2. Logging with winston
Winston is a logging library used to log information, warnings, and errors to both the console and files (error.log and combined.log).

If the app is not in production mode, additional console logging is added.

<img width="341" alt="Image" src="https://github.com/user-attachments/assets/dc4044d1-fb83-406a-9b33-b89d56a0f297" />

## 3. Math functions
Arithmetic functions for addition, subtraction, multiplication, and division.

<img width="220" alt="Image" src="https://github.com/user-attachments/assets/69a17ff7-173c-472a-80fb-126ed3985ca7" />

## 4. Validation function
This function ensures both input values are valid numbers using parseFloat.

Errors are logged using Winston if the input is invalid.

<img width="260" alt="Image" src="https://github.com/user-attachments/assets/d131a328-5e6e-44c2-b7ab-5a9a784fcf64" />

## 5. API endpoints
Each operation has a dedicated endpoint. Here's an example for addition:

<img width="334" alt="Image" src="https://github.com/user-attachments/assets/ae29b355-7ffe-4487-ac98-e4d59a71be27" />

Similar endpoints exist for subtract, multiply, and divide.

Errors are handled using try-catch, and the appropriate HTTP response status and messages are sent.
