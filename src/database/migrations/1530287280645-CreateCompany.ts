import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCompany1530287280645 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('ALTER TABLE `pet` DROP FOREIGN KEY `fk_user_pet`');
        await queryRunner.query('CREATE TABLE `company` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `website` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB');
        await queryRunner.query('ALTER TABLE `user` ADD `alias` varchar(255) NOT NULL');
        await queryRunner.query('ALTER TABLE `pet` ADD CONSTRAINT `FK_64704296b7bd17e90ca0a620a98` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`)');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('ALTER TABLE `pet` DROP FOREIGN KEY `FK_64704296b7bd17e90ca0a620a98`');
        await queryRunner.query('ALTER TABLE `user` DROP COLUMN `alias`');
        await queryRunner.query('DROP TABLE `company`');
        await queryRunner.query('ALTER TABLE `pet` ADD CONSTRAINT `fk_user_pet` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION');
    }

}
