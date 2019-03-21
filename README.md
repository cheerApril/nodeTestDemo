MYSQL 8.0.15 安装笔记:
<Br/>在Mysql 的官网上 找到自己系统的版本下载 :https://dev.mysql.com/downloads/installer/,<Br/>
<Br/>本人的系统是 Windows 7/x84 而且是自己个人开发用 就选择了 community -> MySQL on windows来下载,注意:安装相关的版本的时候MySQL需要您注册一个MYSQL的账号。<Br/>
解压安装下来的压缩包,CMD（要管理员身份哦）进入到解压包的bin目录下(自己文件夹:D:\mysql-8.0.15-winx64\bin);    
<Br/>在该目录下创建my.ind文件(https://blog.csdn.net/coffee_fighter/article/details/87632316)<Br/>
然后在该目录下运行mysqld --initialize --console（要记得 A temporary password is generated for rooot@localhost: XXXXX） XXX的内容就是你等下进入SQL server的密码
依次执行: mysqld --install MySQL ; 
<Br/>net start MySQL（主要这里要先把MySQL的安装路径放到电脑的环境变量里面,不然无法执行,因为我自己出了这个问题晕了...）
<Br/>进入mySQL mysql -u root -p  (输入刚才记得的密码);
<Br/> 修改密码 --- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '新密码';  

<Br/>  来自菜鸟教程: http://www.runoob.com/mysql/mysql-create-tables.html

创建 MySql 的表时，表名和字段名外面的符号 ` 不是单引号，而是英文输入法状态下的反单引号，也就是键盘左上角 esc 按键下面的那一个 ~ 按键，坑惨了。

反引号是为了区分 MySql 关键字与普通字符而引入的符号，一般的，表名与字段名都使用反引号。



<Br/>GROUP BY 语句根据一个或多个列对结果集进行分组。在分组的列上我们可以使用 COUNT, SUM, AVG,等函数。(这个是平时项目不常用到但是很实用的方法)

<Br/>GROUP BY 语法
    SELECT column_name, function(column_name)
    FROM table_name
    WHERE column_name operator value
    GROUP BY column_name;
<br/>group by 
可以实现一个最简单的去重查询，假设想看下有哪些员工，除了用 distinct,还可以用：
SELECT name FROM employee_tbl GROUP BY name;
返回的结果集就是所有员工的名字。
<br/>
2、分组后的条件使用 HAVING 来限定，WHERE 是对原始数据进行条件限制。几个关键字的使用顺序为 where 、group by 、having、order by ，例如：
SELECT name ,sum(*)  FROM employee_tbl WHERE id<>1 GROUP BY name  HAVING sum(*)>5 ORDER BY sum(*) DESC;

<br/> DAY 20190311 MySQL在Windows下创建数据库databases还有table数据表不能大小写的问题,查了一下资料说lower_case_table_names = 2 在my.ini设置添加就没事了，试过了不行,所以我就重装了一下MYSQL了, 遇到的坑:
<br/> 1. datadir=D:\\mysql-8.0.15-winx64\\Data  保存数据的名字不能为大写,不然会报错
<br/> 2. my.ini 保存下来的编码一定是要ANSI格式文件, 不然会报错:found option without preceding group
<br/> 3. 数据库命名还是用下划线吧,别用大小写了~！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！

<br/> 20190312 const test = [];创建的是一个数组 其实是申请了内存的一换数据给test这个变量, const test = new Array(1,2,35,6);
test[0] = 2; const test = test; 修改之后重新赋值给当前变量会导致原来的数据库会混乱，最好的处理方式就是创建一个新的变量变成新的array数据. 
<br/> 《》select version(); 查看MYSQL 版本


<br/>  https://www.jianshu.com/p/9c78548caffa mocha官方翻译文档
<br/> 以下为建立路径所使用的几个特殊符号，及其所代表的意义。

“./”：代表目前所在的目录。

“../”：代表上一层目录。

以”/”开头：代表根目录。

