# How to install and run this program

### Set up the environment
```text
Create a `.env` file based on `.env.example`.
```

### Start Services
```bash
docker compose up -d
```

### Route

```text
http://localhost:3000
```


### Stop Services

```bash
docker compose down
```

# System Architecture Diagram

```text
                    ┌───────────────┐
                    │   Frontend    │
                    │    Nextjs     │
                    └───────┬───────┘
                            │ HTTP
                            ▼
                    ┌───────────────┐
                    │      API      │
                    │     Nestjs    │
                    │   Framework   │
                    └───────┬───────┘
                            │
                            │                   
                            ▼                  
                     ┌─────────────┐   
                     │  Database   │  
                     │ PostgresSQL │   
                     └─────────────┘   
                                            
```

# Library List

#### 1. sweetalert2

#### 2. tailwindCSS

#### 3. zustand

#### 4. lucide-react

#### 5. jwt-decode
