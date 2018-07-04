import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1530689935616 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `pet` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `age` int NOT NULL, `user_id` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` varchar(255) NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `alias` varchar(255) NOT NULL, `organizationId` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `organization` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `website` varchar(255) NOT NULL, `alias` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `divisionRoster` (`organizationId` varchar(255) NOT NULL, `playerId` varchar(255) NOT NULL, `divisionId` varchar(255) NOT NULL, PRIMARY KEY (`organizationId`, `playerId`, `divisionId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `league` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `website` varchar(255) NOT NULL, `twitter` varchar(255) NOT NULL, `twitch` varchar(255) NOT NULL, `facebook` varchar(255) NOT NULL, `youtube` varchar(255) NOT NULL, `discord` varchar(255) NOT NULL, `googlePlus` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `game` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `leagueCategory` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `rules` varchar(255) NOT NULL, `prizes` varchar(255) NOT NULL, `schedule` datetime NOT NULL, `leagueId` varchar(255) NOT NULL, `gameId` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `division` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `leagueCategoryId` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `gameCategory` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `shortName` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `gameId` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `_league_leagueCategory` (`leagueId` varchar(255) NOT NULL, `leagueCategoryId` varchar(255) NOT NULL, PRIMARY KEY (`leagueId`, `leagueCategoryId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `_league_game` (`leagueId` varchar(255) NOT NULL, `gameId` varchar(255) NOT NULL, PRIMARY KEY (`leagueId`, `gameId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `_organization_division` (`divisionId` varchar(255) NOT NULL, `organizationId` varchar(255) NOT NULL, PRIMARY KEY (`divisionId`, `organizationId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `pet` ADD CONSTRAINT `FK_64704296b7bd17e90ca0a620a98` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`)");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_dfda472c0af7812401e592b6a61` FOREIGN KEY (`organizationId`) REFERENCES `organization`(`id`)");
        await queryRunner.query("ALTER TABLE `leagueCategory` ADD CONSTRAINT `FK_65ed6ba4a6cbd46b19a83ea72d3` FOREIGN KEY (`leagueId`) REFERENCES `league`(`id`)");
        await queryRunner.query("ALTER TABLE `leagueCategory` ADD CONSTRAINT `FK_5216e67d2ba3b06d6480fbb4975` FOREIGN KEY (`gameId`) REFERENCES `game`(`id`)");
        await queryRunner.query("ALTER TABLE `division` ADD CONSTRAINT `FK_075e81558c338fe1752bd04da24` FOREIGN KEY (`leagueCategoryId`) REFERENCES `leagueCategory`(`id`)");
        await queryRunner.query("ALTER TABLE `gameCategory` ADD CONSTRAINT `FK_85ba55b6f24b33fc74be881f951` FOREIGN KEY (`gameId`) REFERENCES `game`(`id`)");
        await queryRunner.query("ALTER TABLE `_league_leagueCategory` ADD CONSTRAINT `FK_7522dac9a59bccc71e9393ef6ce` FOREIGN KEY (`leagueId`) REFERENCES `league`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `_league_leagueCategory` ADD CONSTRAINT `FK_6acf420f90ab4a423ccf3a99c6c` FOREIGN KEY (`leagueCategoryId`) REFERENCES `leagueCategory`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `_league_game` ADD CONSTRAINT `FK_718b94e3d0f7277aeac10430f39` FOREIGN KEY (`leagueId`) REFERENCES `league`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `_league_game` ADD CONSTRAINT `FK_66c6eafbc0b6484d665e3065142` FOREIGN KEY (`gameId`) REFERENCES `game`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `_organization_division` ADD CONSTRAINT `FK_b6396502331a79e30a857a6d07b` FOREIGN KEY (`divisionId`) REFERENCES `division`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `_organization_division` ADD CONSTRAINT `FK_44598354b077c6b46c004bf24fb` FOREIGN KEY (`organizationId`) REFERENCES `organization`(`id`) ON DELETE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `_organization_division` DROP FOREIGN KEY `FK_44598354b077c6b46c004bf24fb`");
        await queryRunner.query("ALTER TABLE `_organization_division` DROP FOREIGN KEY `FK_b6396502331a79e30a857a6d07b`");
        await queryRunner.query("ALTER TABLE `_league_game` DROP FOREIGN KEY `FK_66c6eafbc0b6484d665e3065142`");
        await queryRunner.query("ALTER TABLE `_league_game` DROP FOREIGN KEY `FK_718b94e3d0f7277aeac10430f39`");
        await queryRunner.query("ALTER TABLE `_league_leagueCategory` DROP FOREIGN KEY `FK_6acf420f90ab4a423ccf3a99c6c`");
        await queryRunner.query("ALTER TABLE `_league_leagueCategory` DROP FOREIGN KEY `FK_7522dac9a59bccc71e9393ef6ce`");
        await queryRunner.query("ALTER TABLE `gameCategory` DROP FOREIGN KEY `FK_85ba55b6f24b33fc74be881f951`");
        await queryRunner.query("ALTER TABLE `division` DROP FOREIGN KEY `FK_075e81558c338fe1752bd04da24`");
        await queryRunner.query("ALTER TABLE `leagueCategory` DROP FOREIGN KEY `FK_5216e67d2ba3b06d6480fbb4975`");
        await queryRunner.query("ALTER TABLE `leagueCategory` DROP FOREIGN KEY `FK_65ed6ba4a6cbd46b19a83ea72d3`");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_dfda472c0af7812401e592b6a61`");
        await queryRunner.query("ALTER TABLE `pet` DROP FOREIGN KEY `FK_64704296b7bd17e90ca0a620a98`");
        await queryRunner.query("DROP TABLE `_organization_division`");
        await queryRunner.query("DROP TABLE `_league_game`");
        await queryRunner.query("DROP TABLE `_league_leagueCategory`");
        await queryRunner.query("DROP TABLE `gameCategory`");
        await queryRunner.query("DROP TABLE `division`");
        await queryRunner.query("DROP TABLE `leagueCategory`");
        await queryRunner.query("DROP TABLE `game`");
        await queryRunner.query("DROP TABLE `league`");
        await queryRunner.query("DROP TABLE `divisionRoster`");
        await queryRunner.query("DROP TABLE `organization`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `pet`");
    }

}
