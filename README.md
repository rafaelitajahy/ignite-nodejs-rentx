# DOCKER

docker build -t rentx .

docker ps - consulta imagens
docker ps -a
docker start 5016faeb3e74
docker stop 5016faeb3e74
docker restart 5016faeb3e74
docker rm 3df359b01e8f
docker run -p 3333:3333 rentx
docker logs rentx -f

docker exec -it rentx /bin/bash - acessar container ctrl + D pra sair

# DOCKER COMPOSE

docker-compose up
docker-compose up -d
docker-compose stop
docker-compose start
docker-compose down - remove tudo

docker-compose up --force-recreate

docker exec rentx cat /etc/hosts

docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' rentx


'172.18.0.3' -> rentx
'172.18.0.2' -> database_ignite

# TypeORM


yarn typeorm migration:create -n CreateCategories

yarn typeorm migration:run
yarn typeorm migration:revert
#   i g n i t e - n o d e j s - r e n t x  
 