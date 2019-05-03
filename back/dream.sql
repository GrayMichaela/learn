/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 80016
Source Host           : localhost:3306
Source Database       : dream

Target Server Type    : MYSQL
Target Server Version : 80016
File Encoding         : 65001

Date: 2019-05-03 23:50:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `grade` int(11) DEFAULT NULL COMMENT '等级',
  `type` int(11) DEFAULT NULL COMMENT '角色类型',
  `typeName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '角色类型名称',
  `status` int(255) DEFAULT NULL COMMENT '是否作废数据',
  `account` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `names` (`typeName`),
  KEY `types` (`type`),
  CONSTRAINT `names` FOREIGN KEY (`typeName`) REFERENCES `usertype` (`name`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `types` FOREIGN KEY (`type`) REFERENCES `usertype` (`type`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '百万佬', '96', '0', '管理员', '1', 'admin', 'admin');

-- ----------------------------
-- Table structure for usertype
-- ----------------------------
DROP TABLE IF EXISTS `usertype`;
CREATE TABLE `usertype` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '类型名称',
  `type` int(11) DEFAULT NULL COMMENT '0管理员1会长2副会长3成员',
  `status` int(11) DEFAULT NULL COMMENT '是否作废数据',
  PRIMARY KEY (`id`),
  KEY `name` (`name`,`type`),
  KEY `type` (`type`),
  KEY `name_2` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of usertype
-- ----------------------------
INSERT INTO `usertype` VALUES ('1', '管理员', '0', '1');
