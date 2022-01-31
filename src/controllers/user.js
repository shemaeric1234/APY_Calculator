import apyServices from '../servises/apy';
import response from '../helpers/response.helper';

/**
 * Class for users related operations
 */
class userController {
  /**
     * signup a user and saving user data in the database
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @returns {Object} A user object with selected fields
     */
  static async CreacteUser(req, res) {
    try {
      const {
        firstName,
        lastName,
      } = req.body;

      const Newuser = {
        firstName,
        lastName,
      };
      const createduser = await apyServices.CreateUser(Newuser);
      response.successMessage(
        res,
        'user created successfully',
        201,
        createduser
      );
    } catch (e) {
      return response.errorMessage(
        res,
        e.message,
        500,
      );
    }
  }

  static async GetAllusers(req, res) {
    try {
      const allUsers = await apyServices.findAllusers();
      const message = {};
      if (allUsers.length === 0) {
        message.message = 'No data found !';
        message.status = 404;
      }
      response.successMessage(
        res,
        message.message || 'Users retrieved successfully',
        message.status || 200,
        !message.message && allUsers
      );
    } catch (e) {
      return response.errorMessage(
        res,
        e.message,
        500,
      );
    }
  }
  static async GetUser(req, res) {
    try {
      const userId = parseInt(req.params.userID, 10)
      const user = await apyServices.findUserById(userId);
      const message = {};
      if (user === null) {
        message.message = 'No data found !';
        message.status = 404;
      }
      response.successMessage(
        res,
        message.message || 'user retrieved successfully',
        message.status || 200,
        !message.message && user
      );
    } catch (e) {
      return response.errorMessage(
        res,
        e.message,
        500,
      );
    }
  }
}


export default userController;
