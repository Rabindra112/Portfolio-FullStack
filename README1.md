# Rabindra Kumar Mahato — Full-Stack Developer Portfolio

A modern developer portfolio built with **React + TypeScript** on the frontend and **Java 17 + Spring Boot** on the backend.

The application is designed to showcase projects, technical skills, professional experience, and provide a contact form. It also includes an admin area for managing portfolio projects.

---

## 📌 Project Overview

This portfolio follows a full-stack architecture:

```text
┌──────────────────────────────────────────────┐
│                 FRONTEND                     │
│        React + TypeScript + Tailwind         │
│                                              │
│  Home • Skills • Projects • Experience      │
│  Contact • Project Details • Admin Login    │
└──────────────────────┬───────────────────────┘
                       │
                    Axios
                       │
                       ▼
┌──────────────────────────────────────────────┐
│                  BACKEND                     │
│            Java 17 + Spring Boot             │
│                                              │
│ REST APIs • JWT • Spring Security            │
│ Validation • JPA • Hibernate                 │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│                   MYSQL                      │
│                                              │
│ users • projects • contact_messages          │
└──────────────────────────────────────────────┘
```

---

# 🛠️ Technology Stack

## Frontend

- React
- TypeScript
- Tailwind CSS
- React Router
- Axios
- Lucide React
- Vite

## Backend

- Java 17
- Spring Boot
- Spring Web
- Spring Security
- JWT
- Spring Data JPA
- Hibernate
- MySQL
- Bean Validation
- Lombok
- Maven

---

# 📂 Project Structure

```text
rabindra-fullstack-portfolio/
│
├── frontend/
│   ├── public/
│   │   ├── profile.jpg
│   │   └── resume.pdf
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── SectionHeading.tsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── ProjectDetails.tsx
│   │   │   ├── Login.tsx
│   │   │   └── AdminDashboard.tsx
│   │   │
│   │   ├── services/
│   │   │   ├── api.ts
│   │   │   └── projectService.ts
│   │   │
│   │   ├── types/
│   │   │   └── Project.ts
│   │   │
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
└── backend/
    ├── src/
    │   └── main/
    │       ├── java/
    │       │   └── com/rabindra/portfolio/
    │       │       ├── config/
    │       │       ├── controller/
    │       │       ├── dto/
    │       │       ├── entity/
    │       │       ├── exception/
    │       │       ├── repository/
    │       │       ├── security/
    │       │       ├── service/
    │       │       └── PortfolioApplication.java
    │       │
    │       └── resources/
    │           └── application.properties
    │
    └── pom.xml
```

---

# ✅ Prerequisites

Install the following before running the project.

### 1. Java 17

Check:

```powershell
java -version
```

Expected:

```text
java version "17..."
```

### 2. Maven

Check:

```powershell
mvn -version
```

Maven should show Java 17.

### 3. Node.js and npm

Check:

```powershell
node -v
npm -v
```

### 4. MySQL

Make sure the MySQL server is installed and running.

You can verify the MySQL client with:

```powershell
mysql --version
```

---

# 🗄️ Step 1 — Create the MySQL Database

Open MySQL.

Run:

```sql
CREATE DATABASE rabindra_portfolio;
```

Verify:

```sql
SHOW DATABASES;
```

You should see:

```text
rabindra_portfolio
```

You do **not** need to manually create the tables.

Hibernate will create/update them when Spring Boot starts.

---

# ⚙️ Step 2 — Configure the Backend

Open:

```text
backend/src/main/resources/application.properties
```

The local configuration is:

```properties
spring.application.name=rabindra-portfolio
server.port=8080

spring.datasource.url=${DB_URL:jdbc:mysql://localhost:3306/rabindra_portfolio}
spring.datasource.username=${DB_USERNAME:root}
spring.datasource.password=${DB_PASSWORD:root}
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=false
spring.jpa.properties.hibernate.format_sql=true

jwt.secret=${JWT_SECRET:change-this-development-secret-key-to-at-least-32-characters}
jwt.expiration=${JWT_EXPIRATION:86400000}
```

## Change MySQL credentials

If your MySQL username/password is different, change the values.

Example:

```properties
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD
```

Do not commit real production passwords to GitHub.

---

# 🔐 Step 3 — JWT Configuration

For local development, the existing JWT configuration can be used.

Before deploying publicly, replace the development secret with a strong secret.

Example:

```properties
jwt.secret=YOUR_LONG_RANDOM_SECRET
```

Recommended:

- Use a long random value.
- Keep the secret outside the source code in production.
- Never publish your JWT secret on GitHub.

---

# ▶️ Step 4 — Start the Backend

Open PowerShell.

Navigate to the backend directory:

```powershell
cd "C:\Users\III S I\Desktop\Portfilio\rabindra-fullstack-portfolio\rabindra-fullstack-portfolio\backend"
```

Clean previous build files:

```powershell
mvn clean
```

Build the application:

```powershell
mvn clean package -DskipTests
```

Start Spring Boot:

```powershell
mvn spring-boot:run
```

A successful startup should contain:

```text
Started PortfolioApplication
```

The backend runs at:

```text
http://localhost:8080
```

---

# 🧪 Step 5 — Test the Backend

Open:

```text
http://localhost:8080/api/projects
```

You should receive project data in JSON format.

Example:

```json
[
  {
    "id": 1,
    "title": "Example Project",
    "description": "Project description",
    "category": "Full Stack"
  }
]
```

If this endpoint works, the backend and database connection are working.

---

# 🎨 Step 6 — Configure the Frontend

Open:

```text
frontend/src/services/api.ts
```

The local backend URL should be:

```typescript
const api = axios.create({
  baseURL: "http://localhost:8080/api",
});
```

This means the frontend communicates with Spring Boot through:

```text
React
  ↓
Axios
  ↓
http://localhost:8080/api
```

---

# 📦 Step 7 — Install Frontend Dependencies

Open a **new PowerShell window**.

Navigate to the frontend:

```powershell
cd "C:\Users\III S I\Desktop\Portfilio\rabindra-fullstack-portfolio\rabindra-fullstack-portfolio\frontend"
```

Install dependencies:

```powershell
npm install
```

Start the frontend:

```powershell
npm run dev
```

Vite should display something similar to:

```text
Local: http://localhost:5173/
```

Open:

```text
http://localhost:5173
```

---

# 🖼️ Step 8 — Add Your Profile Photo

Put your actual photo here:

```text
frontend/public/profile.jpg
```

The homepage automatically uses:

```text
/profile.jpg
```

Recommended:

- Use a professional headshot.
- Use JPG or PNG.
- Prefer a clear, high-resolution image.
- Keep the file size reasonable.

If you use PNG, update the image reference in `Home.tsx` accordingly.

---

# 📄 Step 9 — Add Your Resume

Put your resume here:

```text
frontend/public/resume.pdf
```

The Resume button will download:

```text
/resume.pdf
```

Make sure the filename is exactly:

```text
resume.pdf
```

---

# 🔗 Step 10 — Update Your Social Links

Open:

```text
frontend/src/components/Navbar.tsx
```

Replace the placeholder GitHub URL:

```text
https://github.com/
```

with your actual GitHub profile.

Replace the placeholder LinkedIn URL:

```text
https://linkedin.com/
```

with your actual LinkedIn profile.

---

# 📧 Step 11 — Update Contact Information

Open:

```text
frontend/src/pages/Home.tsx
```

Update your:

- Email
- Location
- Any other personal contact information

Do not publish sensitive personal information.

---

# 🚀 Step 12 — Add Your Real Projects

Projects are stored in MySQL.

For the initial data, open:

```text
backend/src/main/java/com/rabindra/portfolio/config/DataInitializer.java
```

Replace the sample projects with your real projects.

Each project can contain:

```text
Title
Category
Description
Technologies
GitHub URL
Live Demo URL
Image URL
Featured
```

For example:

```java
Project.builder()
    .title("Homes.com Real Estate Platform")
    .category("Real Estate")
    .description(
        "Scalable real estate platform for property owners, " +
        "buyers, sellers and tenants."
    )
    .technologies(
        "Java, Spring Boot, Spring Security, JWT, MySQL, " +
        "MongoDB, Kafka, React, AWS"
    )
    .githubUrl("YOUR_GITHUB_URL")
    .liveUrl("YOUR_LIVE_URL")
    .featured(true)
    .build()
```

---

# ⚠️ Important About DataInitializer

The initializer checks whether projects already exist.

If you have already started the backend once, changing `DataInitializer.java` does not automatically replace existing database records.

During development, you can remove the existing project records:

```sql
USE rabindra_portfolio;

DELETE FROM projects;
```

Then restart Spring Boot.

The initializer will insert the updated project records.

**Do not run this command on production data.**

---

# 👨‍💻 Step 13 — Admin Login

The application includes an admin login for project management.

Open:

```text
http://localhost:5173/admin/login
```

Development credentials:

```text
Username: admin
Password: admin123
```

The login returns a JWT token.

The frontend stores the token and sends it with protected API requests:

```text
Authorization: Bearer <JWT_TOKEN>
```

---

# 🔒 Step 14 — Admin Project Management

After login:

```text
http://localhost:5173/admin
```

The admin dashboard can manage projects.

Protected operations include:

```text
POST   /api/projects
PUT    /api/projects/{id}
DELETE /api/projects/{id}
```

Public operations include:

```text
GET /api/projects
GET /api/projects/{id}
GET /api/projects/featured
```

---

# 📩 Step 15 — Contact Form

The contact form sends:

```text
POST /api/contact
```

The request is stored in:

```text
contact_messages
```

MySQL table.

The basic flow is:

```text
Contact Form
     ↓
React
     ↓
Axios
     ↓
POST /api/contact
     ↓
Spring Boot
     ↓
ContactService
     ↓
ContactRepository
     ↓
MySQL
```

---

# 🔐 Step 16 — Authentication Flow

Admin authentication works like this:

```text
Admin Login
     ↓
POST /api/auth/login
     ↓
Spring Security
     ↓
Validate username/password
     ↓
Generate JWT
     ↓
Return JWT to React
     ↓
React stores token
     ↓
Axios sends Bearer token
     ↓
JwtAuthFilter validates token
     ↓
Protected API
```

---

# 🌐 Step 17 — CORS

During local development, the backend allows:

```text
http://localhost:5173
```

This is correct for the Vite development server.

When deploying the frontend, update the CORS configuration to your actual frontend domain.

For example:

```text
https://your-portfolio-domain.com
```

Do not leave broad CORS permissions in production unless they are intentionally required.

---

# 🧹 Step 18 — If Backend Gives a Build/Startup Error

First run:

```powershell
mvn clean
```

Then:

```powershell
mvn clean package -DskipTests
```

Then:

```powershell
mvn spring-boot:run
```

If you see an error mentioning:

```text
circular dependency
```

make sure:

```text
SecurityConfig
      ↓
JwtAuthFilter
      ↓
JwtService
      ↓
UserDetailsService
```

and that `JwtAuthFilter` does **not** depend on `SecurityConfig`.

---

# 🧹 Step 19 — If Frontend Gives an npm Dependency Error

Remove the old installation:

```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
```

Then:

```powershell
npm install
```

Start:

```powershell
npm run dev
```

Do not use `--force` or `--legacy-peer-deps` unless you understand the dependency conflict.

---

# 📁 Step 20 — Recommended GitHub Setup

Before pushing the project to GitHub, make sure you do **not** commit:

```text
node_modules/
target/
.env
real production secrets
database passwords
JWT secrets
```

A `.gitignore` should include:

```gitignore
# Frontend
frontend/node_modules/
frontend/dist/

# Backend
backend/target/

# Environment / secrets
.env
*.env

# IDE
.idea/
.vscode/
*.iml

# OS
.DS_Store
Thumbs.db
```

---

# 🚀 Step 21 — Production Checklist

Before deploying:

```text
☐ Replace profile.jpg
☐ Add resume.pdf
☐ Add real GitHub URL
☐ Add real LinkedIn URL
☐ Update email
☐ Update project information
☐ Add project GitHub URLs
☐ Add live project URLs
☐ Configure production MySQL
☐ Change admin credentials
☐ Change JWT secret
☐ Configure production CORS
☐ Remove development secrets
☐ Build frontend
☐ Build backend
☐ Test all APIs
☐ Test contact form
☐ Test admin login
☐ Test mobile responsiveness
```

---

# 🧑‍💻 Recommended Development Workflow

When making changes:

```text
1. Start MySQL
       ↓
2. Start Spring Boot
       ↓
3. Start React/Vite
       ↓
4. Open portfolio
       ↓
5. Test project APIs
       ↓
6. Test contact form
       ↓
7. Test admin login
       ↓
8. Test project CRUD
```

---

# 📌 Useful URLs

### Frontend

```text
http://localhost:5173
```

### Projects

```text
http://localhost:5173/projects
```

### Admin Login

```text
http://localhost:5173/admin/login
```

### Admin Dashboard

```text
http://localhost:5173/admin
```

### Backend

```text
http://localhost:8080
```

### Projects API

```text
http://localhost:8080/api/projects
```

### Featured Projects API

```text
http://localhost:8080/api/projects/featured
```

---

# 🎯 Portfolio Sections

The portfolio intentionally focuses on the areas most relevant to a software developer:

```text
Hero
  ↓
About
  ↓
Skills
  ↓
Projects
  ↓
Experience
  ↓
Contact
```

It does **not** include:

- QA/Testing section
- Blog section
- System Architecture section

---

# ⭐ Recommended Project Presentation

For each project, provide:

```text
Project Name
     ↓
Short Business Description
     ↓
Your Role
     ↓
Key Features
     ↓
Technologies
     ↓
GitHub
     ↓
Live Demo
```

Avoid simply listing technologies. Explain what **you built and contributed**.

---

# 📜 License

This portfolio is a personal project created for professional portfolio and demonstration purposes.

---

# 👤 Author

**Rabindra Kumar Mahato**

Java Backend Developer | Spring Boot | Microservices | React

---

## ⭐ Final Setup

Once everything is configured, your local application should look like:

```text
                 http://localhost:5173
                         │
                         ▼
                React + TypeScript
                         │
                       Axios
                         │
                         ▼
                 http://localhost:8080
                         │
                         ▼
                  Spring Boot API
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
        Spring Security          JPA/Hibernate
              │                     │
             JWT                    ▼
              │                   MySQL
              │
              ▼
        Admin APIs
```

This README is intended to be the **main setup and deployment guide** for the portfolio.
