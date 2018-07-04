import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1530688527689 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `pet` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `age` int NOT NULL, `user_id` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` varchar(255) NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `alias` varchar(255) NOT NULL, `organizationId` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `organization` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `website` varchar(255) NOT NULL, `alias` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `division_roster` (`organization_id` varchar(255) NOT NULL, `user_id` varchar(255) NOT NULL, `division_id` varchar(255) NOT NULL, PRIMARY KEY (`organization_id`, `user_id`, `division_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `game_category` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `shortName` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `league` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `website` varchar(255) NOT NULL, `twitter` varchar(255) NOT NULL, `twitch` varchar(255) NOT NULL, `facebook` varchar(255) NOT NULL, `youtube` varchar(255) NOT NULL, `discord` varchar(255) NOT NULL, `googlePlus` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `game` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `gameCategoryId` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `league_category` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `rules` varchar(255) NOT NULL, `prizes` varchar(255) NOT NULL, `schedule` datetime NOT NULL, `leagueId` varchar(255) NOT NULL, `gameId` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `division` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `leagueCategoryId` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `pet` ADD CONSTRAINT `FK_64704296b7bd17e90ca0a620a98` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`)");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_dfda472c0af7812401e592b6a61` FOREIGN KEY (`organizationId`) REFERENCES `organization`(`id`)");
        await queryRunner.query("ALTER TABLE `game` ADD CONSTRAINT `FK_0f62a99aea83a079ee4944b9bb6` FOREIGN KEY (`gameCategoryId`) REFERENCES `game_category`(`id`)");
        await queryRunner.query("ALTER TABLE `league_category` ADD CONSTRAINT `FK_f279f74b6309ca244fc1867a8ad` FOREIGN KEY (`leagueId`) REFERENCES `league`(`id`)");
        await queryRunner.query("ALTER TABLE `league_category` ADD CONSTRAINT `FK_1b10aba4453643ecaa790c4f821` FOREIGN KEY (`gameId`) REFERENCES `game`(`id`)");
        await queryRunner.query("ALTER TABLE `division` ADD CONSTRAINT `FK_075e81558c338fe1752bd04da24` FOREIGN KEY (`leagueCategoryId`) REFERENCES `league_category`(`id`)");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `division` DROP FOREIGN KEY `FK_075e81558c338fe1752bd04da24`");
        await queryRunner.query("ALTER TABLE `league_category` DROP FOREIGN KEY `FK_1b10aba4453643ecaa790c4f821`");
        await queryRunner.query("ALTER TABLE `league_category` DROP FOREIGN KEY `FK_f279f74b6309ca244fc1867a8ad`");
        await queryRunner.query("ALTER TABLE `game` DROP FOREIGN KEY `FK_0f62a99aea83a079ee4944b9bb6`");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_dfda472c0af7812401e592b6a61`");
        await queryRunner.query("ALTER TABLE `pet` DROP FOREIGN KEY `FK_64704296b7bd17e90ca0a620a98`");
        await queryRunner.query("DROP TABLE `division`");
        await queryRunner.query("DROP TABLE `league_category`");
        await queryRunner.query("DROP TABLE `game`");
        await queryRunner.query("DROP TABLE `league`");
        await queryRunner.query("DROP TABLE `game_category`");
        await queryRunner.query("DROP TABLE `division_roster`");
        await queryRunner.query("DROP TABLE `organization`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `pet`");
    }

}
