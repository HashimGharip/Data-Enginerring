FROM centos:latest

RUN  yum -y install httpd 

ADD website.tar.gz /var/www/html 

CMD ["-D","FOREGROUND"]

ENTRYPOINT [ "/user/sbin/httpd" ]

EXPOSE 80
#docker build . -t challenge:2
#docker run -p 8080:80 challenge:2