# ARC Insight

Analytics tool for Arc Network.

## Features
- Fetch latest blocks
- Analyze transaction activity
- Wallet insights

## Installation
```bash
npm install
```

## Setup
```bash
cp .env.example .env
```

## Run
```bash
npm run dev
```

## API
GET /api/blocks  
GET /api/wallet/:address
## 🔍 Health Check

GET /health

Response:
{
  "status": "OK",
  "uptime": 123.45
}

## ⚠️ Error Handling

All errors return:

{
  "error": "Error message"
}

## Features

- REST API architecture
- Middleware-based error handling
- Wallet validation layer
- Environment configuration
- Modular route structure
- Health monitoring endpoint
- Axios-based API client

- ## API Endpoints

### Get latest blocks
GET /api/v1/blocks

### Get wallet analytics
GET /api/v1/wallet/:address

### Healthcheck
GET /api/v1/health
