# graphql-casbin-example

管理ユーザーと一般ユーザーが存在するときに、管理ユーザーにのみ呼び出せる resolver を作ってみる。

## usage

サーバーを立ち上げる。

```
pnpm run dev
```

localhost:4000 で開かれるのでそっからクエリを叩く。このとき `user-role` ヘッダーを指定する。

```graphql
query Query {
  getSomethingForAdmin
}
```

ヘッダーに `user-role: admin` が指定されているときだけ resolver が呼び出せる。`user` のときなどは Permission denied が返ってくる。

```json
{
  "user-role": "admin"
}
```
