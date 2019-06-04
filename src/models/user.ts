import { IsDefined, IsEmail, IsPhoneNumber, IsString, Length } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { BaseClass } from './base';


/**
 * User Class 
 */
@Entity({ name: 'users' })
export class User extends BaseClass {

  @IsDefined()
  @IsString()
  @Length(1,100)
  @Column('varchar')
  public name: string;

  @IsDefined()
  @IsString()
  @IsEmail()
  @Column('varchar', { unique: true })
  public email: string;

  @IsDefined()
  @IsPhoneNumber(null)// NULL OR ISO COUNTRY
  @Column('varchar')
  public phone: string;

}