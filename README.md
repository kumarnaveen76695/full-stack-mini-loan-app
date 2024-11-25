# Full Stack Mini Loan App

# Live Demo:
Access the deployed application here: https://full-stack-mini-loan-app.vercel.app/

# Repository:
GitHub Repository: https://github.com/kumarnaveen76695/full-stack-mini-loan-app.git

Project Overview
The Mini Loan App is a full-stack application that allows customers to apply for loans and make repayments, while administrators can approve loans and manage the system. The app has the following key functionalities:

User Authentication: Secure login and registration for customers and administrators.
Loan Management:
Customers can create loan requests.
Admins can approve loans.
Repayment Management:
Customers can view their loans and scheduled repayments.
Customers can make repayments and track the status of their loans.
State Management:
Loans and repayments transition between PENDING, APPROVED, and PAID states.

Features:

Customer Features:

Register/Login: Secure registration and login using JWT authentication.
Loan Requests: Submit loan requests with the amount and term.
View Loans: View loans belonging to the logged-in user.
Repayments: Add repayments and track the status of repayments.

Admin Features:

Approve Loans: Approve pending loans requested by customers.
Manage Loans: Update loan statuses and manage customer repayments.

Technology Stack:

Frontend: HTML5, CSS, JavaScript (Minimal UI)
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT and bcrypt for secure user authentication

To satrt this project:
npm start

To install packages are all for the :
npm install

API Endpoints:

Authentication

POST /api/auth/register: Register a new user (customer/admin).
POST /api/auth/login: Authenticate a user and return a JWT token.
Loan Management:
POST /api/loans: Create a new loan request.
GET /api/loans: Fetch loans (policy-based to fetch customer-specific loans).
PUT /api/loans/:loanId/approve: Approve a pending loan (admin only).
Repayment Management:
POST /api/repayments: Add a repayment for a loan.
GET /api/repayments: Fetch repayment details for a customer’s loan.
Usage Instructions
For Customers:

Register: Use the registration form to create a customer account.
Login: Log in with your email and password.
Apply for a Loan: Submit a loan request by entering the loan amount and term.
View Loans: Check your loan details, including status and repayment schedule.
Make Repayments: Add repayments for approved loans.
For Admins:

Login: Use your admin account to log in.
Approve Loans: Approve pending loan requests from customers.
Manage Loans: Update repayment and loan statuses as required.

