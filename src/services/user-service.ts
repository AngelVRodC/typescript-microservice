import { getRepository, Repository } from 'typeorm';
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

  public create = async (name: string, email: string, phone: string): Promise<User> => {
    const user = new User(name,email,phone);

    return user.save();
  }

  public update = async (id: number, name: string, email: string, phone: string): Promise<User> => {
    try {
      const user = await this.userRepository.findOneOrFail(id);
      user.name = name;
      user.email = email;
      user.phone = phone; 

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

