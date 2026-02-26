# API Documentation

## Overview

This document provides an overview of the API endpoints available for the portfolio application. The API follows RESTful principles and returns data in JSON format.

## Base URL

```
https://api.yourdomain.com/v1
```

## Authentication

All endpoints require an API key for authentication. Include the API key in the request headers as follows:

```
Authorization: Bearer YOUR_API_KEY
```

## Endpoints

### 1. Get All Projects

- **Endpoint:** `/projects`
- **Method:** `GET`
- **Description:** Retrieve a list of all projects in the portfolio.
- **Response:**

    - **Status 200:** Returns an array of project objects.
    ```json
    [
        {
            "id": "1",
            "title": "Project One",
            "description": "Description of project one.",
            "url": "https://project-one.com",
            "createdAt": "2023-01-01T00:00:00Z",
            "updatedAt": "2023-01-01T00:00:00Z"
        },
        ...
    ]
    ```
    
- **Errors:**
    - **Status 401:** Unauthorized
    - **Status 404:** Not Found

### 2. Get Single Project

- **Endpoint:** `/projects/{id}`
- **Method:** `GET`
- **Description:** Retrieve detailed information for a specific project.
- **Path Parameters:**
    - `id` (string): The unique identifier of the project.
- **Response:**

    - **Status 200:** Returns the project object.
    ```json
    {
        "id": "1",
        "title": "Project One",
        "description": "Detailed description of project one.",
        "url": "https://project-one.com",
        "createdAt": "2023-01-01T00:00:00Z",
        "updatedAt": "2023-01-01T00:00:00Z"
    }
    ```

- **Errors:**
    - **Status 401:** Unauthorized
    - **Status 404:** Project Not Found

### 3. Create New Project

- **Endpoint:** `/projects`
- **Method:** `POST`
- **Description:** Create a new project in the portfolio.
- **Request Body:**

    ```json
    {
        "title": "Project Title",
        "description": "Project description.",
        "url": "https://project-url.com"
    }
    ```

- **Response:**

    - **Status 201:** Project created successfully.
    ```json
    {
        "id": "2",
        "title": "Project Title",
        "description": "Project description.",
        "url": "https://project-url.com",
        "createdAt": "2023-01-01T00:00:00Z",
        "updatedAt": "2023-01-01T00:00:00Z"
    }
    ```

- **Errors:**
    - **Status 400:** Bad Request
    - **Status 401:** Unauthorized

### 4. Update Project

- **Endpoint:** `/projects/{id}`
- **Method:** `PUT`
- **Description:** Update an existing project.
- **Path Parameters:**
    - `id` (string): The unique identifier of the project.
- **Request Body:**

    ```json
    {
        "title": "Updated Project Title",
        "description": "Updated description.",
        "url": "https://updated-project-url.com"
    }
    ```

- **Response:**

    - **Status 200:** Project updated successfully.
    ```json
    {
        "id": "1",
        "title": "Updated Project Title",
        "description": "Updated description.",
        "url": "https://updated-project-url.com",
        "createdAt": "2023-01-01T00:00:00Z",
        "updatedAt": "2023-01-02T00:00:00Z"
    }
    ```

- **Errors:**
    - **Status 400:** Bad Request
    - **Status 401:** Unauthorized
    - **Status 404:** Project Not Found

### 5. Delete Project

- **Endpoint:** `/projects/{id}`
- **Method:** `DELETE`
- **Description:** Delete a project from the portfolio.
- **Path Parameters:**
    - `id` (string): The unique identifier of the project.
- **Response:**

    - **Status 204:** Project deleted successfully.

- **Errors:**
    - **Status 401:** Unauthorized
    - **Status 404:** Project Not Found

## Rate Limiting

Each user is limited to 100 requests per hour. Exceeding this limit will result in a `429 Too Many Requests` error.

## Conclusion

This API allows users to manage their portfolio projects effectively. Be sure to check each endpoint's responses and errors to handle the data appropriately in your application.