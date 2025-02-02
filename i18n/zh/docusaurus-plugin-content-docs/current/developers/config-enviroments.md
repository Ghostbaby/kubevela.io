---
title:  设置部署环境
---

通过部署环境，你可以为你的应用全局配置工作空间、联系电邮以及域名。通常情况下，部署环境分为 `test` （测试环境）、`staging` （生产镜像环境）、`prod`（生产环境）等。

## 创建环境

```bash
$ vela env init demo --email my@email.com
environment demo created, Namespace: default, Email: my@email.com
```

## 检查部署环境元数据

```bash
$ vela env ls
NAME   	CURRENT	NAMESPACE	EMAIL                	DOMAIN
default	       	default  	
demo   	*      	default  	my@email.com
```

默认情况下, 将会在 K8s 默认的命名空间 `default` 下面创建环境。

## 配置变更

你可以通过再次执行如下命令变更环境配置。

```bash
$ vela env init demo --namespace demo
environment demo created, Namespace: demo, Email: my@email.com
```

```bash
$ vela env ls
NAME   	CURRENT	NAMESPACE	EMAIL                	DOMAIN
default	       	default  	
demo   	*      	demo     	my@email.com
```

**注意：在部署环境之前创建的应用不会受到任何影响，部署环境只针对新创建的应用生效.**

## [可选操作] 配置域名（前提：拥有 public IP）

如果你的 k8s 集群已经被云厂商配置好并已为 ingress 分配了 public IP，那么你就可以在环境中配置域名来使用，之后你就可以通过该域名来访问你的应用，并且自动支持 mTLS 双向认证。

例如, 你可以使用下面的命令方式获得 ingress service 的 public IP：  

```bash
$ kubectl get svc -A | grep LoadBalancer
NAME                         TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                      AGE
nginx-ingress-lb             LoadBalancer   172.21.2.174    123.57.10.233   80:32740/TCP,443:32086/TCP   41d
```

命令响应结果的第四列就是 public IP。 为你的域名配置一条 `A` 记录吧：

```
*.your.domain => 123.57.10.233
``` 

如果你没有自定义域名，那么你可以使用如 `123.57.10.233.xip.io` 作为你的域名，其中 `xip.io` 将会自动路由到前面的 IP `123.57.10.233`。


```bash
$ vela env init demo --domain 123.57.10.233.xip.io
environment demo updated, Namespace: demo, Email: my@email.com
```

### 在 Appfile 中使用域名


由于你在部署环境中已经全局配置了域名, 就不需要在 route 配置中特别指定域名了。

```yaml
# in demo environment
servcies:
  express-server:
    ...

    route:
      rules:
        - path: /testapp
          rewriteTarget: /
```

```
$ curl http://123.57.10.233.xip.io/testapp
Hello World
```

