## Overview

This repository contains a hands-on project built with NestJS. The goal is to understand its architecture and core concepts by building a REST API step by step.

Throughout the project, we develop a small API (Cars & Brands) while explaining how each Nest building block works in practice.

## Topics Covered

### What is Nest?

NestJS is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It is built with TypeScript and heavily inspired by Angular’s architecture, using modules, decorators, and dependency injection.

It runs on top of platforms like Express or Fastify, abstracting complexity while promoting clean architecture patterns.

### Why Use Nest?

- Strong architectural structure out of the box
- Built-in Dependency Injection system
- Modular and scalable design
- First-class TypeScript support
- Powerful CLI
- Easy testing
- Enterprise-ready patterns

Nest encourages best practices such as SOLID principles and DRY (Don’t Repeat Yourself).

### Project Structure – Explanation of Each File

When creating a new Nest project, you will typically see:

```bash
main.ts
```

Application entry point.
Bootstraps the Nest application and starts the HTTP server.

```bash
app.module.ts
```

Root module of the application.
Registers and connects all feature modules.

```bash
app.controller.ts
```

Basic example controller created by default.

```bash
app.service.ts
```

Basic example service used by the default controller.

```bash
tsconfig.json
```

TypeScript configuration file.

```bash
package.json
```

Project dependencies and scripts.

### Core Nest Building Blocks

#### Modules

Modules are the fundamental organizational unit in Nest.
Each module groups related controllers and providers.

- Decorated with @Module()
- Defines:
  - imports
  - controllers
  - providers
  - exports

#### Controllers

Controllers handle incoming HTTP requests and return responses.

Common decorators:

- @Controller()
- @Get()
- @Post()
- @Patch()
- @Delete()

Example responsibilities:

- Mapping routes
- Receiving parameters
- Delegating logic to services

#### Services

Services contain business logic.

- Decorated with @Injectable()
- Used by controllers
- Promote separation of concerns

#### Dependency Injection

Nest has a built-in IoC container.

- Services are injected through the constructor
- Promotes loose coupling
- Enables modular and testable architecture

Common issues covered:

- Missing providers
- Not exporting providers from modules
- Circular dependencies

#### First Decorators

Nest heavily relies on decorators:

- @Module()
- @Controller()
- @Injectable()
- @Get(), @Post(), @Patch(), @Delete()

We explain how they work and how metadata is used internally.

#### Pipes

Pipes transform and validate incoming data.

Common uses:

- ParseIntPipe
- ValidationPipe

Responsibilities:

- Data transformation
- Input validation
- Enforcing request structure

#### Exception Filters

Used to handle and standardize errors.

- Catch specific exceptions
- Customize HTTP responses
- Centralize error handling logic

Building the Initial REST API

We build a REST API step by step to understand:

- Controllers
- Services
- DTOs
- Validation
- Module communication

Entities created:

- Cars
- Brands

#### DTO (Data Transfer Object)

DTOs define the structure of incoming and outgoing data.

Used for:

- Validation
- Type safety
- Clear API contracts

Examples:

- CreateCarDto
- UpdateCarDto
- CreateBrandDto

#### HTTP Methods Implemented

- POST – Create resources
- GET – Retrieve resources
- PATCH – Update partially
- DELETE – Remove resources

Automatic Validations

We implement automatic validation using:

- class-validator
- class-transformer

These libraries allow:

- Property validation
- Automatic transformation
- Clean controller logic

#### Useful Class Validator Decorators

Some commonly used decorators:

- @IsString()
- @IsNumber()
- @IsUUID()
- @IsOptional()
- @MinLength()
- @MaxLength()
- @IsArray()

We also apply DRY principles to avoid repeating validation logic.

SEED Endpoint

We implement a `seed` endpoint to:

- Populate initial data
- Insert sample Cars
- Insert sample Brands

This helps test relationships and module communication.

Module Communication

We connect:

- SeedModule
- CarsModule
- BrandsModule

Topics covered:

- Exporting providers
- Importing modules correctly
- Common errors when linking modules
- Dependency injection problems with external modules

## Requirements

- Node.js (LTS recommended)
- npm / pnpm / yarn

## Setup

```bash
npm install
```

## Run

## Development (watch)

```bash
npm run start:dev
```
