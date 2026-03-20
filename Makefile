.PHONY: dev build start stop clean help

help:
	@echo "Available commands:"
	@echo "  make dev     - Start development environment"
	@echo "  make build   - Build all services"
	@echo "  make start   - Start production environment"
	@echo "  make stop    - Stop all containers"
	@echo "  make clean   - Remove all containers and volumes"

dev:
	docker-compose -f docker-compose.dev.yml up --build

build:
	docker-compose build

start:
	docker-compose up -d

stop:
	docker-compose down

clean:
	docker-compose down -v --rmi all
