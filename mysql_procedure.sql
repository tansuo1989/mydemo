#mysql存储过程与自定义函数：
delimiter $

1.最简单的存储过程
create procedure test()
	begin
		select*form table limit 1;
	end
	$
使用：
call test$

2.使用变量：
create procedure f()
	begin
		declare	 a int default 1;
		declare b int default 2;
		select (a+b);
	end
	$

call fun $

3.给变量赋值  *****
create procedure f1()
	begin
		declare	 a int default 1;
		declare b int default 2;
		declare c int;
		set c:=a+2*b;
		select (c);
	end
	$

4.使用参数：
create procedure f2(in sid int)
	begin
    	select * from func where id=sid;
    end
    $

call f2(1) $

5.参数中的out 类型怎样使用？
create procedure f3(in sid int,out re int)
	begin
		set re:=0; #这一行不加也行
		set re:=sid+10; #使用参数的时候必须使用set ，但是变量则不用
	end
	$
call f3(3,@re) $
select @re $
##调用的时候需要加@,然后再通过select @参数名 来查询
##参考：http://www.cnblogs.com/Jasxu/p/xushouwei_mysql_in_out_inout_delimiter.html

6.inout 类型参数的使用:	
create procedure f5(inout age int)
	begin
		set age:=age+10;
	end
	$
使用时候需要先定义参数（变量):
set @age=3 $
call f5(@age) $
select @age $

7.查看已经创建的存储过程：
1）查看所有
show procedure status $ #结果会多得吓到你
2)查看某个库下的：
select name from MySQL.proc where db='dbname' and type="procedure" $ 
3)使用like查询
select procedure status like "%f%" $
4)查看所有信息：
select* from mysql.proc whre db='dbname' $
如果要看得清晰一些，可以加个 \G
select* from mysql.proc whre db='dbname' \G $ 
其实你可能只关心其中的name和body
select name,body from mysql.proc where db="mytest" \G $
5)查看创建语句：
show create procedure proc_name;
show create function func_name;

8.删除存储过程：
drop procedure f $

9.修改存储过程：
使用ALTER语句可以修改存储过程或函数的特性，只能修改特性，如果想修改过程体只能删除存储过程再重新创建。
ALTER {PROCEDURE|FUNCTION} sp_name [characteriss]
#参考：http://blog.csdn.net/zen99t/article/details/50751100

10.使用存储过程：
call f $
call db.f $ #其它库的
call f(1) $ #传参数
call f(1,@re) $
select @re $ #有out 类型的参数的时候


11.存储函数(自定义函数)：
create function ff4()
	returns varchar(50)
	begin
	return (select name from func limit 1); #只能返回一个值，不能返回多列或多行，不能用insert..
	end
	$

使用：
select ff4() $

create function ff()
	returns int ##返回类型，一定要写，这个地方不能加分号
	begin
	declare a int default 1;
	declare b int default 2;
	declare c int;
	set c:=a+2*b;
	return c;
	end
	$
调用：
select ff() $

create function ff5(age int)
	returns int #必须是returns,而不是return
	begin
	return age*age;
	end
	$
调用：
select ff5(9) $

create function myset2()
	returns int
	begin
		declare total int default 2;
		declare b int default 3;
		declare a int default 1;
		set total=b+3*a;
		return total;
	end
	$

create function myset4(num int)
	returns int
	begin
	    declare total int;
		set total:=num*num+10;
		return total;
	end
	$

#可以在函数体内执行insert操作，但不能获取返回值
create function ss2(fname char(10))
 returns text
 begin
	insert into func (name) values(fname);#直接return 这一行是不行的
	return "finish";	
 end
 $


#给变量赋值用set key=value 或者set key:=value 效果一样

#比较完整的教程：http://www.jb51.net/article/70677.htm

12.使用循环：

1)while循环：
create function cc2(num int)
	returns int
	begin
		declare a int default 1;
		declare total int default 0;
		while a<num+1 do
			set total=total+a;
			set a=a+1;
		end while;
		return total;
	end
	$
2)loop循环：
create function myloop1(num int)
	returns int
	begin
	declare len int default num;
	declare total int default 0;

	status:loop
       set total=total+10;
       set len=len-1;
       if len<1 then
         leave status;
       end if;  #这个分号必须加
	end loop status;

	return total;
	end
	$
3)repeat 循环：
create function myrepeat1(num int)
	returns int
	begin
	declare start int default 1;
	declare total int default 1;

	repeat
		set start=start+1;
	    set total=total*(start-1);
    until
     	start>num  #这里不能加分号
    end repeat;

    return total;
    end
    $


13.使用判断：
create function myif2(num int)
	returns char(10)
    begin
	    if num<10 then
	    	return "小于10";
	    elseif num=10 then
	    	return "你猜对了";
	    else 
	    	return "大于10";
	    end if;
    end
    $
14.查询某个库下的所有自定义函数：
select name from MySQL.proc where db='dbname' and type="procedure" $ 



##其它知识点：
1)批量set:select … into 语句
2)switch:
case
when ... then ....
.....
end case;






