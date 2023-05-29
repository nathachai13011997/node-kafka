# NodeJS + Kafka
In this project, practice using kafka as follows [CodeBangkok](https://www.youtube.com/watch?v=RjtIdUOpH04&t=6093s)

## Install and Run Project

 Requires :  [docker](https://www.docker.com/) and [node.js](https://nodejs.org/en/)

**server** :  
- open terminal or cmd
- pull image zookeeper
	``` bash 
	docker pull zookeeper 
	```
- pull image bitnami/kafka
	``` bash
	docker pull bitnami/kafka
	```
- pull image mysql
	``` bash
	docker pull mysql
	```
- pull image phpmyadmin
	``` bash
	docker pull phpmyadmin
	```
- cd ...\node-kafka\server
- run file docker compose
	``` bash
	docker compose up -d
	```
- go to phpMyAdmin `http://localhost:8080/index.php?route=/` import file db `bank_account.sql`
> Note : phpMyAdmin => username : root , password : root
		
**producer** :
- open terminal or cmd
- cd ...\node-kafka\producer
- install node modules
	``` bash
	npm install
	```
- run project
	``` bash
	npm run start
	```

**consumer** :
- open terminal or cmd
- cd ...\node-kafka\producer
- install node modules
	``` bash
	npm install
	```
- run project
	``` bash
	npm run start
	```
## Architecture	
![alt text](https://github.com/nathachai13011997/node-kafka/blob/main/architecture.png?raw=true)
