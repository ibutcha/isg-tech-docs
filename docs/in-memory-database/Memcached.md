# Memcached

[[toc]]
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

## Clustering 


## Basic Set-up
*  Stand Alone 
    * https://github.com/memcached/memcached/wiki/Install

* Clustering setup 

## Use Cases