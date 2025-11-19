# 🐳 Node.js Docker AWS Deployment

Simple REST API for managing tasks built with Node.js, Express, and Docker.



- ✅ Create, Read, Update, Delete tasks
- ✅ RESTful API design
- ✅ Dockerized application
- ✅ Health check endpoint
- ✅ CORS enabled

## 📋 Prerequisites

- Node.js 18+
- Docker
- Git

## 🛠️ Installation & Run

### Run Locally
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/task-manager-api.git
cd task-manager-api

# Install dependencies
npm install

# Start the server
npm start
```

The API will run on `http://localhost:3000`

### Run with Docker
```bash
# Build Docker image
docker build -t task-manager-api .

# Run container
docker run -p 3000:3000 task-manager-api
```

## 📡 API Endpoints

### Health Check
```
GET /health
```

### Tasks Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get single task |
| POST | `/api/tasks` | Create new task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |

## 📝 API Examples

### Get all tasks
```bash
curl http://localhost:3000/api/tasks
```

### Create new task
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn Kubernetes"}'
```

### Update task
```bash
curl -X PUT http://localhost:3000/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'
```

### Delete task
```bash
curl -X DELETE http://localhost:3000/api/tasks/1
```

## 🐳 Docker Commands
```bash
# Build image
docker build -t task-manager-api .

# Run container
docker run -d -p 3000:3000 --name task-api task-manager-api

# View logs
docker logs task-api

# Stop container
docker stop task-api

# Remove container
docker rm task-api

# View running containers
docker ps
```

## 🐳 Run with Docker Compose

### Start the application
```bash
docker-compose up -d
```

### View logs
```bash
docker-compose logs -f
```

### Stop the application
```bash
docker-compose down
```

### Rebuild after changes
```bash
docker-compose up --build
```

Visit: http://localhost:3000
## 📁 Project Structure
```
task-manager-api/
├── app.js              # Main application
├── package.json        # Dependencies
├── Dockerfile          # Docker configuration
├── .dockerignore       # Docker ignore file
├── .gitignore          # Git ignore file
├── .env                # Environment variables (not in repo)
└── README.md           # Documentation
```

## 🔧 Environment Variables

Create a `.env` file:
```
PORT=3000
```

## 🚀 Future Enhancements

- [ ] Add database (MongoDB/PostgreSQL)
- [ ] Add authentication (JWT)
- [ ] Add input validation
- [ ] Add unit tests
- [ ] Deploy to AWS
- [ ] Add CI/CD pipeline

## 📄 License

MIT

## 👤 Author

[Abdelrhmna Ahmed Ali Abdelkader]
[https://github.com/Abdelrhman-Abdelkader]
---

**Built as a learning project for Docker, Git, and AWS deployment** 🎓