import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column({ name: 'name' })
    public name: string;

    @IsNotEmpty()
    @Column({ name: 'description' })
    public description: string;

    @IsNotEmpty()
    @Column()
    public email: string;

    @IsNotEmpty()
    @Column()
    public website: string;

    public toString(): string {
        return `${this.name} (${this.email})`;
    }

}
