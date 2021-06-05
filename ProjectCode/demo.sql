/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80025
 Source Host           : localhost:3306
 Source Schema         : demo

 Target Server Type    : MySQL
 Target Server Version : 80025
 File Encoding         : 65001

 Date: 05/06/2021 14:48:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for charas
-- ----------------------------
DROP TABLE IF EXISTS `charas`;
CREATE TABLE `charas`  (
  `id` int NOT NULL,
  `Name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `Rarity` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `Weaponclass` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `Element` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `Sex` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `Nation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `HP` int NULL DEFAULT NULL,
  `Damage` int NULL DEFAULT NULL,
  `Armor` int NULL DEFAULT NULL,
  `Growth` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `Tags` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `Avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `Commits` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '',
  `Tachie` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of charas
-- ----------------------------
INSERT INTO `charas` VALUES (0, '烟绯', '4星', '法器', '火', '女', '璃月', 9352, 240, 587, '火元素伤害加成24%', '	特产探索', '/img/character/icon_yanfei.png', NULL, '/img/character/tachie_yanfei.jpg');
INSERT INTO `charas` VALUES (1, '罗莎莉亚', '4星', '长柄武器', '冰', '女', '蒙德', 12289, 240, 710, '攻击力加成+24%', '移速提升', '/img/character/icon_rosalia.JPG', NULL, '/img/character/tachie_rosalia.jpg');
INSERT INTO `charas` VALUES (2, '辛焱', '4星', '双手剑', '火', '女', '璃月', 11201, 249, 799, '攻击力加成+24%', '护盾、烹饪、减抗、伤害提升、元素附着', '/img/character/icon_xinyan.JPG', NULL, '/img/character/tachie_xinyan.jpg');
INSERT INTO `charas` VALUES (3, '迪奥娜', '4星', '弓', '冰', '女', '蒙德', 9570, 212, 601, '冰元素伤害加成+24%', '治疗、护盾、烹饪、移速提升、元素附着、精通加成、体力消耗减少、自身伤害提升、减攻', '/img/character/icon_diaona.JPG', NULL, '/img/character/tachie_diaona.jpg');
INSERT INTO `charas` VALUES (4, '芭芭拉', '4星', '法器', '水', '女', '蒙德', 9787, 159, 669, '生命值加成+24%', '治疗、复活、烹饪、元素附着、伤害提升、体力消耗降低、技能延长', '/img/character/icon_babala.JPG', NULL, '/img/character/tachie_babala.jpg');
INSERT INTO `charas` VALUES (5, '北斗	', '4星', '双手剑', '雷', '女', '璃月', 13050, 225, 648, '雷元素伤害加成+24%', '护盾、游泳消耗减少、弹反、减抗、抗打断、自身伤害提升', '/img/character/icon_beidou.JPG', NULL, '/img/character/tachie_beidou.jpg');
INSERT INTO `charas` VALUES (6, '重云', '4星', '双手剑', '冰', '男', '璃月', 10984, 223, 648, '攻击力加成24%', '元素附魔、冷却缩减、派遣、减抗、攻速提升、自身伤害提升', '/img/character/icon_chongyun.JPG', NULL, '/img/character/tachie_chongyun.jpg');
INSERT INTO `charas` VALUES (7, '香菱', '4星', '长柄武器', '火', '女', '璃月', 10875, 225, 669, '元素精通+96', '	加攻、烹饪、减抗、伤害提升', '/img/character/icon_xiangling.JPG', NULL, '/img/character/tachie_xiangling.jpg');
INSERT INTO `charas` VALUES (8, '行秋', '4星', '	单手剑', '水', '男', '璃月', 10222, 202, 758, '攻击力加成24%', '治疗、元素附着、炼金返还、减抗、抗打断、自身伤害提升', '/img/character/icon_xingqiu.JPG', NULL, '/img/character/tachie_xingqiu.jpg');
INSERT INTO `charas` VALUES (9, '雷泽', '4星', '双手剑', '雷', '男', '蒙德', 11962, 234, 751, '物理伤害加成30%', '冲刺消耗减少、减防、自身伤害提升、自身抗性提高、自身抗打断、感电免疫', '/img/character/icon_leize.JPG', NULL, '/img/character/tachie_leize.jpg');
INSERT INTO `charas` VALUES (10, '安柏', '4星', '弓', '火', '女', '蒙德', 9461, 223, 601, '攻击力加成24%', '滑翔消耗减少、加攻、移速提升、伤害提升、自身伤害提升、嘲讽', '/img/character/icon_anbo.png', NULL, '/img/character/tachie_anbo.jpg');
INSERT INTO `charas` VALUES (11, '凝光', '4星', '法器', '岩', '女', '璃月', 9787, 212, 573, '岩元素伤害加成+24%', '矿物探查、抗性提升、伤害提升', '/img/character/icon_ningguang.JPG', NULL, '/img/character/tachie_ningguang.jpg');
INSERT INTO `charas` VALUES (12, '菲谢尔', '4星', '弓', '雷', '女', '蒙德', 9189, 244, 594, '攻击力加成24%', '派遣、自身治疗', '/img/character/icon_feixieer.JPG', NULL, '/img/character/tachie_feixieer.jpg');
INSERT INTO `charas` VALUES (13, '丽莎', '4星', '法器', '雷', '女', '蒙德', 9570, 232, 573, '元素精通+96', '减防、炼金返还、自身抗打断', '/img/character/icon_lisa.JPG', NULL, '/img/character/tachie_lisha.jpg');
INSERT INTO `charas` VALUES (14, '砂糖', '4星', '法器', '风', '女', '蒙德', 9244, 170, 703, '风元素伤害加成+24%', '聚怪、控制、炼金返还、伤害提升、精通加成', '/img/character/icon_shatang.JPG', NULL, '/img/character/tachie_shatang.jpg');
INSERT INTO `charas` VALUES (15, '诺艾尔', '4星', '双手剑', '岩', '女', '蒙德', 12071, 191, 799, '防御力加成+30%', '护盾、治疗、烹饪、技能延长、自身伤害提升', '/img/character/icon_noaier.JPG', NULL, '/img/character/tachie_noaier.jpg');
INSERT INTO `charas` VALUES (16, '凯亚', '4星', '	单手剑', '冰', '男', '蒙德', 11636, 223, 792, '元素充能+26.7%', '冲刺消耗减少、自身治疗、护盾、能量回复、技能延长、自身伤害提升', '/img/character/icon_kaiya.png', NULL, '/img/character/tachie_kaiya.jpg');
INSERT INTO `charas` VALUES (17, '班尼特', '4星', '	单手剑', '火', '男', '蒙德', 12397, 191, 771, '元素充能+26.7%', '治疗、元素附着、派遣、加攻、元素附魔、伤害提升', '/img/character/icon_bannite.JPG', NULL, '/img/character/tachie_bannite.jpg');
INSERT INTO `charas` VALUES (18, '优菈', '5星', '双手剑', '冰', '女', '蒙德', 13226, 342, 751, '暴击伤害+38.4%', '减抗、炼金返还、物理输出、自身伤害提升、自身抗打断', '/img/character/icon_youla.png', '', '/img/character/tachie_youla.jpg');
INSERT INTO `charas` VALUES (19, '胡桃', '5星', '长柄武器', '火', '男', '璃月', 15552, 106, 876, '暴击伤害+38.4%', '烹饪、自身治疗、暴击提升、自身附魔、自身抗打断、自身伤害提升、自身抗性提高', '/img/character/icon_hutao.JPG', '', '/img/character/tachie_hutao.jpg');
INSERT INTO `charas` VALUES (20, '魈', '5星', '长柄武器', '风', '男', '璃月', 12736, 349, 799, '暴击率19.2%', '位移、攀爬消耗减少、自身伤害提升、下落免疫', '/img/character/icon_xiao.JPG', NULL, '/img/character/tachie_xiao.jpg');
INSERT INTO `charas` VALUES (21, '甘雨', '5星', '弓', '冰', '女', '璃月', 9797, 335, 630, '暴击伤害+38.4%', '嘲讽、锻造返还、减抗、伤害提升', '/img/character/icon_ganyu.JPG', NULL, '/img/character/tachie_ganyu.jpg');
INSERT INTO `charas` VALUES (22, '阿贝多', '5星', '单手剑', '岩', '男', '蒙德', 13226, 251, 876, '岩元素伤害加成28.8%', '炼金返还、伤害提升、精通加成、自身伤害提升', '/img/character/icon_abeiduo.JPG', NULL, '/img/character/tachie_abeiduo.jpg');
INSERT INTO `charas` VALUES (23, '钟离', '5星', '长柄武器', '岩', '男', '璃月', 14695, 251, 738, '岩元素伤害加成28.8%', '护盾、锻造返还、控制、治疗、减抗、护盾强效、自身伤害提升、自身抗打断', '/img/character/icon_zhongli.JPG', NULL, '/img/character/tachie_zhongli.jpg');
INSERT INTO `charas` VALUES (24, '达达利亚', '5星', '弓', '水', '男', '至冬', 13103, 301, 815, '	水元素伤害加成+28.8%', '天赋提升', '/img/character/icon_dadaliya.JPG', NULL, '/img/character/tachie_dadaliya.jpg');
INSERT INTO `charas` VALUES (25, '可莉', '5星', '法器', '火', '女', '蒙德', 10287, 311, 615, '	火元素伤害加成28.8%', '特产探索、减防、能量回复、伤害提升', '/img/character/icon_keli.JPG', NULL, '/img/character/tachie_keli.jpg');
INSERT INTO `charas` VALUES (26, '温迪', '5星', '弓', '风', '男', '蒙德', 10531, 263, 669, '元素充能+32%', '聚怪、滑翔消耗减少、控制、能量回复、减抗、自身伤害提升', '/img/character/icon_wendi.png', NULL, '/img/character/tachie_wendi.jpg');
INSERT INTO `charas` VALUES (27, '刻晴', '5星', '	单手剑', '雷', '女', '璃月', 13103, 32, 799, '暴击伤害+38.4%', '位移、派遣、能量回复、自身附魔、自身伤害提升', '/img/character/icon_keqing.png', NULL, '/img/character/tachie_keqing.jpg');
INSERT INTO `charas` VALUES (28, '旅行者', '5星', '	单手剑', '风，岩', '男/女', '无', 10875, 212, 683, '攻击力加成+24%', '属性变换、自身治疗、暴击提升、能量回复、自身伤害提升、控制、减抗', '/img/character/icon_ying.png', NULL, '/img/character/tachie_ying.jpg');
INSERT INTO `charas` VALUES (29, '迪卢克', '5星', '双手剑', '火', '男', '蒙德', 12981, 335, 784, '暴击率19.2%', '锻造返还、自身附魔、自身伤害加成', '/img/character/icon_diluke.JPG', NULL, '/img/character/tachie_diluke.jpg');
INSERT INTO `charas` VALUES (30, '七七', '5星', '	单手剑', '冰', '女', '璃月', 12368, 287, 922, '治疗加成+22.2%', '治疗、复活、特产探索、减攻、能量回复、自身伤害提升', '/img/character/icon_qiqi.JPG', NULL, '/img/character/tachie_qiqi.jpg');
INSERT INTO `charas` VALUES (31, '琴', '5星', '	单手剑', '风', '女', '蒙德', 14695, 239, 769, '治疗加成+22.2%', '聚怪、治疗、烹饪、能量回复、控制、伤害减免、减抗、攻速提升、移速提升、元素附着', '/img/character/icon_qin.JPG', NULL, '/img/character/tachie_qin.jpg');
INSERT INTO `charas` VALUES (32, '莫娜', '5星', '法器', '水', '女', '蒙德', 10409, 287, 653, '元素充能+32%', '控制、嘲讽、炼金返还、伤害提升、暴击提升、快速移动、自身伤害提升', '/img/character/icon_mona.JPG', NULL, '/img/character/tachie_mona.jpg');

-- ----------------------------
-- Table structure for commits
-- ----------------------------
DROP TABLE IF EXISTS `commits`;
CREATE TABLE `commits`  (
  `id` int NOT NULL,
  `user` int NULL DEFAULT NULL,
  `context` varchar(1023) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of commits
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL,
  `type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `username` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nickname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `sign` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '/img/avatar/default.jpg',
  PRIMARY KEY (`id`, `username`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (0, 'Leader', 'user1', 'password', 'USERTEST', 'LTIyNDg1MjAzMA==', '/img/avatar/-794026537.jpg');
INSERT INTO `users` VALUES (1, 'User', 'userTest', 'hello', 'asdasdasdasd', '', '/img/avatar/default.jpg');
INSERT INTO `users` VALUES (2, 'User', 'user2', 'pass', 'whadadkwdwaawaws', 'LTE0NTQwODYzMjg=', '/img/avatar/default.jpg');
INSERT INTO `users` VALUES (3, 'User', 'yuanpi', 'yuanpinmsl', '原批', 'LTE0NDM4MTM2ODQ=', '/img/avatar/-789407881.jpg');
INSERT INTO `users` VALUES (4, 'User', '国服第一超级兵', '123456', '国服第一超级兵', 'MTM4MDA4MDI4Ng==', '/img/avatar/default.jpg');

-- ----------------------------
-- Table structure for weapons
-- ----------------------------
DROP TABLE IF EXISTS `weapons`;
CREATE TABLE `weapons`  (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `rarity` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `access` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `basic_attribute1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `basic_attribute2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `atk` int NULL DEFAULT NULL,
  `sec_attribute` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `skill` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `Avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `Commits` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of weapons
-- ----------------------------
INSERT INTO `weapons` VALUES ('1', '降临之剑', '单手剑', '4星', '	PS4特典奖励', '	攻击力7.7%', '基础攻击力39', 401, '攻击力35.2%', '降世：普通攻击与重击命中敌人后有50%概率在小范围内造成200%攻击力的伤害。该效果每10秒只能触发一次;此外，旅行者装备降临之剑时，攻击力提升66点。\n=该武器技能效果初始即满级，无法精炼。', '/img/weapon/icon_jianglinzhijian.png', NULL);
INSERT INTO `weapons` VALUES ('2', '试作斩岩', '单手剑', '4星', '锻造, 冒险等阶10级奖励获取', '物理伤害加成7.5%', '基础攻击力44', 565, '物理伤害加成34.5%', '碎石：普通攻击或重击命中时，攻击力（原为基础攻击力）和防御力提高4%/5%/6%/7%/8%，持续6秒，最多叠加4层。该效果每0.3秒只能触发一次。', '/img/weapon/icon_shizuozhanyan.png', NULL);
INSERT INTO `weapons` VALUES ('3', '腐殖之剑', '单手剑', '4星', '活动', '元素充能效率10.0%', '基础攻击力42', 510, '元素充能效率45.9%', '无尽的渴慕：元素战技造成的伤害增加16/20/24/28/32%，元素战技的暴击率提升6/7.5/9/10.5/12%。', '/img/weapon/icon_fuzhizhijian.png', NULL);
INSERT INTO `weapons` VALUES ('4', '磐岩结绿', '单手剑', '5星', '限定祈愿', '暴击率9.6%', '基础攻击力44', 542, '暴击率44.1%', '护国的无垢之心：生命值提升20%/25%/30%/35%/40%。此外，基于装备该武器的角色生命值上限的1.2%/1.5%/1.8%/2.1%/2.4%,获得攻击力加成。', '/img/weapon/icon_panyanjielv.png', '');
INSERT INTO `weapons` VALUES ('5', '千岩古剑', '双手剑', '4星', '	限定祈愿	', '	攻击力9.0%', '基础攻击力42', 510, '	攻击力41.3%', '千岩诀·同心：队伍中每有一位璃月角色，装备该武器的角色便获得7%/8%/9%/10%/11%攻击力提升与3%/4%/5%/6%/7%暴击率提升。至多获得4层提升效果', '/img/weapon/icon_qianyangujian.png', NULL);
INSERT INTO `weapons` VALUES ('6', '白影剑', '双手剑', '4星', '	锻造', '	防御力11.3%', '基础攻击力42', 510, '防御力51.7%', '注能之锋：普通攻击和重击命中后，攻击力和防御力提高6%/7.5%/9%/10.5%/12%。该效果持续6秒，最多叠加4层，每0.5秒只能触发一次。', '/img/weapon/icon_baiyingjian.png', NULL);
INSERT INTO `weapons` VALUES ('7', '黑岩斩刀', '双手剑', '4星', '	商城兑换', '	暴击伤害12.0%', '基础攻击力42', 510, '	暴击伤害55.1%', '乘胜追击：击败敌人后,攻击力提升12%/15%/18%/21%/24%,持续30秒。该效果至多叠加3层，每层持续时间独立。', '/img/weapon/icon_heiyanzhandao.png', NULL);
INSERT INTO `weapons` VALUES ('8', '狼的末路', '双手剑', '5星', '	祈愿', '	攻击力10.8%', '基础攻击力46', 608, '	百分比攻击力49.6%', '如狼般狩猎者：攻击力提高20%/25%/30%/35%/40%；攻击命中生命值低于30%的敌人时，队伍中所有成员的攻击力提高40%/50%/60%/70%/80%，持续12秒。该效果30秒只能触发一次。', '/img/weapon/icon_langdemolu.png', NULL);
INSERT INTO `weapons` VALUES ('9', '苍翠猎弓', '弓', '4星', '	纪行', '	暴击率6.0%', '基础攻击力42', 510, '暴击率27.6%', '	苍翠之风：普通攻击与重击命中时，有50%几率生成一个风之眼，持续吸引周围敌人，并对其中的敌人每0.5秒造成40%/50%/60%/70%/80%攻击力的伤害。该效果持续4秒，每14/13/12/11/10秒至多触发一次。', '/img/weapon/icon_cangcuiliegong.png', NULL);
INSERT INTO `weapons` VALUES ('10', '弓藏', '弓', '4星', '祈愿', '	攻击力9.0%', '基础攻击力42', 510, '攻击力41.3%', '	速射弓斗：普通攻击伤害提升40%/50%/60%/70%/80%，重击伤害下降10%。', '/img/weapon/icon_gongzang.png', NULL);
INSERT INTO `weapons` VALUES ('11', '钢轮弓', '弓', '4星', '锻造', '物理伤害加成15.0%	', '基础攻击力41', 454, '物理伤害加成69.0%', '注能之矢：普通攻击和瞄准攻击命中时，提升4%/5%/6%/7%/8%攻击力与1.2%/1.5%/1.8%/2.1%/2.4%普通攻击速度。该效果持续6秒，最多可以叠加4层，每0.3秒只能触发一次。', '/img/weapon/icon_ganglungong.png', NULL);
INSERT INTO `weapons` VALUES ('12', '试作澹月', '弓', '4星', '锻造', '	攻击力9.0%', '基础攻击力42', 510, '攻击力41.3%', '离簇不归：瞄准射击时，若命中要害，则提升10%移动速度与36%/45%/54%/63%/72%攻击力，持续10秒。', '/img/weapon/icon_shizuotanyue.png', NULL);
INSERT INTO `weapons` VALUES ('13', '流浪乐章', '法器', '4星', '	祈愿', '暴击伤害12.0％', '基础攻击力42', 510, '	暴击伤害55.1%', '登场乐：角色登场时，随机获得一个主题曲，持续10秒。每30秒只能触发一次。宣叙调：攻击力提升60%/75%/90%/105%/120%；咏叹调：全元素伤害提升48%/60％/72%/84%/96%；间奏曲：元素精通提升240/300/360/420/480。', '/img/weapon/icon_liulangyuezhang.png', NULL);
INSERT INTO `weapons` VALUES ('14', '匣里日月', '法器', '4星', '	纪行', '暴击率6.0%', '基础攻击力42', 510, '	暴击率27.6%', '日月辉：普通攻击命中后的6秒内，元素战技与元素爆发的伤害提高20%/25%/30%/35%/40%；元素战技与元素爆发命中后的6秒内，普通攻击的伤害提高20%/25%/30%/35%/40%', '/img/weapon/icon_xialiriyue.png', NULL);
INSERT INTO `weapons` VALUES ('15', '忍冬之果', '法器', '4星', '锻造', '攻击力9.0%', '基础攻击力42', 510, '	攻击力41.3%', '霜葬：普通攻击与重击命中敌人时，有60%/70%/80%/90/100%概率在敌人上方生成恒冰晶核并坠落，造成80%/95%/110%/125%/140%攻击力的范围伤害。若敌人处于冰元素影响下，则造成200%/240%/280%/320%/360%攻击力的伤害。该效果每10秒至多触发一次。', '/img/weapon/icon_rendongzhiguo.png', NULL);
INSERT INTO `weapons` VALUES ('16', '祭礼残章', '法器', '4星', '祈愿', '元素精通48', '基础攻击力41', 454, '元素精通221', '气定神闲：元素战技造成伤害时，有40%/50%/60%/70%/80%的概率重置该技能的冷却时间，该效果每30/26/22/19/16秒只能触发1次。', '/img/weapon/icon_jilicanzhang.png', NULL);
INSERT INTO `weapons` VALUES ('17', '黑岩绯玉', '法器', '4星', '商城兑换', '暴击伤害12.0%', '基础攻击力42', 510, '暴击伤害55.1%', '乘胜追击：击败敌人后，攻击力提升12%/15%/18%/21%/24%，续30秒。该效果至多叠加3层，每层持续时间独立。', '/img/weapon/icon_heiyanfeiyu.png', NULL);
INSERT INTO `weapons` VALUES ('18', '尘世之锁', '法器', '5星', '限定祈愿	', '攻击力10.8%', '基础攻击力46', 608, '百分比攻击力49.6%', '	金璋皇极：护盾强效提升20%/25%/30%/35%/40%。攻击命中后的8秒内，攻击力提升4%/5%/6%/7%/8%。该效果至多可叠加5层，每0.3秒只能触发一次。此外，处于护盾庇护下时，该效果的攻击力提升效果提高100%。', '/img/weapon/icon_liulangyuezhang.png', NULL);
INSERT INTO `weapons` VALUES ('19', '四风原典', '法器', '5星', '	祈愿', '暴击率7.2%	', '基础攻击力46', 608, '	暴击率33.1%', '	无边际的眷顾：移动速度提高10%；在场上每4秒获得8%/10%/12%/14%/16%元素伤害加成。该效果最多叠加4层，角色倒下或离场后清空。', '/img/weapon/icon_sifengyuandian.png', NULL);
INSERT INTO `weapons` VALUES ('20', '匣里灭辰', '长柄武器', '4星', '	祈愿', '元素精通48', '基础攻击力41', 454, '	元素精通221', '	踏火止水：对于处于水元素或火元素影响下的敌人，造成的伤害提高20%/24%/28%/32%/36%。', '/img/weapon/icon_xialimiechen.png', NULL);
INSERT INTO `weapons` VALUES ('21', '西风长枪', '长柄武器', '4星', '	祈愿', '	元素充能效率6.7%', '基础攻击力44', 565, '	元素充能效率30.6%', '顺风而行：攻击造成暴击时，有60%/70%/80%/90%/100%的几率产生少量元素微粒，能为角色恢复6点元素能量。该效果每12/10.5/9/7.5/6秒只能触发一次。', '/img/weapon/icon_xifengchangqiang.png', NULL);
INSERT INTO `weapons` VALUES ('22', '黑岩刺枪', '长柄武器', '4星', '商城兑换', '	暴击伤害12.0%', '基础攻击力42', 510, '	暴击伤害55.1%', '乘胜追击：击败敌人后，攻击力提升12%/15%/18%/21%/24%，持续30秒。该效果至多叠加3层，每层持续时间独立。', '/img/weapon/icon_heiyanciqiang.png', NULL);
INSERT INTO `weapons` VALUES ('23', '龙脊长枪', '长柄武器', '4星', '	任务, 锻造', '物理伤害加成15.0%', '基础攻击力41', 454, '	物理伤害加成69.0%', '霜葬：普通攻击与重击命中敌人时，有60%/70%/80%/90%/100%概率在敌人上方生成恒冰晶核并坠落，造成80%/95%/110%/125%/140%攻击力的范围伤害。若敌人处于冰元素影响下，则造成200%/240%/280%/320%/360%攻击力的伤害。该效果每10秒至多触发一次。', '/img/weapon/icon_longjichangqiang.png', NULL);
INSERT INTO `weapons` VALUES ('24', '流月针', '长柄武器', '4星', '	锻造', '	物理伤害加成7.5%', '基础攻击力44', 565, '	物理伤害加成34.5%', '注能之针：获得元素微粒或元素晶球后的5秒内，普通攻击和重击额外造成20%/25%/30%/35%/40%攻击力伤害。', '/img/weapon/icon_liuyuezhen.png', NULL);
INSERT INTO `weapons` VALUES ('25', '护摩之杖', '长柄武器', '5星', '	限定祈愿', '	暴击伤害14.4%', '基础攻击力46', 608, '	物理伤害加成34.5%', '无羁的朱赤之蝶：生命值提升20%/25%/30%/35%/40%。此外，提供基于装备该武器的角色生命值上限的0.8%/1%/1.2%/1.4%/1.6%，获得攻击力加成。当装备该武器的角色生命值低于50%时，进一步获得1%/1.2%/1.4%/1.6%/1.8%最大生命值上限的攻击力提升', '/img/weapon/icon_humozhizhang.png', NULL);
INSERT INTO `weapons` VALUES ('26', '天空之脊', '长柄武器', '5星', '	祈愿', '元素充能效率8%', '基础攻击力48', 674, '	元素充能效率36.8%', '	斫断黑翼的利齿：暴击率提升8%/10%/12%/14%/16%， 普通攻击速度提升12%, 此外，普通攻击与重击命中敌人时，有50%概率触发真空刃，在小范围内造成额外40%/55%/70%/85%/100%攻击力的伤害。该效果每2秒至多触发一次。', '/img/weapon/icon_tiankongzhiji.png', NULL);

SET FOREIGN_KEY_CHECKS = 1;
