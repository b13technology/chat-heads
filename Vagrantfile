Vagrant.configure("2") do |config|
    # Configure the box to use
    # config.vm.box = "https://cloud-images.ubuntu.com/vagrant/utopic/current/utopic-server-cloudimg-i386-vagrant-disk1.box"
    config.vm.box = "chef/ubuntu-14.10-i386"

    # Configure the network interfaces
    config.vm.network :private_network, ip:    "192.168.56.122"
    config.vm.network :forwarded_port,  guest: 80,    host: 8080
    config.vm.network :forwarded_port,  guest: 8081,  host: 8081
    config.vm.network :forwarded_port,  guest: 3306,  host: 3307


    # nfs disabled because of bug in node-gyp https://github.com/TooTallNate/node-gyp/issues/147
    # failing to build bcrypt
    config.vm.synced_folder ".",  "/vagrant", id: "vagrant-root", :nfs => false #!Vagrant::Util::Platform.windows?
    config.vm.synced_folder ".", "/work", id: "project-root",  :nfs => false #!Vagrant::Util::Platform.windows?

    # Configure VirtualBox environment
    config.vm.provider :virtualbox do |v|
        v.name = "Chat-Heads-Utopic-Unicorn-x32"
        v.customize [ "modifyvm", :id, "--memory", 256 ]
        v.customize [ "modifyvm", :id, "--natdnshostresolver1", "on" ]
    end

    # Provision the box
    if Vagrant::Util::Platform.windows?
        config.vm.provision :shell do |sh|
            sh.path = "ansible/provision.sh"
            sh.args = "ansible/vagrant-site.yml"
        end
    else
        config.vm.provision :ansible do |ansible|
            ansible.playbook = "ansible/vagrant-site.yml"
        end
    end
end
