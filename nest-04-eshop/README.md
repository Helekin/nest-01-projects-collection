## Overview

This repository focuses on building a scalable backend for an eCommerce application using NestJS with a strong emphasis on database persistence and structured architecture.

The goal is to evolve from in-memory data handling to a fully database-driven system powered by TypeORM and PostgreSQL, implementing best practices for validations, modular design, and maintainability.

Throughout this project, we will develop a robust backend capable of handling real-world eCommerce operations, including product management, user authentication, and transactional workflows, all within a containerized environment using Docker.

### Main Focus Areas
- Database persistence with PostgreSQL
- Full CRUD operations for eCommerce entities (products, users, orders)
- Data validations and constraints
- DTOs and advanced DTO patterns
- Entities and TypeORM decorators
- Lifecycle hooks (BeforeInsert, BeforeUpdate)
- Pagination and query optimization
- Search and filtering capabilities
- Batch insertion strategies
- Seed execution for initial data
- Cross-module data relationships
- Docker & Docker Compose for containerized environments

#### Topics Covered
#### Database & ORM
- Entities and schemas with TypeORM
- Constraints and validations
- Relationships:
    - One-to-Many
    - Many-to-One
- Query Builder and Query Runner
- Transactions:
    - Commits
    - Rollbacks
- Table management (renaming, structure updates)
- Data transformation and flattening results

#### Backend Features
- Full CRUD implementation
- Advanced searches and filtering
- Pagination strategies
- File upload handling and validation
    - Note: In production, files should be stored in external services rather than locally
#### Authentication & Security
- Authentication and authorization flows
- JSON Web Tokens (JWT)
- Password hashing
- Integration with NestJS Passport
- Route protection (guards)
- Bearer tokens
- Linking users with products (ownership, relations)
#### Advanced NestJS Concepts
- Asynchronous modules
- Custom decorators:
    - Method decorators
    - Class decorators
    - Property decorators