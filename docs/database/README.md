# Database

[[toc]]
## Introduction
* A database is an organized collection of structured information, or data, typically stored electronically in a computer system. 
* A database is usually controlled by a Database Management System.
* Most databases uses structured query language **(SQL)** for writing and querying data.
* Databases can be categorized into two Relational database and Non-Relational database.


## Relational vs NoSQL Database
 * **Relational Databases** organizes data into tables which can be linked or related based on 	data that is common to each.
Commonly Used Relational Databases
	* MySQL
	* PostgreSQL
	* Oracle
 * **NoSQL Databases** have dynamic schemas for unstructured data, and data is stored in many ways: They can be column-oriented, document-oriented, graph-based or organized as a KeyValue store.
Commonly Used NoSQL Databases.
	* MongoDB
	* Apache Cassandra
	* Redis

**When to use Relational or NoSQL Database?** 

 * Use Relational Database when
 * Use NoSQL Database when



## Choosing the Right Database

### CAP Theorem
The theorem states that in any given pair of request , a distributed system only guarantees two out of three attributes.

*  **C**onsistency

*  **A**vailability

*  **P**artition Tolerance

  

#### Consistency

* guarantees that the client will get the most updated version of the data.

#### Availability

* guarantees that in a non-failing node, the client will receive a reasonable response within the reasonable amount of time.

#### Partition Tolerance

* guarantees that in a distributed system, the system will continue to function in the face of network partitions.

  

As stated above about CAP Theorem, it can also categorized systems into three categories:

1.  #### Consistency and Availability (CA)

* It refers to a systems that uses relational traditional technologies

2.  #### Consistency and Partition Tolerance (CP)

* It refers to a system that forfeits availability in the occurrence of nertwork partition or failuure

3.  #### Availability and Partition Tolerance (AP)

* it refers to a system that guarantees availability and partitiion tolerance but not consistency.


In general, CAP Theorem dictates that in case or occurence of network partitions, we must choose between Consistency and Availability.

 

###  ACID
In order to maintain consistency in database transactions, certain principles must be followed,

*  **A**tomicity

*  **C**onsistency

*  **I**solation

*  **D**urability

  

#### Atomicity

* All transactions must either be taken place at once or not at all, there must be no midway. Transactions do not occur partially.

* "All or nothing" rule

#### Consistency

* This means that integrity constraints must be maintained before and after the database transaction.

* This refers to the correctness of database.

  

#### Isolation

* This means that multiple transactions can occur concurrently without leading to inconsistency of database,

#### Durability

* This means that once the database transaction are completed, the updates and modification on the database must be stored in and written to disk. and they persist even if the system fails.

 
###  BASE

Unlike ACID which focuses on data consistency, BASE properties gives up the idea of consistency as to have a greater availability and partition tolerance. The three properties of BASE are the ff.

#### Basically Available

* states that the data will be available even in the presence of multiple failures or network partitions.

#### Soft State

* The state of the system could change over time.

#### Eventually Consistent

* The system will eventually consistent once it stops receiving input

  

###### References
[https://www.geeksforgeeks.org/acid-properties-in-dbms/?ref=lbp](https://www.geeksforgeeks.org/acid-properties-in-dbms/?ref=lbp)
[https://www.dummies.com/programming/big-data/hadoop/acid-versus-base-data-stores/](https://www.dummies.com/programming/big-data/hadoop/acid-versus-base-data-stores/)
[https://www.lifewire.com/abandoning-acid-in-favor-of-base-1019674](https://www.lifewire.com/abandoning-acid-in-favor-of-base-1019674)

