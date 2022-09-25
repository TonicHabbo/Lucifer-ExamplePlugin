import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lucifer_plugin_example')
export class ExampleEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    value: string;

    @Column()
    description: string;
}
