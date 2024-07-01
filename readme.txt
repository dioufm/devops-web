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