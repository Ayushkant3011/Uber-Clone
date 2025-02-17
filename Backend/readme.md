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

# /captains/register Endpoint Documentation

## Description
Registers a new captain with their vehicle details.

## URL
`POST /captains/register`

## Request Body
```json
{
  "fullname": {
    "firstname": "John", // Required, minimum 3 characters
    "lastname": "Doe"    // Optional
  },
  "email": "john.doe@example.com", // Required, valid email format
  "password": "password123",       // Required, minimum 5 characters
  "vehicle": {
    "color": "Black",             // Required, minimum 3 characters
    "plate": "ABC-123",           // Required, minimum 3 characters
    "capacity": 4,                // Required, minimum 1
    "vehicleType": "car"          // Required, must be one of: "car", "motorcycle", "auto"
  }
}
```

## Responses

### Success: 201 Created
```json
{
  "token": "your_jwt_token",
  "captain": {
    "_id": "captain_unique_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC-123",
      "capacity": 4,
      "vehicleType": "car"
    }
  },
  "message": "Captain Registered Successfully"
}
```

### Error: 400 Bad Request
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
    // ... additional validation errors
  ]
}
```

# /captains/login Endpoint Documentation

## URL
`POST /captains/login`

## Request Body
```json
{
  "email": "john.doe@example.com", // Required, valid email format
  "password": "password123"        // Required, minimum 5 characters
}
```

## Responses

### Success: 200 OK
```json
{
  "token": "your_jwt_token",
  "captain": {
    "_id": "captain_unique_id",
    "email": "john.doe@example.com",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "vehicle": {
      "color": "Black",
      "plate": "ABC-123",
      "capacity": 4,
      "vehicleType": "car"
    }
  },
  "message": "Captain Logged In Successfully"
}
```

### Error: 401 Unauthorized
```json
{
  "message": "Invalid Email or Password"
}
```

# /captains/profile Endpoint Documentation

## URL
`GET /captains/profile`

## Headers
- **Authorization**: Bearer token required

## Response

### Success: 200 OK
```json
{
  "captain": {
    "_id": "captain_unique_id",
    "email": "john.doe@example.com",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "vehicle": {
      "color": "Black",
      "plate": "ABC-123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

# /captains/logout Endpoint Documentation

## URL
`GET /captains/logout`

## Headers
- **Authorization**: Bearer token required

## Response

### Success: 200 OK
```json
{
  "message": "Captain Logged Out Successfully"
}
```
