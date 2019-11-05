##### 1.技能掌握点：
1. 搭建git服务器，实现ssh免密登录。
2. 掌握docker基本知识，使用docker部署项目，利用git一键部署项目上线
3. 注册dockerHub账号，掌握镜像拉取，掌握镜像的创建、上传、更新提交等。
4. 掌握java基础知识，可以使用springBoot搭建后台服务。


##### 2.LINUX命令---cat
###### ```cat [options] file```，主要掌握-n和-b
1. ```-n 或 --number```： 由 1 开始对所有输出的行数编号。
2. ```-b 或 --number-nonblank```：和 -n 相似，只不过对于空白行不编号。
3. ```cat -b a.txt```, 将a.txt文件内容输出到控制台
4. ```cat -b a.txt > b.txt```,将a.txt文件内容覆盖到b.txt文件
5. ```cat -b a.txt >> b.txt```,将a.txt文件内容追加到b.txt文件

##### 3.LINUX命令---find
1. ```find . -name "*.c"```,将目前目录及其子目录下所有延伸档名是 c 的文件列出来。

##### 4.LINUX命令---创建新文件
1. ```cat >> new.txt```，输入内容，按Ctr+d结束输入。
2.```touch new.txt```,直接创建一个新文件。