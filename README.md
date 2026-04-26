\# Leave Management System - Backend



\## Overview

A comprehensive Leave Management System built with Node.js, Express, and MongoDB. Features JWT authentication with 2FA, leave requests, approvals, and reporting capabilities.



\## Features

\- âœ… User authentication (Employee \& Admin)

\- âœ… Two-Factor Authentication (2FA) using TOTP

\- âœ… Leave request management with multiple types (Sick, Casual, Medical, Earned, Personal)

\- âœ… Overlapping leave prevention

\- âœ… Leave balance tracking

\- âœ… Email notifications

\- âœ… Holiday management

\- âœ… Excel \& PDF export functionality

\- âœ… Leave approval workflow

\- âœ… Audit logging

\- âœ… Mobile responsive API



\## Tech Stack

\- \*\*Runtime\*\*: Node.js

\- \*\*Framework\*\*: Express.js

\- \*\*Database\*\*: MongoDB

\- \*\*Authentication\*\*: JWT + 2FA (TOTP)

\- \*\*Email\*\*: Nodemailer

\- \*\*Export\*\*: ExcelJS, PDFKit



\## Installation



\### Prerequisites

\- Node.js (v14+)

\- MongoDB (Local or Atlas)

\- npm or yarn



\### Steps



1\. \*\*Clone the repository\*\*

```bash

git clone https://github.com/somyaxoxo58-ux/Leave-Management-System-.git

cd Leave-Management-System-

Install dependencies

bash

npm install

Create .env file

bash

cp .env.example .env

Configure environment variables

Code

NODE\_ENV=development

PORT=5000

MONGODB\_URI=mongodb://localhost:27017/leave-management

JWT\_SECRET=your\_jwt\_secret\_key

JWT\_REFRESH\_SECRET=your\_jwt\_refresh\_secret

JWT\_EXPIRE=7d

SESSION\_SECRET=your\_session\_secret



\# Email Configuration

EMAIL\_SERVICE=gmail

EMAIL\_USER=your\_email@gmail.com

EMAIL\_PASSWORD=your\_app\_password



\# Frontend URL

FRONTEND\_URL=http://localhost:3000

Start the server

Development:



bash

npm run dev

Production:



bash

npm start

The server will run on http://localhost:5000



API Endpoints

Authentication

POST /api/auth/register - Register new user

POST /api/auth/login - Login user

POST /api/auth/verify-2fa - Verify 2FA code

POST /api/auth/setup-2fa - Setup 2FA

POST /api/auth/confirm-2fa - Confirm 2FA setup

POST /api/auth/disable-2fa - Disable 2FA

POST /api/auth/refresh-token - Refresh JWT token

Leaves

POST /api/leaves/apply - Apply for leave

GET /api/leaves/my-leaves - Get my leave requests

GET /api/leaves/all - Get all leaves (Admin)

PUT /api/leaves/:id/approve - Approve leave (Admin)

PUT /api/leaves/:id/reject - Reject leave (Admin)

PUT /api/leaves/:id/cancel - Cancel leave request

GET /api/leaves/balance - Get leave balance

Employees

GET /api/employees/all - Get all employees (Admin)

GET /api/employees/:id - Get employee details

PUT /api/employees/:id - Update employee profile

GET /api/employees/:id/leave-history - Get employee leave history

GET /api/employees/export/excel - Export report to Excel (Admin)

GET /api/employees/export/pdf - Export report to PDF (Admin)

GET /api/employees/:id/leave-statement - Get employee leave statement

GET /api/employees/stats/dashboard - Get dashboard statistics (Admin)

Holidays

GET /api/holidays - Get all holidays

GET /api/holidays/by-year/:year - Get holidays by year

POST /api/holidays - Add holiday (Admin)

PUT /api/holidays/:id - Update holiday (Admin)

DELETE /api/holidays/:id - Delete holiday (Admin)

POST /api/holidays/init/defaults - Initialize default Indian holidays (Admin)

2FA Setup Guide

Enable 2FA

Call POST /api/auth/setup-2fa to get QR code and backup codes

Scan QR code with authenticator app (Google Authenticator, Authy, etc.)

Call POST /api/auth/confirm-2fa with OTP from app to enable

Login with 2FA

Login with email and password

System returns 2FA requirement

Enter OTP from authenticator app

Call POST /api/auth/verify-2fa to complete login

Working Days Calculation

The system automatically calculates working days by:



Excluding Sundays (full day off)

Half-day on Saturdays (0.5 days)

Excluding Indian national holidays

Supporting custom state holidays

Leave Types \& Balance

Default leave balance per employee:



Sick Leave: 6 days

Casual Leave: 8 days

Medical Leave: 15 days

Earned Leave: 0 days (accumulated based on service)

Personal Leave: 2 days

Database Schemas

User Schema

firstName, lastName, email, password

employeeId, department, role

leaveBalance (all types), joiningDate

twoFactorEnabled, twoFactorSecret

profileImage, phoneVerified, emailVerified

Leave Schema

employee (ref), leaveType, startDate, endDate

duration, reason, status

approvedBy, approvalDate, approvalComments

isHalfDay, documents, notificationSent

Holiday Schema

name, date, type, description, year

AuditLog Schema

user (ref), action, entityType, entityId, details

ipAddress, userAgent

Security Features

Password Hashing - bcryptjs with salt rounds

JWT Authentication - Stateless authentication

2FA (TOTP) - Time-based one-time password

Backup Codes - Alternative 2FA verification

Role-Based Access Control - Employee vs Admin

Audit Logging - Track all important actions

Input Validation - Sanitize all inputs

CORS - Cross-origin resource sharing

Email Templates

Leave Approval

Employee name and details

Leave duration and dates

Leave type and reason

Approval confirmation

Leave Rejection

Rejection reason

Option to reapply

New Leave Request (Admin Notification)

Employee details

Leave details

Request to approve/reject

2FA Code

Verification code

Expiration time

Security reminder

Troubleshooting

MongoDB Connection Error

Ensure MongoDB is running

Check MONGODB\_URI in .env

Verify network access (if using MongoDB Atlas)

Email Not Sending

Check email credentials in .env

Enable "Less Secure App Access" (Gmail)

Use app-specific password (Gmail with 2FA)

Check SMTP server configuration

2FA Issues

Ensure system time is synced (TOTP relies on time)

Try backup codes if OTP fails

Regenerate 2FA secret if needed

Contributing

Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

License

This project is licensed under the MIT License - see the LICENSE file for details.



Support

For issues and questions, please create an issue in the GitHub repository.



Code
