
# Build the Docker images for the entire application.
build:
	@docker compose build


# Run the entire application in development mode using Docker Compose.
up:
	@docker compose up -d

# Down the entire Docker Compose.
down:
	@docker compose down


# Run the control panel in development mode using `--turbopack`.
cp-dev: # Opsie Turbopack Control Panel
	@cd control-panel && npm run dev-tb


# View the logs of the server.
cp-log:
	@docker compose logs -f opsie-control-panel



# Run the server & database.
server-build:
	@docker compose build opsie-server


# Run the server & database.
server-up:
	@docker compose up opsie-pg opsie-server -d


# Run the server & database with fresh build.
server-up-b:
	@docker compose up --build opsie-pg opsie-server -d


# Stop the server & database.
server-down:
	@docker compose down opsie-pg opsie-server 


# View the logs of the server.
server-log:
	@docker compose logs -f opsie-server