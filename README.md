# NodeJS + Kafka

## Install and Run Project

 Requires :  [docker](https://www.docker.com/) and [node.js](https://nodejs.org/en/)

**Server** :  
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
- run file docker compose
	``` bash
	docker compose up -d
	```
- import file db `bank_account.sql`
		
**producer** :
- install node modules
	``` bash
	npm install
	```
- run project
	``` bash
	npm run start
	```

**consumer** :
- install node modules
	``` bash
	npm install
	```
- run project
	``` bash
	npm run start
	```

## Credit
[CodeBangkok](https://www.youtube.com/watch?v=RjtIdUOpH04&t=6093s)