AWS :  S3 bucketname:
requets validation certificat SSL: 
https://www.linkedin.com/pulse/creating-static-website-aws-s3-domain-from-route-53-pulikkal-asokan-6cbke/
https://github.com/serlesen/fullstack-jwt/tree/chapter_2/frontend


Build

Docker  :
docker build -t devops-service .
docker build -t devops-service:1.0.0 .


docker run -p 9091:9091 devops-service:latest

docker image tag devops-service:latest mamaddiouf/devops-service:0.0.1
docker login
docker image push mamaddiouf/devops-service:0.0.1


EC2;
Installation docker 
https://medium.com/@srijaanaparthy/step-by-step-guide-to-install-docker-on-amazon-linux-machine-in-aws-a690bf44b5fe

To install Docker-compose follow the below steps:

sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

docker-compose version