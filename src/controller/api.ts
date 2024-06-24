import { Request, Response, NextFunction } from 'express';
import { db } from '../config/firebaseConfig';
import { ApiError } from '../entities/ApiError';

export const updateUserData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, userData } = req.body;
    await db.collection('USERS').doc(userId).set(userData, { merge: true });
    res.status(200).send({ message: 'User data updated successfully' });
  } catch (error) {
    next(new ApiError('Failed to update user data', 500));
  }
};

export const fetchUserData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    const userDoc = await db.collection('USERS').doc(userId).get();
    if (!userDoc.exists) {
      throw new ApiError('User not found', 404);
    }
    res.status(200).send(userDoc.data());
  } catch (error) {
    next(error);
  }
};

export const helloWorld = (res: Response) => {
  res.status(200).send("hello world");
}
