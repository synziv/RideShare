import { IUser } from '../entity/user';
import express from 'express';

// make logic to only calculate if the item list has a different length

/*const resetOwingArr =(userInGroup: IUser[])=>{
  userInGroup.forEach(user=>{
    user.owingArr.forEach(x=> x.owing =0);
  });
}*/
export const fetchUsersInGroup = async (req: express.Request, res: express.Response)=>{
  const usersInGroup:any[] =[];
  return usersInGroup;
}
