/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 80016
Source Host           : localhost:3306
Source Database       : dream

Target Server Type    : MYSQL
Target Server Version : 80016
File Encoding         : 65001

Date: 2019-05-14 23:56:55
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for errorinfo
-- ----------------------------
DROP TABLE IF EXISTS `errorinfo`;
CREATE TABLE `errorinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '报错信息来源于哪',
  `msg` longtext CHARACTER SET utf8 COLLATE utf8_general_ci COMMENT '报错的信息',
  `errorType` int(11) NOT NULL COMMENT '错误类型ID',
  `errorTypeName` varchar(255) DEFAULT NULL COMMENT '错误类型名称',
  `state` int(11) DEFAULT NULL,
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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) NOT NULL COMMENT '错误类型',
  `typeName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '错误类型名称',
  `state` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of errortype
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `userType` int(11) DEFAULT NULL COMMENT '角色类型',
  `userTypeName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '角色类型名称',
  `account` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `grade` int(11) DEFAULT NULL COMMENT '等级',
  `state` int(255) DEFAULT NULL COMMENT '是否作废数据',
  PRIMARY KEY (`id`),
  KEY `typeName` (`userTypeName`),
  KEY `type` (`userType`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '百万佬', '0', '管理员', 'admin', 'admin', '96', '1');

-- ----------------------------
-- Table structure for usertype
-- ----------------------------
DROP TABLE IF EXISTS `usertype`;
CREATE TABLE `usertype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '类型名称',
  `typeName` int(11) DEFAULT NULL COMMENT '0管理员1会长2副会长3成员',
  `state` int(11) DEFAULT NULL COMMENT '是否作废数据',
  PRIMARY KEY (`id`),
  KEY `name` (`name`,`typeName`),
  KEY `type` (`typeName`),
  KEY `name_2` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of usertype
-- ----------------------------
INSERT INTO `usertype` VALUES ('1', '管理员', '0', '1');
