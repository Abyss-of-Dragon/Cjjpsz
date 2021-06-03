/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80022
Source Host           : localhost:3306
Source Database       : users

Target Server Type    : MYSQL
Target Server Version : 80022
File Encoding         : 65001

Date: 2021-06-03 17:28:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for charas
-- ----------------------------
DROP TABLE IF EXISTS `charas`;
CREATE TABLE `charas` (
  `id` int NOT NULL,
  `Name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Rarity` varchar(255) DEFAULT NULL,
  `Weaponclass` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Element` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Sex` varchar(16) DEFAULT NULL,
  `Nation` varchar(255) DEFAULT NULL,
  `HP` int DEFAULT NULL,
  `Damage` int DEFAULT NULL,
  `Armor` int DEFAULT NULL,
  `Growth` varchar(255) DEFAULT NULL,
  `Tags` varchar(255) DEFAULT NULL,
  `Avatar` varchar(255) DEFAULT NULL,
  `Commits` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of charas
-- ----------------------------
INSERT INTO `charas` VALUES ('0', '烟绯', '4星', '法器', '火', '女', '璃月', '9352', '240', '587', '火元素伤害加成24%', '	特产探索', '/img/character/icon_yanfei.png', null);
INSERT INTO `charas` VALUES ('1', '罗莎莉亚', '4星', '长柄武器', '冰', '女', '蒙德', '12289', '240', '710', '攻击力加成+24%', '移速提升', '/img/character/icon_rosalia.JPG', null);
INSERT INTO `charas` VALUES ('2', '辛焱', '4星', '双手剑', '火', '女', '璃月', '11201', '249', '799', '攻击力加成+24%', '护盾、烹饪、减抗、伤害提升、元素附着', '/img/character/icon_xinyan.JPG', null);
INSERT INTO `charas` VALUES ('3', '迪奥娜', '4星', '弓', '冰', '女', '蒙德', '9570', '212', '601', '冰元素伤害加成+24%', '治疗、护盾、烹饪、移速提升、元素附着、精通加成、体力消耗减少、自身伤害提升、减攻', '/img/character/icon_diaona.JPG', null);
INSERT INTO `charas` VALUES ('4', '芭芭拉', '4星', '法器', '水', '女', '蒙德', '9787', '159', '669', '生命值加成+24%', '治疗、复活、烹饪、元素附着、伤害提升、体力消耗降低、技能延长', '/img/character/icon_babala.JPG', null);
INSERT INTO `charas` VALUES ('5', '北斗	', '4星', '双手剑', '雷', '女', '璃月', '13050', '225', '648', '雷元素伤害加成+24%', '护盾、游泳消耗减少、弹反、减抗、抗打断、自身伤害提升', '/img/character/icon_beidou.JPG', null);
INSERT INTO `charas` VALUES ('6', '重云', '4星', '双手剑', '冰', '男', '璃月', '10984', '223', '648', '攻击力加成24%', '元素附魔、冷却缩减、派遣、减抗、攻速提升、自身伤害提升', '/img/character/icon_chongyun.JPG', null);
INSERT INTO `charas` VALUES ('7', '香菱', '4星', '长柄武器', '火', '女', '璃月', '10875', '225', '669', '元素精通+96', '	加攻、烹饪、减抗、伤害提升', '/img/character/icon_xiangling.JPG', null);
INSERT INTO `charas` VALUES ('8', '行秋', '4星', '	单手剑', '水', '男', '璃月', '10222', '202', '758', '攻击力加成24%', '治疗、元素附着、炼金返还、减抗、抗打断、自身伤害提升', '/img/character/icon_xingqiu.JPG', null);
INSERT INTO `charas` VALUES ('9', '雷泽', '4星', '双手剑', '雷', '男', '蒙德', '11962', '234', '751', '物理伤害加成30%', '冲刺消耗减少、减防、自身伤害提升、自身抗性提高、自身抗打断、感电免疫', '/img/character/icon_leize.JPG', null);
INSERT INTO `charas` VALUES ('10', '安柏', '4星', '弓', '火', '女', '蒙德', '9461', '223', '601', '攻击力加成24%', '滑翔消耗减少、加攻、移速提升、伤害提升、自身伤害提升、嘲讽', '/img/character/icon_anbo.png', null);
INSERT INTO `charas` VALUES ('11', '凝光', '4星', '法器', '岩', '女', '璃月', '9787', '212', '573', '岩元素伤害加成+24%', '矿物探查、抗性提升、伤害提升', '/img/character/icon_ningguang.JPG', null);
INSERT INTO `charas` VALUES ('12', '菲谢尔', '4星', '弓', '雷', '女', '蒙德', '9189', '244', '594', '攻击力加成24%', '派遣、自身治疗', '/img/character/icon_feixieer.JPG', null);
INSERT INTO `charas` VALUES ('13', '丽莎', '4星', '法器', '雷', '女', '蒙德', '9570', '232', '573', '元素精通+96', '减防、炼金返还、自身抗打断', '/img/character/icon_lisa.JPG', null);
INSERT INTO `charas` VALUES ('14', '砂糖', '4星', '法器', '风', '女', '蒙德', '9244', '170', '703', '风元素伤害加成+24%', '聚怪、控制、炼金返还、伤害提升、精通加成', '/img/character/icon_shatang.JPG', null);
INSERT INTO `charas` VALUES ('15', '诺艾尔', '4星', '双手剑', '岩', '女', '蒙德', '12071', '191', '799', '防御力加成+30%', '护盾、治疗、烹饪、技能延长、自身伤害提升', '/img/character/icon_noaier.JPG', null);
INSERT INTO `charas` VALUES ('16', '凯亚', '4星', '	单手剑', '冰', '男', '蒙德', '11636', '223', '792', '元素充能+26.7%', '冲刺消耗减少、自身治疗、护盾、能量回复、技能延长、自身伤害提升', '/img/character/icon_kaiya.png', null);
INSERT INTO `charas` VALUES ('17', '班尼特', '4星', '	单手剑', '火', '男', '蒙德', '12397', '191', '771', '元素充能+26.7%', '治疗、元素附着、派遣、加攻、元素附魔、伤害提升', '/img/character/icon_bannite.JPG', null);
INSERT INTO `charas` VALUES ('18', '优菈', '5星', '双手剑', '冰', '女', '蒙德', '13226', '342', '751', '暴击伤害+38.4%', '减抗、炼金返还、物理输出、自身伤害提升、自身抗打断', '/img/character/icon_youla.png', '0,1,');
INSERT INTO `charas` VALUES ('19', '胡桃', '5星', '长柄武器', '火', '男', '璃月', '15552', '106', '876', '暴击伤害+38.4%', '烹饪、自身治疗、暴击提升、自身附魔、自身抗打断、自身伤害提升、自身抗性提高', '/img/character/icon_hutao.JPG', '');
INSERT INTO `charas` VALUES ('20', '魈', '5星', '长柄武器', '风', '男', '璃月', '12736', '349', '799', '暴击率19.2%', '位移、攀爬消耗减少、自身伤害提升、下落免疫', '/img/character/icon_xiao.JPG', null);
INSERT INTO `charas` VALUES ('21', '甘雨', '5星', '弓', '冰', '女', '璃月', '9797', '335', '630', '暴击伤害+38.4%', '嘲讽、锻造返还、减抗、伤害提升', '/img/character/icon_ganyu.JPG', null);
INSERT INTO `charas` VALUES ('22', '阿贝多', '5星', '单手剑', '岩', '男', '蒙德', '13226', '251', '876', '岩元素伤害加成28.8%', '炼金返还、伤害提升、精通加成、自身伤害提升', '/img/character/icon_abeiduo.JPG', null);
INSERT INTO `charas` VALUES ('23', '钟离', '5星', '长柄武器', '岩', '男', '璃月', '14695', '251', '738', '岩元素伤害加成28.8%', '护盾、锻造返还、控制、治疗、减抗、护盾强效、自身伤害提升、自身抗打断', '/img/character/icon_zhongli.JPG', null);
INSERT INTO `charas` VALUES ('24', '达达利亚', '5星', '弓', '水', '男', '至冬', '13103', '301', '815', '	水元素伤害加成+28.8%', '天赋提升', '/img/character/icon_dadaliya.JPG', null);
INSERT INTO `charas` VALUES ('25', '可莉', '5星', '法器', '火', '女', '蒙德', '10287', '311', '615', '	火元素伤害加成28.8%', '特产探索、减防、能量回复、伤害提升', '/img/character/icon_keli.JPG', null);
INSERT INTO `charas` VALUES ('26', '温迪', '5星', '弓', '风', '男', '蒙德', '10531', '263', '669', '元素充能+32%', '聚怪、滑翔消耗减少、控制、能量回复、减抗、自身伤害提升', '/img/character/icon_wendi.png', null);
INSERT INTO `charas` VALUES ('27', '刻晴', '5星', '	单手剑', '雷', '女', '璃月', '13103', '32', '799', '暴击伤害+38.4%', '位移、派遣、能量回复、自身附魔、自身伤害提升', '/img/character/icon_keqing.png', null);
INSERT INTO `charas` VALUES ('28', '旅行者', '5星', '	单手剑', '风，岩', '男/女', '无', '10875', '212', '683', '攻击力加成+24%', '属性变换、自身治疗、暴击提升、能量回复、自身伤害提升、控制、减抗', '/img/character/icon_lvxingzhe.JPG', null);
INSERT INTO `charas` VALUES ('29', '迪卢克', '5星', '双手剑', '火', '男', '蒙德', '12981', '335', '784', '暴击率19.2%', '锻造返还、自身附魔、自身伤害加成', '/img/character/icon_diluke.JPG', null);
INSERT INTO `charas` VALUES ('30', '七七', '5星', '	单手剑', '冰', '女', '璃月', '12368', '287', '922', '治疗加成+22.2%', '治疗、复活、特产探索、减攻、能量回复、自身伤害提升', '/img/character/icon_qiqi.JPG', null);
INSERT INTO `charas` VALUES ('31', '琴', '5星', '	单手剑', '风', '女', '蒙德', '14695', '239', '769', '治疗加成+22.2%', '聚怪、治疗、烹饪、能量回复、控制、伤害减免、减抗、攻速提升、移速提升、元素附着', '/img/character/icon_qin.JPG', null);
INSERT INTO `charas` VALUES ('32', '莫娜', '5星', '法器', '水', '女', '蒙德', '10409', '287', '653', '元素充能+32%', '控制、嘲讽、炼金返还、伤害提升、暴击提升、快速移动、自身伤害提升', '/img/character/icon_mona.JPG', null);

-- ----------------------------
-- Table structure for commits
-- ----------------------------
DROP TABLE IF EXISTS `commits`;
CREATE TABLE `commits` (
  `id` int NOT NULL,
  `user` int DEFAULT NULL,
  `context` varchar(1023) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of commits
-- ----------------------------
INSERT INTO `commits` VALUES ('0', '0', '傻逼');
INSERT INTO `commits` VALUES ('1', '0', '原批');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL,
  `type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `username` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nickname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `sign` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '/img/avatar/default.jpg',
  PRIMARY KEY (`id`,`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('0', 'Leader', 'user1', 'password', 'USERTEST', 'LTg1NzYwMjk1NA==', '/img/avatar/-794026537.jpg');
INSERT INTO `users` VALUES ('1', 'User', 'userTest', 'hello', 'asdasdasdasd', 'LTE3NzU3OTQzMg==', '/img/avatar/default.jpg');
INSERT INTO `users` VALUES ('2', 'User', 'user2', 'pass', 'whadadkwdwaawaws', 'ODg4ODM2NTA4', '/img/avatar/default.jpg');
INSERT INTO `users` VALUES ('3', 'User', 'yuanpi', 'yuanpinmsl', '原批', 'LTE0NDM4MTM2ODQ=', '/img/avatar/-789407881.jpg');
