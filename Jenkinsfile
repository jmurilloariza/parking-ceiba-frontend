pipeline {
  // Donde se va a ejecutar el Pipeline
  agent {
    label 'Slave_Induccion'
  }

  // Opciones específicas de Pipeline dentro del Pipeline
  options {
    buildDiscarder(logRotator(numToKeepStr: '3'))
 	  disableConcurrentBuilds()
  }

  // Aquí comienzan los “items” del Pipeline
  stages{
    stage('Checkout'){
    	steps{
            echo "------------>Checkout<------------"
            checkout([
                $class: 'GitSCM',
                branches: [[name: '*/master']],
                doGenerateSubmoduleConfigurations: false,
                extensions: [],
                gitTool: 'Default',
                submoduleCfg: [],
                userRemoteConfigs: [[
                    credentialsId: 'Github_jmurilloariza',
                    url: 'https://github.com/jmurilloariza/parking-ceiba-frontend.git'
                ]]
            ])
        }
    }

    stage('Install') {
      steps{
        echo "------------>Installing<------------"
        sh 'npm install'
      }
    }

    stage('Lint Analysis') {
      steps{
        echo "------------>Lint Analysis<------------"
        sh 'npm run lint'
      }
    }

    stage('Test') {
      steps{
        echo "------------>Testing<------------"
        sh 'npm run test'
      }
    }

    stage('Test end-to-end') {
      steps{
        echo "------------>Testing Protractor<------------"
        sh 'npm run e2e'
      }
    }

    stage('Static Code Analysis') {
      steps{
        echo '------------>Static Code Analysis<------------'
        withSonarQubeEnv('Sonar') {
            sh "${tool name: 'SonarScanner', type:'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner -Dproject.settings=sonar-project.properties"
        }
      }
    }

    stage('Build') {
      steps{
        echo "------------>Building<------------"
        sh 'npm run build'
      }
    }

  }

  post {
    always {
      echo 'This will always run'
    }
    success {
      echo 'This will run only if successful'
    }
    failure {
      echo 'This will run only if failed'
      mail (to: 'jeferson.murillo@ceiba.com.co',subject: "Failed Pipeline:${currentBuild.fullDisplayName}", body: "Something is wrong with ${env.BUILD_URL}")
    }
    unstable {
      echo 'This will run only if the run was marked as unstable'
    }
    changed {
      echo 'This will run only if the state of the Pipeline has changed'
      echo 'For example, if the Pipeline was previously failing but is now successful'
    }
  }
}
