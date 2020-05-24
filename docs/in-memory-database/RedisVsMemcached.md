# Redis vs Memcached
|    Comparison Index    | Redis |    Memcached    |
|-------------------------|-------|-----------------|
|    Primary database model    | Redis also follows Key-value store database model. |    Memcached follows Key-value store database model.    |
|    Developed By    | Redis is developed by Salvatore Sanfilippo. |    Memcached is developed by Danga Interactive.    |
|    License    | Redis is also free and open source. |    Memcached is free and open source.    |
|    Implementation language    | Redis is also implemented in C language. |    Memcached is implemented in C language.    |
|    Server operating systems    | BSD Linux OS X Windows |    FreeBSD Linux OS X Unix Windows    |
|    Supported programming languages    | C,C#,C++, Clojure, Crystal, D, Dart, Elixir, Erlang, Fancy, | Go, Haskell, Haxe, Java, JavaScript (Node.js), Lisp, Lua, MatLab, |
|    Server-side scripts    | Lua |    No    |
|    Partitioning methods    | Sharding |    None    |
|    Replication methods    | Master-slave replication |    None    |
|    Transaction concepts    |    No    |    Optimistic locking, atomic execution of commands blocks and   scripts    |
|    Concurrency    |    Yes    |    Yes    |
|    Durability    |    No    |    Yes    |
|    User concepts    |    Yes    |    Simple password-based access control    |
|    Installation    |    Installing Redis is so much easier. No dependencies required.    |    Memcached is little bit complicated to install and run.    |
|    Memory Usage    |    Redis is more memory efficient, only after you use Redis   hashes.    |    MemcacheD is more memory efficient than Redis because it   consumes comparatively less memory resources for metadata.    |
|    Persistence    |    Redis can handle persistent data. By default it syncs data to   the disk at least every 2 seconds, offering optional & tuneable data   persistence meant to bootstrap the cache after a planned shutdown or an   unintentional failure. While we tend to regard the data in caches as volatile   and transient, persisting data to disk can be quite valuable in caching   scenarios.    |    Memcached doesn't use persistent data. While using Memcached,   data might be lost with a restart and rebuilding cache is a costly process.    |
|    Replication    |    Redis supports master-slave replication.    |    Memcached does not support replication.    |
|    Storage type    |    Redis is like a database that resides in memory. It executes   (reads and writes) a key/value pair from its database to return the result   set. That's why it is used by develepors for real-time metrics and analytics.    |    MemcacheD stores variables in its memory and retrieves any   information directly from the server memory instead of hitting the database   again.    |
|    Execution Speed and Performance    |    Redis can neither handle high traffic on read nor heavy   writes.    |    MemcacheD is very good to handle high traffic websites. It can   read many information at a time and give you back at a great response time.    |
|    Data Structure    |    Redis has stronger data structures, which can handle not only   strings integers but also binary-safe strings, lists of binary-safe strings,   sets of binary-safe strings and sorted sets.    |    MemcacheD uses only strings and integers in its data   structure. So, everything you save can either be a string or an integer. It   is complicated because with integers, the only data manipulation you can do   is adding or subtracting them. If you need to save arrays or objects, you   will have to serialize them first and then save them. To read them back, you   will need to un-serialize.    |
|    Key Length    |    Redis' key-length has a maximum of 2GB.    |    Memcached's key length has a maximum of 250 bytes.    |

## References
- [Redis Vs Memcached](https://www.javatpoint.com/redis-vs-elasticsearch)
- [Memcached Vs Redis](https://www.oditeksolutions.com/memcached-vs-redis/)