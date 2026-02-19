
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
otcp: # Opsie Turbopack Control Panel
	@cd control-panel && npm run dev-tb


# Run the server & database.
up-server:
	@docker compose up opsie-pg opsie-server -d


# Stop the server & database.
down-server:
	@docker compose down opsie-pg opsie-server 


# View the logs of the server.
log-server:
	@docker compose logs -f opsie-server