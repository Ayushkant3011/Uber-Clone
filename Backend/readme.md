# /users/register Endpoint Documentation

## Description
This endpoint registers a new user. It validates the input data and creates a user record when all required fields are provided.

## URL
`POST /users/register`

## Request Body
- **email** (string): A valid email address.
- **fullname** (object):
  - **firstname** (string): Required. At least 3 characters.
  - **lastname** (string): Optional. If provided, should be at least 3 characters.
- **password** (string): Required. At least 6 characters.

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success: 201 Created
Returns an authentication token and the created user object (password is not returned).

Example:
```json
{
  "token": "your_jwt_token",
  "User": {
    "_id": "user_unique_id",
    "email": "john.doe@example.com",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    }
    // ... other user properties ...
  }
}
```

### Error: 400 Bad Request
Returns validation error details when required fields are missing or invalid.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
    // ... additional errors if any ...
  ]
}
```
