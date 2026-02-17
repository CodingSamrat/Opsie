
# Run the entire application in development mode using Docker Compose.
dev:
	@docker compose up --build


# Control Panel ----
# Run the control panel in development mode using `--turbopack`.
dev-ocp:
	@cd control-panel && npm run dev-tb

