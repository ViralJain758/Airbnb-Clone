# WanderLust

WanderLust is a full-stack travel listing web application inspired by Airbnb. It allows users to browse, create, edit, and delete property listings through a clean server-rendered interface.

---

## Features

- Full CRUD for listings
- Server-side rendering with EJS and layout support via `ejs-mate`
- MongoDB data persistence with Mongoose
- Request validation using Joi
- Clean REST-style routing with `method-override`
- Seed script to bootstrap sample listing data

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS + ejs-mate
- Joi
- method-override
- Nodemon (development)

---

## Project Structure

```text
.
|-- app.js
|-- package.json
|-- schema.js
|-- models/
|   `-- listing.js
|-- init/
|   |-- index.js
|   `-- data.js
|-- utils/
|   |-- ExpressError.js
|   `-- wrapAsync.js
|-- views/
|   |-- includes/
|   |-- layouts/
|   `-- listings/
`-- public/
    `-- css/
```

---

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- MongoDB running locally on `mongodb://127.0.0.1:27017`

### Installation

```bash
npm install
```

### Seed Database (Optional but Recommended)

This will clear existing listings and insert sample data.

```bash
node init/index.js
```

### Run the App

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

Open your browser at:

```text
http://localhost:8080
```

---

## Available Scripts

- `npm run dev` - Starts server with Nodemon
- `npm start` - Starts server with Node
- `node init/index.js` - Seeds the database with sample listings

---

## Core Routes

- `GET /listings` - List all listings
- `GET /listings/new` - Render new listing form
- `POST /listings` - Create a listing
- `GET /listings/:id` - View a single listing
- `GET /listings/:id/edit` - Render edit form
- `PUT /listings/:id` - Update listing
- `DELETE /listings/:id` - Delete listing

---

## Validation

Listing payloads are validated in `schema.js` using Joi before create/update operations.

---

## Current Scope

This project currently focuses on listing management. Authentication, authorization, image uploads, and flash messaging are not yet implemented.

---

## License

ISC
