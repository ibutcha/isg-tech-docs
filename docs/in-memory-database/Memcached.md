# Memcached
![Alt Text](../.vuepress/public/memcached-logo.png)

## Introduction 
Memcached is a high-performance, distributed memory object caching system, generic in nature, but originally intended for use in speeding up dynamic web applications by alleviating database load.
You can think of it as a short-term memory for your applications.

## Features
* Common Features
    * Hashing
	* Consistent Hashing
	* Storing Binary Data or Strings
	* Serialization of Data Structures
	* Compression
	* Timeouts
	* Mutations
	* Get
	* Multi-Get
* Less Common Features
	* Get-By-Group-Key
	* Noreply/Quiet
    * Multi-Set

## Limitations
* No Clustering 
* No persistence/No Data retention meaning if instance is killed all data will be wiped out
* The key used is a string with a maximum length of 250 bytes
* The value has a 1 megabyte size limit, which can be increased with the –I parameter
It is not highly available

## Basic Set-up
*  Stand Alone 
    * https://github.com/memcached/memcached/wiki/Install

## Use Cases
* If you just need to get/put a piece of data across some servers, memcached is probably the easiest.
* When caching relatively small and static data, Memcached is more preferable.


## References
- [Redis vs Memcached- Review, Features and Comparison](https://pepipost.com/blog/redis-vs-memcached-review-features-and-comparison/)
- [CommonFeatures](https://github.com/memcached/memcached/wiki/CommonFeatures)
- [Memcached About](https://memcached.org/about)
- [How should I decide which product to use: Memcached, Redis, Aerospike, or MemSQL?](https://www.quora.com/How-should-I-decide-which-product-to-use-Memcached-Redis-Aerospike-or-MemSQL)