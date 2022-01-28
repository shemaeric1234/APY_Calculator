import { Op } from 'sequelize';
import db from '../database/models';
/**
 * class for responses
 */
class Queries {
  /**
 * creating data in a give table
 * @param {string} table table in database.
 * @param {string} data the data to be inputed in database.
 * @returns {array} data the data to be returned.
 */
  static async create(table, data) {
    try {
      const datas = await table.create(data);
      return datas;
    } catch (error) {
      return error;
    }
  }

  /**
   * searching a all
   * @param {string} table any table in database.
   * @returns {array} data the data to be returned.
   */
  static async findAll(table) {
    const data = await table.findAll();
    return data;
  }
  /**
   * searching a all
   * @param {string} table any table in database.
   * @returns {array} data the data to be returned.
   */
  static async findAllApy(table, id) {
    const data = await table.findAll({
      where: {
        [Op.and]: [
          { customer_id: { [Op.eq]: id } }
        ]
      }
    });
    return data;
  }

  /**
  * This servise delete data in a given table
  * @param {String} table table
  * @param {Object} value  id
  * @returns { Object } response as object
  */
  static async Delete(table, id) {
    const result = await table.destroy({ where: { id } });
    if (result) {
      return result;
    }
    return false;
  }
  /**
  * This servise delete data in a given table
  * @param {String} table table
  * @param {Object} value  id
  * @returns { Object } response as object
  */
  static async DeleteAllApy(table, customer_id) {
    const result = await table.destroy({ where: { customer_id } });
    if (result) {
      return result;
    }
    return false;
  }

}
export default Queries;
