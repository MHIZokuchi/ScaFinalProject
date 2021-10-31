provider "google"{
    credentials = file("mygcp-creds.json")
    project = "sca-cloud-project"
    region = "us-west1"
    zone = "us-west1-c"
}

resource "google_compute_instance" "my_server" {
    name = "project_server"
    machine_type = "f1-micro"
    boot_disk {
      initialize_params {
        image = "ubuntu-os-cloud/ubuntu-1604-lts"
      }
    }
    network_interface {
      
      network = "default"
      access_config{}
    }
  
}