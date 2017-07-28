import { Injectable } from '@angular/core';
import { User } from '../models/user';

const usersPromise : Promise<User[]> = Promise.resolve([
	{
		id: 1,
		name: 'Johannes',
		username: 'ischi11',
		avatar: 'https://pbs.twimg.com/profile_images/734753059348193280/VgDy85Ka_400x400.jpg'
	},
	{
		id: 2,
		name: 'Alexander',
		username: 'vanderbellen',
		avatar: 'https://pbs.twimg.com/profile_images/847767471843049472/TpBRVnRQ_400x400.jpg'
	},
	{
		id: 3,
		name: 'Armin',
		username: 'ArminWolf',
		avatar: 'https://pbs.twimg.com/profile_images/875628664720834560/lCDVZAiP_400x400.jpg'
	}
]);

@Injectable()
export class UserService {

	getUsers() {
		return usersPromise;
	}

	getUser(username) {
		return usersPromise.then(users => users.find(user => user.username === username));
	}

}