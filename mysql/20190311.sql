ALter TABLE  admin_users RENAME to admin_user;
alter table user modify account varchar(11) not null; #sequelize 数据类型没有char
alter table user modify name varchar(6) not null;