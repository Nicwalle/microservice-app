# 1. Setting up the environment
## Vagrant
We will first install the `ubuntu/trusty64` vagrant box:
```
vagrant init ubuntu/trusty64
```
It generates a `Vagrantfile` in the current directory. We will modify it to change the vm name and the amount of allocated RAM, the IP address etc. The non-commented lines are listed below:
```
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "private_network", ip: "192.168.33.10"
  config.vm.synced_folder "app", "/home/vagrant/app"
  config.vm.hostname = "nicwalle"
  config.vm.define "nicwalle"

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
    vb.name = "nicwalle"
  end

end
```
Afterwards, just execute the following command to start the vm:
```
vagrant up
```
and connect to the vm using ssh:
```
vagrant ssh
```

## Docker
The following steps have been inspired by the official tutorial [available here](https://docs.docker.com/install/linux/docker-ce/ubuntu/).

1. First, update the package index:
   ```
   sudo apt-get update
   ```
2. Install docker:
   ```
   sudo apt install docker.io
   ```
3. Add the current user to the docker group so you don't need to execute the docker commands in `sudo` mode:
   ```
   sudo usermod -aG docker ${USER}
   newgrp docker
   ```
Docker is now set up. To test the installation, you can launch the `hello-world` container (optional):
```
docker run hello-world
```

## Docker-compose
To install docker-compose, just run the 2 following commands to download and add execution access:
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```
