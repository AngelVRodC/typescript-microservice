import { getRepository, Repository } from 'typeorm';
import { IUser } from '../interfaces';
import { User } from '../models/user';


/**
 * User Service 
 */
export class UserService {

  public userRepository: Repository<User>;

  constructor(){
    this.userRepository = getRepository(User);
  }

  public retrieve = async (id: number): Promise<User> => {

    return this.userRepository.findOneOrFail(id);
  }

  public list = async (): Promise<User[]> => {

    return this.userRepository.find();
  }

  public create = async (newUser: IUser): Promise<User> => {
    const user = new User(newUser);

    return user.save();
  }

  public update = async (id: number, newUser: IUser): Promise<User> => {
    try {
      const user = await this.userRepository.findOneOrFail(id);
      user.name = newUser.name;
      user.email = newUser.email;
      user.phone = newUser.phone; 

      return user.save();

    } catch(error) {
      throw error;
    }
  }

  public remove = async (id: number): Promise<User> => {
    try {
      const user = await this.userRepository.findOneOrFail(id);
      
      return user.remove();

    } catch(error) {
      throw error;
    }
  }
}

