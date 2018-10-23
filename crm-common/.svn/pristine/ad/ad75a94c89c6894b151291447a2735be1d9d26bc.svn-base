package com.run.sso.shiro.authority.realm;

import com.run.sso.model.Resource;
import com.run.sso.model.Role;
import com.run.sso.model.User;
import com.run.sso.service.ResourceService;
import com.run.sso.service.RoleService;
import com.run.sso.service.UserService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationException;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * @Description TODO
 *      自定义认证和授权配置
 * @Author hp
 * @Date 2018/9/18 18:32
 * @Version 1.0
 **/
public class MyRealm extends AuthorizingRealm {
    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private ResourceService resourceService;

    /**
     * @Description //TODO
     *      授权
     * @Date 18:37 2018/9/18
     * @Param [principals]
     * @return org.apache.shiro.authz.AuthorizationInfo
     **/
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {

        // 因为非正常退出（关闭浏览器，或超时），即没有显示调用 SecurityUtils.getSubject().logout()
        if (! SecurityUtils.getSubject().isAuthenticated()) {
            doClearCache(principals);
            SecurityUtils.getSubject().logout();
            return null;
        }

        if (principals == null) {
            throw new AuthorizationException("parameters principals is null");
        }

        SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();
        User user = (User) principals.getPrimaryPrincipal();

        try {
            List<Role> roleList = roleService.queryRoleListByUserId(user.getId());
            for (Role role : roleList) {
                authorizationInfo.addRole(role.getRoleName());
            }
            List<Resource> resources = resourceService.loadUserResources(user.getId());
            for (Resource resource : resources) {
                authorizationInfo.addStringPermission(resource.getName());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return authorizationInfo;
    }

    /**
     * @Description //TODO
     *      认证
     * @Date 18:38 2018/9/18
     * @Param [token]
     * @return org.apache.shiro.authc.AuthenticationInfo
     **/
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        String username = (String) token.getPrincipal();
        User user = userService.findByUserName(username);
        if (user == null) {
            throw new UnknownAccountException();
        }
        if (user.getEnable() == 1) { //账户冻结
            throw new LockedAccountException();
        }
        SimpleAuthenticationInfo authenticationInfo = new SimpleAuthenticationInfo(
                user, //用户名
                user.getPassword(), //密码
                ByteSource.Util.bytes(username),//salt=username+salt
                getName()  //realm name
        );

        return authenticationInfo;
    }
}
