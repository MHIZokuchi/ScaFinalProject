## Deploying a MERN application to Kubernetes utilizing the CircleCI CI CD pipeline

 1. I found a MERN Stack application on GitHub and cloned the projects.  [Client](https://github.com/Andaeiii/Hush_Client) and [server](https://github.com/Andaeiii/Hush_Server).
 2. I created an Atlas account to deploy the Mongo Database. I followed these [Steps](https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster/). Naviagate to Index.Js on the server side project to update you mongoose DB url with the credentials generated from Atlas.
 3. Created Dockerfiles for the [Client](https://github.com/MHIZokuchi/ScaFinalProject/blob/master/Hush_Client-setCurrentIdBranch/Hush_Client-setCurrentIdBranch/Dockerfile) and  [Server](https://github.com/MHIZokuchi/ScaFinalProject/blob/master/Hush_Server-master/Hush_Server-master/Dockerfile)
 4. Created a docker compose file to test locally.
 ```sh
docker-compose up --build -d
```
5. Created the terraform script to deploy a Kubernetes cluster on GCP. Update the **terraform.tfvars** file with the your project ID and region.
6. Run the following commands to initialize and apply the provisioning of the resources with terraform
```sh
cd terraform-kubernetes
terraform init 
terraform validate
terraform plan
terraform apply
```

7. Connect the Project to Circle CI and set up the CI CD Pipeline. 
8. Navigate to environmental Variables on Circle CI and replace these values. **DOCKER_LOGIN**  with your Docker ID, **DOCKER_PWD** with your Docker Password, **GOOGLE_APPLICATION_CREDENTIALS** with the GCP service account credentials.  [Steps](https://cloud.google.com/iam/docs/creating-managing-service-accounts)  detailed here.
9. Trigger the pipeline to build the jobs.  [Link](https://app.circleci.com/pipelines/github/MHIZokuchi/ScaFinalProject/1/workflows/a2a76bcb-69bd-4a7e-bddb-54a85078a6b5/jobs/5) to the Circle CI build. 
10. Final project  [Link](http://35.195.55.238/)

### Future Improvments 
1. Use helm to deploy to Kubernetes
2. Create a .env file to store all variables that are not constant.
