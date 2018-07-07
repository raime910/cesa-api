import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1530972246227 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `game` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `website` varchar(255) NOT NULL, `leagueGamesId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `organization` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `website` varchar(255) NOT NULL, `teamsId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `team` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `organizationId` int NOT NULL, `entriesId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `league_division` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `leagueGameId` int NOT NULL, `entriesId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `league_game` (`id` int NOT NULL AUTO_INCREMENT, `leagueId` int NOT NULL, `gameId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `league` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `rules` varchar(255) NOT NULL, `prize` varchar(255) NOT NULL, `leagueGamesId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `role` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `league_staff` (`leagueId` int NOT NULL, `roleId` int NOT NULL, `userId` int NOT NULL, PRIMARY KEY (`leagueId`, `roleId`, `userId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `pet` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `age` int NOT NULL, `user_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `alias` varchar(255) NOT NULL, `organizationId` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `entry_roster` (`id` int NOT NULL AUTO_INCREMENT, `userId` int NOT NULL, `entryId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `division_team_entry` (`id` int NOT NULL AUTO_INCREMENT, `divisionId` int NOT NULL, `teamId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `_division_team` (`teamId` int NOT NULL, `leagueDivisionId` int NOT NULL, PRIMARY KEY (`teamId`, `leagueDivisionId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `game` ADD CONSTRAINT `FK_2fd9403dce443a9308a6827c6c1` FOREIGN KEY (`leagueGamesId`) REFERENCES `league_game`(`id`)");
        await queryRunner.query("ALTER TABLE `organization` ADD CONSTRAINT `FK_9963373bf2fe82f9e8647bcd514` FOREIGN KEY (`teamsId`) REFERENCES `team`(`id`)");
        await queryRunner.query("ALTER TABLE `team` ADD CONSTRAINT `FK_12e10686074dba7e8fd02f41bf4` FOREIGN KEY (`organizationId`) REFERENCES `organization`(`id`)");
        await queryRunner.query("ALTER TABLE `team` ADD CONSTRAINT `FK_a0c7f1c93d8d7293b97a4a68091` FOREIGN KEY (`entriesId`) REFERENCES `division_team_entry`(`id`)");
        await queryRunner.query("ALTER TABLE `league_division` ADD CONSTRAINT `FK_8f6520f45d49014adfafc6039b8` FOREIGN KEY (`leagueGameId`) REFERENCES `league_game`(`id`)");
        await queryRunner.query("ALTER TABLE `league_division` ADD CONSTRAINT `FK_c7d40b49cc3565f42b7e28b346f` FOREIGN KEY (`entriesId`) REFERENCES `division_team_entry`(`id`)");
        await queryRunner.query("ALTER TABLE `league_game` ADD CONSTRAINT `FK_08c344d69245d802fa7d25aec41` FOREIGN KEY (`leagueId`) REFERENCES `league`(`id`)");
        await queryRunner.query("ALTER TABLE `league_game` ADD CONSTRAINT `FK_b066580203e9f1ef16fd1090463` FOREIGN KEY (`gameId`) REFERENCES `game`(`id`)");
        await queryRunner.query("ALTER TABLE `league` ADD CONSTRAINT `FK_2e633fee291e4d506a32d1b8fff` FOREIGN KEY (`leagueGamesId`) REFERENCES `league_game`(`id`)");
        await queryRunner.query("ALTER TABLE `league_staff` ADD CONSTRAINT `FK_f8f5839f3a144b9374d8ad31412` FOREIGN KEY (`leagueId`) REFERENCES `league`(`id`)");
        await queryRunner.query("ALTER TABLE `league_staff` ADD CONSTRAINT `FK_4db566b15d3cdf376116fd523f4` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`)");
        await queryRunner.query("ALTER TABLE `league_staff` ADD CONSTRAINT `FK_ebd5dcc71ec15b761a4796dc02a` FOREIGN KEY (`userId`) REFERENCES `user`(`id`)");
        await queryRunner.query("ALTER TABLE `pet` ADD CONSTRAINT `FK_64704296b7bd17e90ca0a620a98` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`)");
        await queryRunner.query("ALTER TABLE `entry_roster` ADD CONSTRAINT `FK_66df19d9b421ce1f55342a9811a` FOREIGN KEY (`userId`) REFERENCES `user`(`id`)");
        await queryRunner.query("ALTER TABLE `entry_roster` ADD CONSTRAINT `FK_db8a7867de962170ec0813f3f17` FOREIGN KEY (`entryId`) REFERENCES `division_team_entry`(`id`)");
        await queryRunner.query("ALTER TABLE `division_team_entry` ADD CONSTRAINT `FK_7d101d29dd4ff01c6d5fd7d50c5` FOREIGN KEY (`divisionId`) REFERENCES `league_division`(`id`)");
        await queryRunner.query("ALTER TABLE `division_team_entry` ADD CONSTRAINT `FK_014d7472623a168a5590be3a214` FOREIGN KEY (`teamId`) REFERENCES `team`(`id`)");
        await queryRunner.query("ALTER TABLE `_division_team` ADD CONSTRAINT `FK_1dd69f97ea9c0047d264f2f0697` FOREIGN KEY (`teamId`) REFERENCES `team`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `_division_team` ADD CONSTRAINT `FK_0af266a13bc31298b9f4132dcf1` FOREIGN KEY (`leagueDivisionId`) REFERENCES `league_division`(`id`) ON DELETE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `_division_team` DROP FOREIGN KEY `FK_0af266a13bc31298b9f4132dcf1`");
        await queryRunner.query("ALTER TABLE `_division_team` DROP FOREIGN KEY `FK_1dd69f97ea9c0047d264f2f0697`");
        await queryRunner.query("ALTER TABLE `division_team_entry` DROP FOREIGN KEY `FK_014d7472623a168a5590be3a214`");
        await queryRunner.query("ALTER TABLE `division_team_entry` DROP FOREIGN KEY `FK_7d101d29dd4ff01c6d5fd7d50c5`");
        await queryRunner.query("ALTER TABLE `entry_roster` DROP FOREIGN KEY `FK_db8a7867de962170ec0813f3f17`");
        await queryRunner.query("ALTER TABLE `entry_roster` DROP FOREIGN KEY `FK_66df19d9b421ce1f55342a9811a`");
        await queryRunner.query("ALTER TABLE `pet` DROP FOREIGN KEY `FK_64704296b7bd17e90ca0a620a98`");
        await queryRunner.query("ALTER TABLE `league_staff` DROP FOREIGN KEY `FK_ebd5dcc71ec15b761a4796dc02a`");
        await queryRunner.query("ALTER TABLE `league_staff` DROP FOREIGN KEY `FK_4db566b15d3cdf376116fd523f4`");
        await queryRunner.query("ALTER TABLE `league_staff` DROP FOREIGN KEY `FK_f8f5839f3a144b9374d8ad31412`");
        await queryRunner.query("ALTER TABLE `league` DROP FOREIGN KEY `FK_2e633fee291e4d506a32d1b8fff`");
        await queryRunner.query("ALTER TABLE `league_game` DROP FOREIGN KEY `FK_b066580203e9f1ef16fd1090463`");
        await queryRunner.query("ALTER TABLE `league_game` DROP FOREIGN KEY `FK_08c344d69245d802fa7d25aec41`");
        await queryRunner.query("ALTER TABLE `league_division` DROP FOREIGN KEY `FK_c7d40b49cc3565f42b7e28b346f`");
        await queryRunner.query("ALTER TABLE `league_division` DROP FOREIGN KEY `FK_8f6520f45d49014adfafc6039b8`");
        await queryRunner.query("ALTER TABLE `team` DROP FOREIGN KEY `FK_a0c7f1c93d8d7293b97a4a68091`");
        await queryRunner.query("ALTER TABLE `team` DROP FOREIGN KEY `FK_12e10686074dba7e8fd02f41bf4`");
        await queryRunner.query("ALTER TABLE `organization` DROP FOREIGN KEY `FK_9963373bf2fe82f9e8647bcd514`");
        await queryRunner.query("ALTER TABLE `game` DROP FOREIGN KEY `FK_2fd9403dce443a9308a6827c6c1`");
        await queryRunner.query("DROP TABLE `_division_team`");
        await queryRunner.query("DROP TABLE `division_team_entry`");
        await queryRunner.query("DROP TABLE `entry_roster`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `pet`");
        await queryRunner.query("DROP TABLE `league_staff`");
        await queryRunner.query("DROP TABLE `role`");
        await queryRunner.query("DROP TABLE `league`");
        await queryRunner.query("DROP TABLE `league_game`");
        await queryRunner.query("DROP TABLE `league_division`");
        await queryRunner.query("DROP TABLE `team`");
        await queryRunner.query("DROP TABLE `organization`");
        await queryRunner.query("DROP TABLE `game`");
    }

}
