import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1530932752330 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `role` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `pet` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `age` int NOT NULL, `user_id` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` varchar(255) NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `alias` varchar(255) NOT NULL, `organizationId` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `league_staff` (`leagueId` int NOT NULL, `roleId` int NOT NULL, `userId` varchar(255) NOT NULL, PRIMARY KEY (`leagueId`, `roleId`, `userId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `league` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `leagueGamesId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `league_division` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `leagueGameId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `league_game` (`id` int NOT NULL AUTO_INCREMENT, `leagueId` int NOT NULL, `gameId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `game` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `leagueGamesId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `organization` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `website` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `pet` ADD CONSTRAINT `FK_64704296b7bd17e90ca0a620a98` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`)");
        await queryRunner.query("ALTER TABLE `league_staff` ADD CONSTRAINT `FK_f8f5839f3a144b9374d8ad31412` FOREIGN KEY (`leagueId`) REFERENCES `league`(`id`)");
        await queryRunner.query("ALTER TABLE `league_staff` ADD CONSTRAINT `FK_4db566b15d3cdf376116fd523f4` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`)");
        await queryRunner.query("ALTER TABLE `league_staff` ADD CONSTRAINT `FK_ebd5dcc71ec15b761a4796dc02a` FOREIGN KEY (`userId`) REFERENCES `user`(`id`)");
        await queryRunner.query("ALTER TABLE `league` ADD CONSTRAINT `FK_2e633fee291e4d506a32d1b8fff` FOREIGN KEY (`leagueGamesId`) REFERENCES `league_game`(`id`)");
        await queryRunner.query("ALTER TABLE `league_division` ADD CONSTRAINT `FK_8f6520f45d49014adfafc6039b8` FOREIGN KEY (`leagueGameId`) REFERENCES `league_game`(`id`)");
        await queryRunner.query("ALTER TABLE `league_game` ADD CONSTRAINT `FK_08c344d69245d802fa7d25aec41` FOREIGN KEY (`leagueId`) REFERENCES `league`(`id`)");
        await queryRunner.query("ALTER TABLE `league_game` ADD CONSTRAINT `FK_b066580203e9f1ef16fd1090463` FOREIGN KEY (`gameId`) REFERENCES `game`(`id`)");
        await queryRunner.query("ALTER TABLE `game` ADD CONSTRAINT `FK_2fd9403dce443a9308a6827c6c1` FOREIGN KEY (`leagueGamesId`) REFERENCES `league_game`(`id`)");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `game` DROP FOREIGN KEY `FK_2fd9403dce443a9308a6827c6c1`");
        await queryRunner.query("ALTER TABLE `league_game` DROP FOREIGN KEY `FK_b066580203e9f1ef16fd1090463`");
        await queryRunner.query("ALTER TABLE `league_game` DROP FOREIGN KEY `FK_08c344d69245d802fa7d25aec41`");
        await queryRunner.query("ALTER TABLE `league_division` DROP FOREIGN KEY `FK_8f6520f45d49014adfafc6039b8`");
        await queryRunner.query("ALTER TABLE `league` DROP FOREIGN KEY `FK_2e633fee291e4d506a32d1b8fff`");
        await queryRunner.query("ALTER TABLE `league_staff` DROP FOREIGN KEY `FK_ebd5dcc71ec15b761a4796dc02a`");
        await queryRunner.query("ALTER TABLE `league_staff` DROP FOREIGN KEY `FK_4db566b15d3cdf376116fd523f4`");
        await queryRunner.query("ALTER TABLE `league_staff` DROP FOREIGN KEY `FK_f8f5839f3a144b9374d8ad31412`");
        await queryRunner.query("ALTER TABLE `pet` DROP FOREIGN KEY `FK_64704296b7bd17e90ca0a620a98`");
        await queryRunner.query("DROP TABLE `organization`");
        await queryRunner.query("DROP TABLE `game`");
        await queryRunner.query("DROP TABLE `league_game`");
        await queryRunner.query("DROP TABLE `league_division`");
        await queryRunner.query("DROP TABLE `league`");
        await queryRunner.query("DROP TABLE `league_staff`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `pet`");
        await queryRunner.query("DROP TABLE `role`");
    }

}
