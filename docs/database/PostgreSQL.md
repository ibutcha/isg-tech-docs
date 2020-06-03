# PostgreSQL

  

![Alt Text](../.vuepress/public/postgresql-logo.png)

  

## Introduction

  

PostgreSQL, often simply "Postgres", is an object-relational database management system (ORDBMS) with an emphasis on extensibility and standards-compliance.

PostgreSQL is ACID-compliant, transactional, has updatable and materialized views, triggers, and foreign keys. It also supports functions and stored procedures.

## Advanced Features

- User-defined types

- Table inheritance

- Sophisticated locking mechanism

- Foreign key referential integrity

- Views, rules, subquery

-  Savepoints

- Multi-version concurrency control (MVCC)

  

## Strengths  
- ACID Compliant

- Highly Extensible

## Use Cases

-   PostgreSQL can be used for an Online Transaction Processing and Analytics.

-   PostgreSQL can be used to processed geometric data in various formats using  **PostGIS**.



## Limitations

  

- Slower performance compared to other database

- Lacks integrated mechanisms for automatic failover and recovery between database replicas

- Has no native mechanisms to partition (shard) the database across a cluster of nodes

## Comparison with other Products

-  **MySQL**

- PostgreSQL support modern applications feature like JSON, XML etc. while MySQL only supports JSON.

- PostgreSQL is complete ACID compliant while MySQL is only ACID compliant when used with InnoDB and NDB

  

## Basic Installation and Setup

  

### Manual Installation

  

-  [Installation for Linux](https://www.postgresql.org/download/linux/ubuntu/)

-  [Installation for Windows](https://www.postgresql.org/download/windows/)

-  [Installation for MacOS](https://www.postgresql.org/download/macosx/)

  

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


Create User


C
  

## Roles
 PostgreSQL manages database access permissions by using the concept of  **role** . A **role** can be thought as a database user or a group of database users, depending on how the role is setup. This concept of roles subsumes the concept of *users* and *groups*.

A Database role in PostgreSQL can have the following attributes that can define it privileges.

Login privilege

```CREATE ROLE _name_ LOGIN```
```CREATE USER _name_```

Superuser

```CREATE ROLE  _`name`_  SUPERUSER```

Database creation

``CREATE ROLE  _`name`_  CREATEDB``.

Role Creation

``CREATE ROLE  _`name`_  CREATEROLE``.

Initiating replication

``CREATE ROLE  _`name`_  REPLICATION LOGIN``.

password

``CREATE ROLE  _`name`_  PASSWORD '_`string`_'``.

It is frequently convenient to group users together to ease management of privileges: that way, privileges can be granted to, or revoked from, a group as a whole. In PostgreSQL this is done by creating a role that represents the group, and then granting _membership_ in the group role to individual user roles.

first to set a group role, create first a role
``` CREATE ROLE _`name`_;```

Once the group role exists, you can add and remove members using the GRANT  AND REVOKE commands:

``GRANT _`group_role`_ TO _`role1`_, ... ;``
``REVOKE _`group_role`_ FROM _`role1`_, ... ; ``


  
## Cluster Configuration

In PostgreSQL, we can create a High Availability cluster configuration by continuous archiving, alongside with more than one standby servers that ready to take operations if the primary server fails, this capability is called **warm standby** or **log shipping**.

Before we deep dive into Log-shipping, first we need to understand some basic concepts:

-  **Primary/Master Server -** A server that can modify/write data.

-  **Standby Server** - A server that tracks the changes in the master.

-  **Warm Standby Servers** - A Server that cannot be connected unless its promoted to

master.

-  **Hot standby servers** - A server that accepts connections and serves only as read-only queries.

-  **WAL or Write Ahead Log** - a log file where all the modifications to the database are written

  

**Log-shipping Standby Servers** - In this concept, the primary server is sending directly the WAL records from another standby servers. In PostgreSQL this is called **file-based log shipping** transferring WAL records one file (WAL segment) at a time. WAL files (16MB) can be shipped easily and cheaply over any distance, whether it be to an adjacent system, another system at the same site, or another system on the far side of the globe.

  

please do take note that log shipping is *asynchronous* by default. As a result of this, there is a possibility of data loss that the primary server may suffer. if we want to change our execution process for log-shipping standby servers, we can choose to from following:

-  **Streaming replication** - allows a standby server to stay more

up-to-date than is possible with file-based log shipping. The standby

connects to the primary, which streams WAL records to the standby as

they're generated, without waiting for the WAL file to be filled.

  

-  **Cascading replication** - allows a standby server to accept replication

connections and stream WAL records to other standbys, acting as a

relay. This can be used to reduce the number of direct connections to

the master and also to minimize inter-site bandwidth overheads.

-  **Synchronous replication** - offers the ability to confirm that all

changes made by a transaction have been transferred to one or more

synchronous standby servers. This extends that standard level of

durability offered by a transaction commit.

## Performance Tuning Recommendations

Performance tuning is all about trade offs, we can't optimize everything in our database, sometimes we might accept a slow-running query in one part of your application that isn’t used so often in order to get a lightning-fast response time on a frequently performed query.

  

Here are the concepts that we need to check to further accelerate the performance of our database.

  

-  **Hardware** - this is the first thing we need to check in terms of database optimization, some of the most important factors to check is, available memory, CPU and disk space, and performance.

-  **Postgres configurations** - there are several postgres options or configurations that can affect drastically database performance like,_max_connections_meffective_cache_size_,_work_mem_ and etc.

-  **Vacuuming** - A vacuum is a scan that marks tuples as no longer needed so that they can be overwritten. Failure to do this can mean that you have dead tuples lingering in your system. These dead tuples are often called _bloat._ Bloat originates mostly from records that are being deleted, updated, or inserted.

-  **Analyze query performance** - The most useful tool in tuning your database is the SQL command EXPLAIN ANALYZE.This allows you to profile each SQL query your application performs and see exactly how the PostgreSQL planner will process the query

-  **Indexing**-Just as in a book, indexes give information to your database engine about roughly where in the system the data you’re looking for lives. To index our system properly, we need an understanding of our data and how we’re trying to access it.

  
  ### Other Resources for PostgreSQL

 - [awesome-postgres](https://github.com/dhamaniasad/awesome-postgres) - A curated list of awesome PostgreSQL software, libraries, tools and resources
 - [PostgreSQL Primer for busy people](https://zaiste.net/postgresql_primer_for_busy_people/) - A  Single Web page resource and reference guide for getting started with PostgreSQL.
 - [PG Exercises](https://pgexercises.com/) -   Free online exercises for learning PostgreSQL.
  

##### References

  

[https://www.tutorialandexample.com/postgresql-tutorial/](https://www.tutorialandexample.com/postgresql-tutorial/)

  

[https://github.com/docker-library/docs/blob/master/postgres/README.md](https://github.com/docker-library/docs/blob/master/postgres/README.md)

  

[https://www.digitalocean.com/community/tutorials/understanding-managed-databases](https://www.digitalocean.com/community/tutorials/understanding-managed-databases)

  

[https://www.cybertec-postgresql.com/en/postgresql-overview/solutions-who-uses-postgresql/](https://www.cybertec-postgresql.com/en/postgresql-overview/solutions-who-uses-postgresql/)

  

[https://medium.com/we-build-state-of-the-art-software-creating/why-should-i-use-postgresql-as-database-in-my-startup-company-96de2fd375a9](https://medium.com/we-build-state-of-the-art-software-creating/why-should-i-use-postgresql-as-database-in-my-startup-company-96de2fd375a9)

  

[https://www.postgresql.org/docs/current/warm-standby-failover.html](https://www.postgresql.org/docs/current/warm-standby-failover.html)

  

[https://aws.amazon.com/blogs/database/managing-postgresql-users-and-roles/](https://aws.amazon.com/blogs/database/managing-postgresql-users-and-roles/)