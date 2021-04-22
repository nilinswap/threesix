# Hosting in ec2

I will walk you through how I hosted this thing in ec2-instance.

1. Log in aws and launch an ec2-instance. I particularily selected the checkbox for public-ip address but I don't know if it helped.
2. ssh into the ec2-instance. to get ssh command. press the connect button on top right in the dashboard for ec2 instance.
3. when you are in, download and get your server up and running. serve it at port 80. so that it runs to http://localhost:80.
4. Use `security` tab in dashboard and go to `security group` to edit inbound ports. allow http and https there. 
5. boom! you are now remote. go to public-ip-address.com and see the thing running.
6. If you dislike the console way of adding ports one can listen to then use `ufw` which can put a firewall on the machine.
7. If you have a domain you want to link this with. go to domain administrator and register a cname from x.domain.com *where x you can choose from www, blogs etc) to the public dns url. 

