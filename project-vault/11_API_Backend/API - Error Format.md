# API - Error Format

## Purpose

Defines standard API success and error response structures.

## Error Response Format

All APIs should return:

```json
{
  "success": false,
  "error": {
    "code": "",
    "message": ""
  }
}
```

Example:

```json
{
  "success": false,
  "error": {
    "code": "PRODUCT_NOT_FOUND",
    "message": "Requested product does not exist."
  }
}
```

## Success Response Format

Standard format:

```json
{
  "success": true,
  "data": {}
}
```

## Implementation Rules

* Do not return inconsistent response formats.
* Route handlers should map validation, auth, not found, and server errors to predictable codes.
* Public pages should display graceful fallback states.

## Linked Notes

* [[API Overview]]
* [[Backend Stack]]
* [[Security Auth Rules]]
* [[Forbidden Patterns]]

## Source Trace

Source files: `09-api-specification.md`, `10-techincal-architecture.md`, `12-dontdo.md`.
