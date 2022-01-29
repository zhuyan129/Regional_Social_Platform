# Regional_Social_Platform

#### 项目人员
zy mzj yjc fy hk






#### 项目配置

拉取代码并新建自己的分支

```shell
git clone https://github.com/zhuyan129/Regional_Social_Platform.git
cd Regional_Social_Platform
```

#### git分支操作

1.创建并切换到新分支

```
git checkout -b 分支名
```

2.切换到某个分支，切换到某个分支后，文件所做的修改均在该分支

```
git checkout 分支名
```

3.将修改后的文件提交

```
git add 更改文件的路径（也可直接使用git add . 表示暂存所有更改的文件）
git commit -m “关于此次提交的说明” 
```

4.合并分支：将所要修改的文件更改完毕后，切换到master分支并将你创建的分支与master分支合并，从而将更改同步到master分支上

注意：在合并前，最后拉取一遍远程的master分支，确保你的master分支为最新，避免后续出现冲突

```
git checkout master // 切换到master分支
git pull origin master // 将master分支与远程仓库同步
git merge 你的分支名 // 将你新建的分支与master分支合并
git push origin master // 将本地master分支推送到远程仓库，操作完成后gitee上的仓库与本地就是一致的~
```

5.删除分支：

```
git branch -d 分支名
```

