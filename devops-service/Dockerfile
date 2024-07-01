FROM amazoncorretto:21

# Create and set working directory
RUN mkdir /app
WORKDIR /app

# Copy JAR file into container
COPY target/*.jar devops-service.jar


# Expose the same port as the microservice
EXPOSE 8080

# Set the command to run the service

ENTRYPOINT ["java", "-jar", "devops-service.jar"]
