<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <form action="login" method="post">
        <#if msg??>
            ${msg}
        </#if>
    用户名 ： <input type="text" name="username" />
    密码 : <input type="password" name="password"/>
        <button type="submit">登录</button>
    </form>
</body>
</html>