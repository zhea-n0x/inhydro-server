import {Injectable, OnModuleInit} from "@nestjs/common";
import {User} from './user.entity';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UsersService implements OnModuleInit{
    private users: User[] = [];

    private filePath = path.join(process.cwd(), 'src/dev-data/users.txt');

  onModuleInit() {
    console.log('Load user from file!')
    this.loadFromFile();
    console.log('Users loaded:', this.users)
  }

  private loadFromFile() {
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, '[]');
    }

    const raw = fs.readFileSync(this.filePath, 'utf-8');
    this.users = JSON.parse(raw);
  }

  private saveToFile() {
    fs.writeFileSync(this.filePath, JSON.stringify(this.users, null, 2));
  }

    create(data: any){
        const user = {
            id: Date.now(),
            name: data.name,
            email: data.email,
            hashedPassword: data.password
        };

        this.users.push(user);
        this.saveToFile()
        return user;
    }

    findAll(){
        return this.users.map(({hashedPassword, ...u}) => u);
    }

    findByEmail(email: string): User | undefined{
        return this.users.find(u => u.email === email)
    }
}