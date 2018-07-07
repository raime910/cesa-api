import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1530940747629 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `game` ADD `description` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `game` ADD `website` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `league` ADD `rules` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `league` ADD `prize` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `league_staff` DROP FOREIGN KEY `FK_ebd5dcc71ec15b761a4796dc02a`");
        await queryRunner.query("ALTER TABLE `league_staff` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `league_staff` ADD PRIMARY KEY (`leagueId`, `roleId`)");
        await queryRunner.query("ALTER TABLE `league_staff` DROP COLUMN `userId`");
        await queryRunner.query("ALTER TABLE `league_staff` ADD `userId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `league_staff` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `league_staff` ADD PRIMARY KEY (`leagueId`, `roleId`, `userId`)");
        await queryRunner.query("ALTER TABLE `pet` DROP FOREIGN KEY `FK_64704296b7bd17e90ca0a620a98`");
        await queryRunner.query("ALTER TABLE `pet` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `pet` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `pet` ADD `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `pet` DROP COLUMN `user_id`");
        await queryRunner.query("ALTER TABLE `pet` ADD `user_id` int NULL");
        await queryRunner.query("ALTER TABLE `entry_roster` DROP FOREIGN KEY `FK_66df19d9b421ce1f55342a9811a`");
        await queryRunner.query("ALTER TABLE `user` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `user` ADD `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `entry_roster` DROP COLUMN `userId`");
        await queryRunner.query("ALTER TABLE `entry_roster` ADD `userId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `league_staff` ADD CONSTRAINT `FK_ebd5dcc71ec15b761a4796dc02a` FOREIGN KEY (`userId`) REFERENCES `user`(`id`)");
        await queryRunner.query("ALTER TABLE `pet` ADD CONSTRAINT `FK_64704296b7bd17e90ca0a620a98` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`)");
        await queryRunner.query("ALTER TABLE `entry_roster` ADD CONSTRAINT `FK_66df19d9b421ce1f55342a9811a` FOREIGN KEY (`userId`) REFERENCES `user`(`id`)");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `entry_roster` DROP FOREIGN KEY `FK_66df19d9b421ce1f55342a9811a`");
        await queryRunner.query("ALTER TABLE `pet` DROP FOREIGN KEY `FK_64704296b7bd17e90ca0a620a98`");
        await queryRunner.query("ALTER TABLE `league_staff` DROP FOREIGN KEY `FK_ebd5dcc71ec15b761a4796dc02a`");
        await queryRunner.query("ALTER TABLE `entry_roster` DROP COLUMN `userId`");
        await queryRunner.query("ALTER TABLE `entry_roster` ADD `userId` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `user` ADD `id` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD PRIMARY KEY (`id`)");
        await queryRunner.query("ALTER TABLE `entry_roster` ADD CONSTRAINT `FK_66df19d9b421ce1f55342a9811a` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `pet` DROP COLUMN `user_id`");
        await queryRunner.query("ALTER TABLE `pet` ADD `user_id` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `pet` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `pet` ADD `id` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `pet` ADD PRIMARY KEY (`id`)");
        await queryRunner.query("ALTER TABLE `pet` ADD CONSTRAINT `FK_64704296b7bd17e90ca0a620a98` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `league_staff` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `league_staff` ADD PRIMARY KEY (`leagueId`, `roleId`)");
        await queryRunner.query("ALTER TABLE `league_staff` DROP COLUMN `userId`");
        await queryRunner.query("ALTER TABLE `league_staff` ADD `userId` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `league_staff` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `league_staff` ADD PRIMARY KEY (`leagueId`, `roleId`, `userId`)");
        await queryRunner.query("ALTER TABLE `league_staff` ADD CONSTRAINT `FK_ebd5dcc71ec15b761a4796dc02a` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `league` DROP COLUMN `prize`");
        await queryRunner.query("ALTER TABLE `league` DROP COLUMN `rules`");
        await queryRunner.query("ALTER TABLE `game` DROP COLUMN `website`");
        await queryRunner.query("ALTER TABLE `game` DROP COLUMN `description`");
    }

}
