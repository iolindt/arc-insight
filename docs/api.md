# Arc Insight API Documentation

## Base URL

```
http://localhost:3000
```

---

# Health Check

## GET /health

Returns application status.

### Response

```json
{
  "status": "ok",
  "uptime": 12345
}
```

---

# Blocks

## GET /api/blocks

Returns latest blockchain blocks.

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": "123",
      "txCount": 15,
      "timestamp": "2025-05-01T12:00:00Z"
    }
  ]
}
```

---

# Wallet

## GET /api/wallet/:address

Returns wallet statistics.

### Example

```
GET /api/wallet/0x123456789
```

### Response

```json
{
  "success": true,
  "data": {
    "address": "0x123456789",
    "txCount": 42,
    "isActive": true
  }
}
```

---

# Error Response

Example error format:

```json
{
  "success": false,
  "error": "Internal Server Error"
}
```

---

# Status Codes

| Code | Description           |
| ---- | --------------------- |
| 200  | Success               |
| 400  | Bad Request           |
| 404  | Not Found             |
| 500  | Internal Server Error |

---

# Version

Current API Version: v1
