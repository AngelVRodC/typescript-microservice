import { BaseEntity,CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn  } from 'typeorm';

/**
 * Base Class 
 */
export class BaseClass extends BaseEntity {

  @PrimaryGeneratedColumn()
  public id: number;

  @CreateDateColumn({ type: 'timestamp with time zone', name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone', name: 'updated_at', nullable: true })
  public updatedAt: Date;
}