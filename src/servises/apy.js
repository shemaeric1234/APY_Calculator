import db from '../database/models';
import Queries from './Queries';


/**
 * This class contains functions for all user app.
 */
class apyServices {
  /**
 * creating user query
 * @param {string} NewVision user table in database.
 * @returns {array} data the data to be returned.
 */
  static async CreateUser(NewUser) {
    return Queries.create(db.user, NewUser);
  }
  /**
 * creating apy query
 * @param {string} NewApy apy table in database.
 * @returns {array} data the data to be returned.
 */
  static async CreateApy(NewApy) {
    return Queries.create(db.apy, NewApy);
  }

  /**
 * Find user by id
 * @param {Object} id user id.
 * @returns {Object} Returns a user object and if user doesn't exist it returns null.
 */
  static async findUserById(id) {
    try {
      const user = await db.user.findOne({ where: { id } });
      if (!user) return null;
      return user;
    } catch (error) {
      return undefined;
    }
  }

  /**
 * Find users
 * @returns {Object} Returns a user object and if user doesn't exist it returns null.
 */
  static async findAllusers() {
    try {

      const users = await Queries.findAll(db.user);
      if (!users) return null;
      return users;
    } catch (error) {
      return undefined;
    }
  }
  /**
 * Find Apys
 * @returns {Object} Returns a apy  and if it doesn't exist it returns null.
 */
  static async findAllApys(userID) {
    try {

      const Apys = await Queries.findAllApy(db.apy, userID);
      if (!Apys) return null;
      return Apys;
    } catch (error) {
      return undefined;
    }
  }

  /**
 * delete
 * @returns {Object} result.
 */
  static async Delete(tableName, id) {
    const result = await Queries.Delete(db[tableName], id);
    console.log('result', result);
    if (result) {
      return result;
    }
    return false;
  }

  /**
 * delete
 * @returns {Object} result.
 */
  static async DeleteAllApy(tableName, id) {
    const result = await Queries.DeleteAllApy(db[tableName], id);
    console.log('result', result);
    if (result) {
      return result;
    }
    return false;
  }
}
export default apyServices;
