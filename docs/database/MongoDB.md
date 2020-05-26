# MongoDB v4.2
*MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.*

![Alt Text](../.vuepress/public/mongo-db-icon.png)


[[toc]]
## Introduction
   MongoDB is a free and open-source cross-platform [document-oriented database](https://en.wikipedia.org/wiki/Document-oriented_database) program. Classified as a NoSQL document database, the data structure is composed of field and value pair which are similar to [JSON Objects](https://www.json.org/json-en.html). 
   
   The values of fields may include other documents, arrays, and arrays of documents. 
        
    { 
        "_id": "5cf0029caff5056591b0ce7d", 
        "fullName": "Charlie Santos",                               
        "position": "Full-Stack Developer",                         
        "department": "ISG/SDD/SDC-DevOps",                        
        "skills": [
                "API Design",
                "Application Development"
         ]
    }
   
   MongoDB is developed by MongoDB Inc., and is published under a combination of the Server Side Public License and the Apache License.
   
## Key Features
   - **ACID Guarantees** - Distributed, cross-shard transactions, global point-in-time reads, and mutable shard key values.
   - **Enterprise Security** - Client-side field level encryption, multiple CAs with zero downtime certificate rotation, and 3x lower auditing overhead. 
   - **High Performance** - MongoDB provides high performance data persistence. In particular to the ff:
      - Support for embedded data models reduces I/O activity on database system.
      - Indexes support faster queries and can include keys from embedded documents and arrays.
      
   - **Rich Query Language** - MongoDB supports a rich query language to support:
      - [Read and Write Operations(CRUD)](https://docs.mongodb.com/manual/crud/)
      - [Data Aggregation](https://docs.mongodb.com/manual/core/aggregation-pipeline/)
      - [Text Search](https://docs.mongodb.com/manual/text-search/)
      - [Geospatial Queries](https://docs.mongodb.com/manual/tutorial/geospatial-tutorial/)
   
   - **High Availability** - MongoDB's replication facility, called replica set. It provides:
      - Automatic failover
      - Data redundancy 
  
      *A [replica set](https://docs.mongodb.com/manual/replication/) is a group in MongoDB servers that maintain the data set, providing redundancy and increasing data availability.*
     
   - **Horizontal Scalability** - MongoDB provides horizontal scalability as part of its core functionality:
      - [Sharding](https://docs.mongodb.com/manual/sharding/#sharding-introduction) distributes data across a cluster of machines.
      - Starting in 3.4, MongoDB supports creating zones of data based on the [shard key](https://docs.mongodb.com/manual/reference/glossary/#term-shard-key). In a balanced cluster, MongoDB directs reads and writes covered by a zone only to those shards inside the zone. See the [Zones](https://docs.mongodb.com/manual/core/zone-sharding/#zone-sharding) manual page for more information. 

   - **Support for Multiple Storage Engines** - MongoDB supports [multiple storage engines](https://docs.mongodb.com/manual/core/storage-engines/):
      - [WiredTiger Storage Engine](https://docs.mongodb.com/manual/core/wiredtiger/) (including support for [Encryption at Rest](https://docs.mongodb.com/manual/core/security-encryption-at-rest/))
      - [In-Memory Storage Engine.](https://docs.mongodb.com/manual/core/inmemory/)
      
In addition, MongoDB provides pluggable storage engine API that allows third parties to develop storage engines for MongoDB.

## MongoDB Atlas
 MongoDB atlas is a fully-managed cloud database (database-as-a-service). We don't need to handles all the complexity of deploying, managing the underlying MongoDB infrastructure. 
 With atlas, we'll be more focus on the application development. 
 
To learn more about atlas, kindly follow this [link](https://docs.atlas.mongodb.com/).
  

## Installation  
  - [Using Docker Image](https://hub.docker.com/_/mongo)
  - [Install MongoDB Locally](https://docs.mongodb.com/guides/server/install/)
  - [MongoDB AWS Set-Up](https://aws.amazon.com/quickstart/architecture/mongodb/)
  - [MongoDB Community Edition Set-up](https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials)
  - [MongoDB Enterprise Edition Set-up](https://docs.mongodb.com/manual/installation/#mongodb-enterprise-edition-installation-tutorials)
  - [Upgrade Community Edition to Enterprise Edition Tutorials](https://docs.mongodb.com/manual/installation/#upgrade-community-edition-to-enterprise-edition-tutorials)
  
To get started, kindly follow this [link](https://docs.mongodb.com/manual/tutorial/getting-started/)

##### References
 - [Supported Platform](https://docs.mongodb.com/manual/installation/#supported-platforms)
 - [RDBMS to MongoDB Migration Guide](https://webassets.mongodb.com/_com_assets/collateral/RDBMStoMongoDBMigration.pdf)
 - [MongoDB Tools](http://mongodb-tools.com/)
 - [Limitations of MongoDB Transactions](http://www.dbta.com/Columns/MongoDB-Matters/Limitations-in-MongoDB-Transactions-127057.aspx)
