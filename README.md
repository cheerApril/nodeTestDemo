MYSQL 8.0.15 安装笔记:
<Br/>在Mysql 的官网上 找到自己系统的版本下载 :https://dev.mysql.com/downloads/installer/,<Br/>
<Br/>本人的系统是 Windows 7/x84 而且是自己个人开发用 就选择了 community -> MySQL on windows来下载,注意:安装相关的版本的时候MySQL需要您注册一个MYSQL的账号。<Br/>
解压安装下来的压缩包,CMD（要管理员身份哦）进入到解压包的bin目录下(自己文件夹:D:\mysql-8.0.15-winx64\bin);    
<Br/>在该目录下创建my.ind文件(https://blog.csdn.net/coffee_fighter/article/details/87632316)<Br/>
然后在该目录下运行mysqld --initialize --console（要记得 A temporary password is generated for rooot@localhost: XXXXX） XXX的内容就是你等下进入SQL server的密码
<Br/>依次执行: mysqld --install MySQL ; net start MySQL
<Br/>进入mySQL mysql -u root -p  (输入刚才记得的密码);
<Br/> 修改密码 --- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '新密码';  
