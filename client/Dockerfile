FROM centos:7 
RUN set -x && \
  yum update -y &&\
  yum install -y epel-release && \ 
  yum install -y ansible
EXPOSE 3002
CMD ["/bin/bash"]