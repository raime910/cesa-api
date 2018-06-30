import {MigrationInterface, QueryRunner} from "typeorm";

export class initialize1530334401920 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `league` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `league_category` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `leagueId` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `league_division` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `leagueCategoryId` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `pet` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `age` int NOT NULL, `userId` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` varchar(255) NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `alias` varchar(255) NOT NULL, `companyId` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `company` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `website` varchar(255) NOT NULL, `alias` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `game_category` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `shortName` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `game` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `gameCategoryId` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `leagueLeagueCategories` (`leagueId` varchar(255) NOT NULL, `leagueCategoryId` varchar(255) NOT NULL, PRIMARY KEY (`leagueId`, `leagueCategoryId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `companyLeagueDivisions` (`leagueDivisionId` varchar(255) NOT NULL, `companyId` varchar(255) NOT NULL, PRIMARY KEY (`leagueDivisionId`, `companyId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `gameLeagues` (`gameId` varchar(255) NOT NULL, `leagueId` varchar(255) NOT NULL, PRIMARY KEY (`gameId`, `leagueId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `league_category` ADD CONSTRAINT `FK_f279f74b6309ca244fc1867a8ad` FOREIGN KEY (`leagueId`) REFERENCES `league`(`id`)");
        await queryRunner.query("ALTER TABLE `league_division` ADD CONSTRAINT `FK_8c778e2e8deeda4cf76f99271e0` FOREIGN KEY (`leagueCategoryId`) REFERENCES `league_category`(`id`)");
        await queryRunner.query("ALTER TABLE `pet` ADD CONSTRAINT `FK_4eb3b1eeefc7cdeae09f934f479` FOREIGN KEY (`userId`) REFERENCES `user`(`id`)");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_86586021a26d1180b0968f98502` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`)");
        await queryRunner.query("ALTER TABLE `game` ADD CONSTRAINT `FK_0f62a99aea83a079ee4944b9bb6` FOREIGN KEY (`gameCategoryId`) REFERENCES `game_category`(`id`)");
        await queryRunner.query("ALTER TABLE `leagueLeagueCategories` ADD CONSTRAINT `FK_7cca752e29f765a101f74df1577` FOREIGN KEY (`leagueId`) REFERENCES `league`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `leagueLeagueCategories` ADD CONSTRAINT `FK_acbb0ac0804e59374eb33589c90` FOREIGN KEY (`leagueCategoryId`) REFERENCES `league_category`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `companyLeagueDivisions` ADD CONSTRAINT `FK_c227a40d791e468430b7943bfbd` FOREIGN KEY (`leagueDivisionId`) REFERENCES `league_division`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `companyLeagueDivisions` ADD CONSTRAINT `FK_4c9596a31c3f54b281001eb7667` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `gameLeagues` ADD CONSTRAINT `FK_50dce3673b9a54896af56ae7753` FOREIGN KEY (`gameId`) REFERENCES `game`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `gameLeagues` ADD CONSTRAINT `FK_47bb8330c90b62c44097919e2a2` FOREIGN KEY (`leagueId`) REFERENCES `league`(`id`) ON DELETE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `gameLeagues` DROP FOREIGN KEY `FK_47bb8330c90b62c44097919e2a2`");
        await queryRunner.query("ALTER TABLE `gameLeagues` DROP FOREIGN KEY `FK_50dce3673b9a54896af56ae7753`");
        await queryRunner.query("ALTER TABLE `companyLeagueDivisions` DROP FOREIGN KEY `FK_4c9596a31c3f54b281001eb7667`");
        await queryRunner.query("ALTER TABLE `companyLeagueDivisions` DROP FOREIGN KEY `FK_c227a40d791e468430b7943bfbd`");
        await queryRunner.query("ALTER TABLE `leagueLeagueCategories` DROP FOREIGN KEY `FK_acbb0ac0804e59374eb33589c90`");
        await queryRunner.query("ALTER TABLE `leagueLeagueCategories` DROP FOREIGN KEY `FK_7cca752e29f765a101f74df1577`");
        await queryRunner.query("ALTER TABLE `game` DROP FOREIGN KEY `FK_0f62a99aea83a079ee4944b9bb6`");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_86586021a26d1180b0968f98502`");
        await queryRunner.query("ALTER TABLE `pet` DROP FOREIGN KEY `FK_4eb3b1eeefc7cdeae09f934f479`");
        await queryRunner.query("ALTER TABLE `league_division` DROP FOREIGN KEY `FK_8c778e2e8deeda4cf76f99271e0`");
        await queryRunner.query("ALTER TABLE `league_category` DROP FOREIGN KEY `FK_f279f74b6309ca244fc1867a8ad`");
        await queryRunner.query("DROP TABLE `gameLeagues`");
        await queryRunner.query("DROP TABLE `companyLeagueDivisions`");
        await queryRunner.query("DROP TABLE `leagueLeagueCategories`");
        await queryRunner.query("DROP TABLE `game`");
        await queryRunner.query("DROP TABLE `game_category`");
        await queryRunner.query("DROP TABLE `company`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `pet`");
        await queryRunner.query("DROP TABLE `league_division`");
        await queryRunner.query("DROP TABLE `league_category`");
        await queryRunner.query("DROP TABLE `league`");
    }

}
