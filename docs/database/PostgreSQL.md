# PostgreSQL
PostgreSQL, often simply "Postgres", is an object-relational database management system (ORDBMS) with an emphasis on extensibility and standards-compliance. 

## Basic Installation and Setup
###  Manual Installation 
To do

### Using Docker
To streamline your efforts in deploying your  PostreSQL in development and test environment, or even in your local machine,we can leverage the use of container.  


**Start a Postgres Instance**
```
$ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```
**Start via psql**
```
$ docker run -it --rm --network some-network postgres psql -h some-postgres -U postgres
```
**Customized Docker Image**
if you want to tweak some configuration for your PostgreSQL image you can create your own custom docker image, you just need to create a **DockerFile**, build an image of the container and run it.

*DockerFile for PostgreSQL 9.3*
```
#
# example Dockerfile for https://docs.docker.com/engine/examples/postgresql_service/
#

FROM ubuntu:16.04

# Add the PostgreSQL PGP key to verify their Debian packages.
# It should be the same key as https://www.postgresql.org/media/keys/ACCC4CF8.asc
RUN apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys B97B0AFCAA1A47F044F244A07FCC7D46ACCC4CF8

# Add PostgreSQL's repository. It contains the most recent stable release
#     of PostgreSQL, ``9.3``.
RUN echo "deb http://apt.postgresql.org/pub/repos/apt/ precise-pgdg main" > /etc/apt/sources.list.d/pgdg.list

# Install ``python-software-properties``, ``software-properties-common`` and PostgreSQL 9.3
#  There are some warnings (in red) that show up during the build. You can hide
#  them by prefixing each apt-get statement with DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y python-software-properties software-properties-common postgresql-9.3 postgresql-client-9.3 postgresql-contrib-9.3

# Note: The official Debian and Ubuntu images automatically ``apt-get clean``
# after each ``apt-get``

# Run the rest of the commands as the ``postgres`` user created by the ``postgres-9.3`` package when it was ``apt-get installed``
USER postgres

# Create a PostgreSQL role named ``docker`` with ``docker`` as the password and
# then create a database `docker` owned by the ``docker`` role.
# Note: here we use ``&&\`` to run commands one after the other - the ``\``
#       allows the RUN command to span multiple lines.
RUN    /etc/init.d/postgresql start &&\
    psql --command "CREATE USER docker WITH SUPERUSER PASSWORD 'docker';" &&\
    createdb -O docker docker

# Adjust PostgreSQL configuration so that remote connections to the
# database are possible.
RUN echo "host all  all    0.0.0.0/0  md5" >> /etc/postgresql/9.3/main/pg_hba.conf

# And add ``listen_addresses`` to ``/etc/postgresql/9.3/main/postgresql.conf``
RUN echo "listen_addresses='*'" >> /etc/postgresql/9.3/main/postgresql.conf

# Expose the PostgreSQL port
EXPOSE 5432

# Add VOLUMEs to allow backup of config, logs and databases
VOLUME  ["/etc/postgresql", "/var/log/postgresql", "/var/lib/postgresql"]

# Set the default command to run when starting the container
CMD ["/usr/lib/postgresql/9.3/bin/postgres", "-D", "/var/lib/postgresql/9.3/main", "-c", "config_file=/etc/postgresql/9.3/main/postgresql.conf"]
```
### Using Managed Database Service
Using a managed database services can help to reduce the process of provisioning and maintaining the database. Unllike in a traditional way of setting up database ,the user's doesn't need to maintain and manage the database; it's the cloud provider's responsibility to oversee the underlying infrastructure. In this setup, the developer has more focused on the application rather than configuring the database. Here are the top 3 cloud providers that offers **PostgreSQL** as a **Managed Database Service**
* Amazon Relational Database Service
	[https://aws.amazon.com/getting-started/tutorials/create-connect-postgresql-db/](https://aws.amazon.com/getting-started/tutorials/create-connect-postgresql-db/)
* Google Cloud SQL
	[https://cloud.google.com/sql/docs/postgres](https://cloud.google.com/sql/docs/postgres)
* Microsoft Azure Database
	[https://docs.microsoft.com/en-us/azure/postgresql/](https://docs.microsoft.com/en-us/azure/postgresql/)
  
## Features

###  Strengths

 -  Immunity to over-deployment. 
 - ACID Compliant  
 -  Diversified Extension Functions. 
 -  Diverse indexing technique. 
 - Diverse kinds of replication.  
 -  Write-ahead logging. 
 - Supports Geographic objects.

### Limitations / Weaknesses

 - Slower read operations compare to MySQL
 - Usability and Learning Curve

### Versus Other Products

 - List item

### Support for Chosen Frameworks

 - List item

## Performance Tuning Recommendations

to do








##### References
[https://www.tutorialandexample.com/postgresql-tutorial/](https://www.tutorialandexample.com/postgresql-tutorial/)
[https://github.com/docker-library/docs/blob/master/postgres/README.md](https://github.com/docker-library/docs/blob/master/postgres/README.md)
[https://www.digitalocean.com/community/tutorials/understanding-managed-databases](https://www.digitalocean.com/community/tutorials/understanding-managed-databases)