# Database
----
[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)




<h2 align="center">Easiest way to sync data between all the device on your balena.io fleet </h2>

<h4 align="center">Great for collating sensor data from temperature sensors, heat, water etc...</h4>
<img src="assets/diagram_v1.svg" width="400">

---


# Summary
### -  *[Installation](#Installation)*
### -  *[Deveopment](#For-developers)*
### -  *[Contributors](#Contributors)*
### -  *[Links](#Links)*
### -  *[License](#License)*













 
# Installation
### 
```bash
cd ~
git clone https://github.com/wisehackermonkey/database.git
cd database

```











 -----------------
# Screenshots
- <!-- <img src="NNNNNNNNNNNNN" width="400"> -->














-----------------
# Development
### 
```bash
cd ~
git clone https://github.com/wisehackermonkey/database.git
cd database/database
npm install
npm start
```
# Go to http://localhost:80/
### 
```bash
balena login
balena fleet
balena push <fleet name>
# example
balena push my-sensor-fleet

my fleet name is 'starter'
balena push starter
```












 
---
# Links
### 
### 
### 
### 
### 












 -----------------
# Contributors

[![](https://contrib.rocks/image?repo=wisehackermonkey/database)](https://github.com/wisehackermonkey/database/graphs/contributors)

##### Made with [contributors-img](https://contrib.rocks).

-----------------


# License

#### MIT © wisehackermonkey
<img src="osi-logo.png" width="100">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
```bash
by oran collins
github.com/wisehackermonkey
oranbusiness@gmail.com
__DATE___
```
<!-- 

# Docker
### Build
```bash
cd ~
git clone https://github.com/wisehackermonkey/database.git
cd database
docker build -t wisehackermonkey/database:latest .  
```
### Run
```bash
docker run -it --rm --name wisehackermonkey/database:latest  
```
### Docker-compose
```bash
docker-compose build
docker-compose up 
```
# Publish Docker Image
```bash
docker build -t wisehackermonkey/database:latest .
docker login
docker push wisehackermonkey/database:latest
```
# Deploy on netlify
```
npm install netlify-cli -g
netlify login
netlify deploy
netlify deploy --prod
```
-->