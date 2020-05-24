# Redis

[[toc]]
## Introduction 
An in-memory data structure store supporting many data types like strings, hashes, sets, sorted sets, etc. Essentially, it is a key-value store.

## Features
* Support data structure such as: 
    * strings
    * hashes
	* lists 
	* sets 
	* sorted sets with range queries 
	* bitmaps 
	* hyperloglogs 
    * geospatial indexes with radius queries and streams.
* Built-in replication, Lua scripting, LRU eviction, transactions and different levels of on-disk persistence
* Automatic Partitioning(Redis Cluster)
* Atomic operations
* Master-slave asynchronous replication
* Transactions
* Pub/Sub
* Lua scripting
* Keys with a limited time-to-live
* LRU eviction of keys
* Automatic failover

## Limitations
* No official support for Windows build
* May work with solaris-deprived systems like Smart OS, but the support is best effort
* Requires Client Support
* Limited Multi-Key Operation Support

## Clustering 


## Basic Set-up
*  Stand Alone 
    * https://redis.io/topics/quickstart
	* http://try.redis.io/

* Clustering setup 

## Use Cases