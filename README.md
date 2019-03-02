MYSQL 8.0.15 安装笔记:
在Mysql 的官网上 找到自己系统的版本下载 :https://dev.mysql.com/downloads/installer/,本人的系统是 Windows 7/x84 而且是自己个人开发用 就选择了 community -> MySQL on windows来下载,注意:安装相关的版本的时候MySQL需要您注册一个MYSQL的账号。



解压安装下来的压缩包,CMD进入到解压包的bin目录下(自己文件夹:D:\mysql-8.0.15-winx64\bin);    在该目录下创建my.ind文件(https://blog.csdn.net/coffee_fighter/article/details/87632316)
然后在该目录下运行mysqld --initialize --console
