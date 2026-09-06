pipeline {
    agent any

    tools {
        nodejs 'NodeJS-24' // Replace with your configured tool name
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npm test'
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
                sh 'docker run -d -p 80:3000 --name devops-hello-container devops-hello:latest'
            }
        }
    }
}
