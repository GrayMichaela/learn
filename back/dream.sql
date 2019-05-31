/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 80016
Source Host           : localhost:3306
Source Database       : dream

Target Server Type    : MYSQL
Target Server Version : 80016
File Encoding         : 65001

Date: 2019-05-29 21:52:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for errorinfo
-- ----------------------------
DROP TABLE IF EXISTS `errorinfo`;
CREATE TABLE `errorinfo` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `from` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '报错信息来源',
  `msg` longtext CHARACTER SET utf8 COLLATE utf8_general_ci COMMENT '报错的信息',
  `errorType` tinyint(4) NOT NULL COMMENT '错误类型ID',
  `errorTypeName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '错误类型名称',
  `state` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `types` (`errorType`),
  KEY `typeNames` (`errorTypeName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of errorinfo
-- ----------------------------

-- ----------------------------
-- Table structure for errortype
-- ----------------------------
DROP TABLE IF EXISTS `errortype`;
CREATE TABLE `errortype` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `type` tinyint(4) NOT NULL COMMENT '错误类型',
  `typeName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '错误类型名称',
  `state` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of errortype
-- ----------------------------

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '菜单名称',
  `state` tinyint(4) NOT NULL COMMENT '数据状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menu
-- ----------------------------

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` tinyint(11) NOT NULL AUTO_INCREMENT,
  `type` tinyint(11) NOT NULL COMMENT '类型ID：0管理员1付费用户2免费用户3游客',
  `typeName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '类型名称',
  `state` tinyint(11) NOT NULL COMMENT '是否作废数据',
  PRIMARY KEY (`id`),
  KEY `name` (`type`,`typeName`),
  KEY `type` (`typeName`),
  KEY `name_2` (`type`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', '0', '管理员', '1');
INSERT INTO `role` VALUES ('2', '1', '付费用户', '1');
INSERT INTO `role` VALUES ('3', '2', '免费用户', '1');
INSERT INTO `role` VALUES ('4', '3', '游客', '1');

-- ----------------------------
-- Table structure for rolemenu
-- ----------------------------
DROP TABLE IF EXISTS `rolemenu`;
CREATE TABLE `rolemenu` (
  `id` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rolemenu
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名称',
  `roleId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '角色类型',
  `roleName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '角色类型名称',
  `cipher` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '账号',
  `state` tinyint(4) NOT NULL COMMENT '是否作废数据',
  PRIMARY KEY (`id`),
  KEY `typeName` (`roleName`),
  KEY `type` (`roleId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '南烟', '0', '管理员', 'admin', '1');
