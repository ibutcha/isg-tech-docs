# Redis
![Alt Text](../.vuepress/public/redis_logo.png)

## Introduction 
The name Redis stands for REmote DIctionary Server since it refers to the data structure server.  Redis basically is known as a data structure server. An in-memory data structure store supporting many data types like strings, hashes, sets, sorted sets, etc. Essentially, it is a key-value store.

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
WIP

## Basic Set-up
* Stand Alone
   * https://redis.io/topics/quickstart
* Try Redis online
  * http://try.redis.io/
* Clustering setup 

## Use Cases
* If you need persistence, simple replication and want to use list/set/hash data structures in the database, then Redis is a good choice.

## References
- [Redis vs Memcached- Review, Features and Comparison](https://pepipost.com/blog/redis-vs-memcached-review-features-and-comparison/)
- [Redis Introduction](https://redis.io/topics/introduction)