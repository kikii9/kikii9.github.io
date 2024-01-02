---
sidebar: auto
---

# nodejs服务端

# SQL

## 一、基本用法

### 查询

SELECT 列 FROM 表 (*为所有)
查询表user中id等于1的数据

```sql
SELECT * FROM user WHERE id = 1
```



### 插入

INSERT INTO 表 (列1,列2) VALUES (值1,值2)
插入表user数据，name等于张三，pwd等于123456

```sql
INSERT INTO user (name,pwd) VALUES ('张三','123456')
```



### 修改

UPDATE 表 SET 列 = 值 WHERE 列 = 值
修改表user中id等于2的数据，pwd为123123

```sql
UPDATE user SET pwd = '123123' WHERE id = 2
```

修改多个列

```sql
UPDATE user SET pwd = '123123', status = 1 WHERE id = 2
```



### 删除

DELETE FROM 表 WHERE 列 = 值
删除user表中id等于3的数据

```sql
DELETE FROM user WHERE id = 3
```



## 二、

### WHERE字句

```sql
... WHERE id = 3
... WHERE id != 3
... WHERE id > 3
... WHERE id < 3
... WHERE id < 3 AND status=0
... WHERE id < 3 OR name='张三'
```



### 排序

根据id升序排序

```sql
SELECT * FROM user ORDER BY id ASC
```

根据name降序排序

```sql
SELECT * FROM user ORDER BY name DESC
```

多重排序

```sql
SELECT * FROM user ORDER BY id ASC,name DESC
```



### 函数

COUNT(*)  返回条数

查询user表中status为0的总条数

```sql
SELECT COUNT(*) FROM user WHERE status = 0
```

AS  设置别名

将查询出的结果，列名设置别名为total

```sql
SELECT COUNT(*) AS total FROM user WHERE status = 0
SELECT name AS uname,pwd AS pass FROM user
```

