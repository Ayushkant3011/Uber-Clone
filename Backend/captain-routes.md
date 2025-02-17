# /captains/register Endpoint Documentation

## Description
This endpoint registers a new captain. It validates the input data and creates a captain record with vehicle information.

## URL
`POST /captains/register`

## Request Body
- **email** (string): A valid email address
- **fullname** (object):
  - **firstname** (string): Required. At least 3 characters
  - **lastname** (string): Optional
- **password** (string): Required. At least 5 characters
- **vehicle** (object):
  - **color** (string): Required. At least 3 characters
  - **plate** (string): Required. At least 3 characters
  - **capacity** (number): Required. Minimum value of 1
  - **vehicleType** (string): Required. Must be one of: 'car', 'motorcycle', 'auto'

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.driver@example.com",
  "password": "password123",
  "vehicle": {
    "color": "black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Responses

### Success: 201 Created
Returns the created captain object (password excluded)

Example:
```json
{
  "captain": {
    "_id": "captain_unique_id",
    "email": "john.driver@example.com",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "vehicle": {
      "color": "black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Error: 400 Bad Request
Returns validation error details when required fields are missing or invalid

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Invalid Vehicle Type",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```
