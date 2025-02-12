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

# /users/login Endpoint Documentation

## Description
This endpoint logs in an existing user. It validates the input data and returns an authentication token along with the user object when the credentials are valid.

## URL
`POST /users/login`

## Request Body
- **email** (string): A valid email address.
- **password** (string): Required. At least 6 characters.

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success: 200 OK
Returns an authentication token and the user object (password is not returned).

Example:
```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_unique_id",
    "email": "john.doe@example.com"
    // ... other user properties ...
  },
  "message": "User Logged In Successfully"
}
```

### Error: 400/401 Bad Request / Unauthorized
Returns validation error details or authentication failure messages when required fields are missing or invalid.

Example:
```json
{
  "message": "Invalid Email or Password"
}
```

# /users/profile Endpoint Documentation

## Description
This endpoint retrieves the profile information of the currently authenticated user.

## URL
`GET /users/profile`

## Headers
- **Authorization**: Bearer token required. Format: `Bearer <your_jwt_token>`

## Responses

### Success: 200 OK
Returns the user profile object.

Example:
```json
{
  "user": {
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

### Error: 401 Unauthorized
Returns when no token is provided or the token is invalid.

Example:
```json
{
  "message": "Authentication required"
}
```

# /users/logout Endpoint Documentation

## Description
This endpoint logs out the current user by invalidating their token.

## URL
`POST /users/logout`

## Headers
- **Authorization**: Bearer token required. Format: `Bearer <your_jwt_token>`

## Responses

### Success: 200 OK
Returns a success message.

Example:
```json
{
  "message": "Successfully logged out"
}
```

### Error: 401 Unauthorized
Returns when no token is provided or the token is invalid.

Example:
```json
{
  "message": "Authentication required"
}
```
