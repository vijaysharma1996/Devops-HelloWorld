pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-hello:latest .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker stop devops-hello-container || true'
                sh 'docker rm devops-hello-container || true'
                sh 'docker run -d -p 80:80 --name devops-hello-container devops-hello:latest'
            }
        }
    }
}