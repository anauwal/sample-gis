## 介绍

vuex 文件目录

### 说明

如果项目非常大，还需要 module 来管理的话，可以按照当前规则，进行改造即可。

### 建议

1. 所有的 state 获取，都用 getters 封装后使用，这样就很容易知道 get 了哪些数据，让项目一目了然
2. mutations 竟可能干净，一个 mutation 中的代码尽可能只写一行
   以上两点会让代码更清晰
