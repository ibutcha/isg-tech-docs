# PostgreSQL  

![Alt Text](../.vuepress/public/postgresql-logo.png)

  
## Introduction

PostgreSQL, often simply "Postgres", is an object-relational database management system (ORDBMS) with an emphasis on extensibility and standards-compliance.

PostgreSQL is ACID-compliant, transactional, has updatable and materialized views, triggers, and foreign keys. It also supports functions and stored procedures.

## Why use PostgreSQL?

PostgreSQL comes with many features aimed to help developers build application and protect data for database administrators, besides from being free and open source PostgreSQL is highly extensibile that you can define your own data type and build your own custom functions.

## Features

  

- Data Types

- Data Integrity

- Concurrency and Performance

- Reliability and Disaster Recovery

- Security

- Extensible

- Internationalization and Text Search

  

## Use Cases

- PostgreSQL can be used for an Online Transaction Processing and Analytics.

- PostgreSQL can be used to processed geometric data in various formats using **PostGIS**.

- PostgreSQL can be used as no-sql data store.

- PostgreSQL can be used as a database consolidation.

## Basic Installation and Setup

### Manual Installation

To do

 ### Database Cluster
 

### Using Docker

To streamline your efforts in deploying your PostgreSQL in development and test environment, or even in your local machine,we can leverage the use of container.

  
  

**Start a Postgres Instance**

```

$ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres

```

**Start via psql**

```

$ docker run -it --rm --network some-network postgres psql -h some-postgres -U postgres

```
### Using Managed Database Service

Using a managed database services can help to reduce the process of provisioning and maintaining the database. Unlike in a traditional way of setting up database ,the developer doesn't need to maintain and manage the database; it's the cloud provider's responsibility to oversee the underlying infrastructure. In this setup, the developer has more focused on the application rather than configuring the database.

  

Here are the top 3 cloud providers that offers **PostgreSQL** as a **Managed Database Service**

* Amazon Relational Database Service

[https://aws.amazon.com/getting-started/tutorials/create-connect-postgresql-db/](https://aws.amazon.com/getting-started/tutorials/create-connect-postgresql-db/)

* Google Cloud SQL

[https://cloud.google.com/sql/docs/postgres](https://cloud.google.com/sql/docs/postgres)

* Microsoft Azure Database

[https://docs.microsoft.com/en-us/azure/postgresql/](https://docs.microsoft.com/en-us/azure/postgresql/)


## Limitations

- Slower performance compared to other database
- Complex Replication process


## Cluster Configuration

PostgreSQL does not natively support any multi-master clustering solution, like MySQL or Oracle do. Nevertheless, there are many commercial and community products that offer this implementation, along with others such as replication or load balancing for PostgreSQL.

Some commercial or community solutions are synchronous, meaning that a data-modifying transaction is not considered committed until all servers have committed the transaction. This guarantees that a failover will not lose any data and that all load-balanced servers will return consistent results no matter which server is queried. In contrast, asynchronous solutions allow some delay between the time of a commit and its propagation to the other servers, opening the possibility that some transactions might be lost in the switch to a backup server, and that load balanced servers might return slightly stale results. Asynchronous communication is used when synchronous would be too slow.

Before we deep dive into different clustering solutions, first we need to understand some basic concepts:

 - **Master Server -** A server that can modify/write data. 
   
 - **Standby Server** - A server that tracks the changes in the master.
 - **Warm Standby Servers** - A Server that cannot be connected unless its promoted to

master.

 - **Hot standby servers** - A server that accepts connections and serves only as read-only queries.
 - **WAL or Write Ahead Log** - a log file where all the modifications to the database are written before they’re applied/written to data files.

Here are some clustering  techniques that are built-in features of PostgreSQL.

Streaming replication - allows a standby server to stay more up-to-date than is possible with file-based log shipping. The standby connects to the primary, which streams WAL records to the standby as they're generated, without waiting for the WAL file to be filled.

Cascading replication -  allows a standby server to accept replication connections and stream WAL records to other standbys, acting as a relay. This can be used to reduce the number of direct connections to the master and also to minimize inter-site bandwidth overheads.

Synchronous replication - offers the ability to confirm that all changes made by a transaction have been transferred to one or more synchronous standby servers. This extends that standard level of durability offered by a transaction commit. This level of protection is referred to as 2-safe replication in computer science theory, and group-1-safe (group-safe and 1-safe) when `synchronous_commit` is set to `remote_write`.




  ## Versus Other Products
to do
  
## Performance Tuning Recommendations
Performance tuning is all about trade offs, we can't optimize everything in our database, sometimes we might accept a slow-running query in one part of your application that isn’t used so often in order to get a lightning-fast response time on a frequently performed query.

Here are the concepts that we need to check to further accelerate the performance of our database.

 - **Hardware** -  this is the first thing we need to check in terms of database optimization, some of the most important factors to check is, available memory, CPU and disk space, and performance.
 - **Postgres configurations** - there are several postgres options or configurations that can affect drastically database performance like,_max_connections_meffective_cache_size_,_work_mem_ and etc.
 - **Vacuuming** - A vacuum is a scan that marks tuples as no longer needed so that they can be overwritten. Failure to do this can mean that you have dead tuples lingering in your system. These dead tuples are often called _bloat._ Bloat originates mostly from records that are being deleted, updated, or inserted.
 - **Analyze query performance** - The most useful tool in tuning your database is the SQL command EXPLAIN ANALYZE.This allows you to profile each SQL query your application performs and see exactly how the PostgreSQL planner will process the query
 - **Indexing**-Just as in a book, indexes give information to your database engine about roughly where in the system the data you’re looking for lives. To index our system properly, we need an understanding of our data and how we’re trying to access it.



##### References

[https://www.tutorialandexample.com/postgresql-tutorial/](https://www.tutorialandexample.com/postgresql-tutorial/)

[https://github.com/docker-library/docs/blob/master/postgres/README.md](https://github.com/docker-library/docs/blob/master/postgres/README.md)

[https://www.digitalocean.com/community/tutorials/understanding-managed-databases](https://www.digitalocean.com/community/tutorials/understanding-managed-databases)

[https://www.cybertec-postgresql.com/en/postgresql-overview/solutions-who-uses-postgresql/](https://www.cybertec-postgresql.com/en/postgresql-overview/solutions-who-uses-postgresql/)

[https://medium.com/we-build-state-of-the-art-software-creating/why-should-i-use-postgresql-as-database-in-my-startup-company-96de2fd375a9](https://medium.com/we-build-state-of-the-art-software-creating/why-should-i-use-postgresql-as-database-in-my-startup-company-96de2fd375a9)