.PHONY: help start-database

DOCKER = docker

help:
	@echo "make help				Show all available commands and descriptions"
	@echo "make start-datanase		Starts Local Database Container"

start-database:
	$(DOCKER) run -it --rm --name packed_database -p 5432:5432 -e POSTGRES_PASSWORD=postgres packed_database