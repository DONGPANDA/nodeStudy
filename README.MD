# nodeStudy

## git
- 分布式 可以管理代码，合并代码
- svn集中式  速度慢，不停的备份

## git下载地址
https://git-scm.com/downloads
git安装选择在window下使用git并且在window下使用linux命令

## mac下
- 增加mac下的命令窗口 oh-my-zsh item2

## cd  changeDirectory


## 告诉git你是谁（否则无法提交）
- 查看当前git配置列表
```
git config --list
git config --global user.name github账号名
git config --global user.email github邮箱
提交的时候如果报错who are you 表示没配置
```
## 删除文件夹
```
rm -rf .git
```

## 要管理文件
- 初始化git，告诉git 哪个文件夹归你管理

> git仓库 不能嵌套


## mkdir创建目录

## touch 创建文件
可以创建以.开头的文件

## cat 查看文件

## vi
- i 插入
- ESC+:wq! 保存退出

## 增加暂存区
```
git add
```

> 在工作区的文件都是红色的,添加到暂存区的是绿色的

## 添加到历史区
```
git commit -m 'xxx'
```

## 查看状态
```
git status
```

## 查看提交日志
```
git log
```

## git diff
```
git diff 查看工作区和暂存区的diff
git diff --cached 查看暂存区和历史区的diff
git diff master 查看工作区和历史区的diff
```

## 移除本次操作
```
git reset HEAD 文件名 从暂存区撤回
git checkout  文件名 在工作区撤回上一次操作(修改,删除等,文件删除也可以撤回)
```

## 回滚,将工作区暂存区历史区用同一个版本全部覆盖掉
```
git reset --hard 版本号
跳到过去看未来git reflog
```

## 分支管理
```
git branch 查看分支
git branch 名字 创建分支
git checkout 名字 切换分支
git branch -D 名字,但是不能处于该分支
git checkout -b 名字 创建并切换到分支
只有将内容在分支上提交后,这个内容才属于分支,别的分支就看不到了
```

## 合并分支
```
在master上 git merge dev 快速转向
```

## 提交
```
git commit -a -m'信息' 支持提交过一次的文件
```

> 产生冲突需要手动解决冲突,删掉不需要的内容然后再次提交,就是说如果两个分支都对同一文件进行了修改并提交,在合并时就会冲突 (conflict)

## 提交到远程仓库
- git init
- touch .gitignore写上忽略内容
- 创建所需要提交的文件(空文件夹会被忽略,可以加一个隐藏文件.gitkeep)
- 提交到暂存历史区

## 链接远程仓库
```
git remote add origin 地址
origin随便写(代表地址),但是想修改可以在重新执行,然后使用 git remote rm 名字删掉之前的
git remote -v查看关联仓库
```