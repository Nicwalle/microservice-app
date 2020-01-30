Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # NOTE: This will enable public access to the opened port
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  config.vm.network "private_network", ip: "192.168.33.10"

  config.vm.synced_folder "app", "/home/vagrant/app"

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
    vb.name = "nicwalle"
  end

  config.vm.hostname = "nicwalle"

  config.vm.define "nicwalle"
end
