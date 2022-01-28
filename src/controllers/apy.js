import apyServices from '../servises/apy';
import response from '../helpers/response.helper';

class apyController {
  /**
     * signup a user and saving user data in the database
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @returns {Object} A user object with selected fields
     */
  static async CreacteApy(req, res) {
    try {
      const {
        deposit,
        customer_id,
        Interest_rate,
        yearly_compound_times
      } = req.body;

      const NewApy = {
        deposit,
        customer_id,
        Interest_rate,
        yearly_compound_times
      };
      const createdApy = await apyServices.CreateApy(NewApy);
      response.successMessage(
        res,
        'APY created successfully',
        201,
        createdApy
      );
    } catch (e) {
      return response.errorMessage(
        res,
        e.message,
        500,
      );
    }
  }


  static async GetAllApy(req, res) {
    try {
      const userid = parseInt(req.params.userID, 10);
      const allApy = await apyServices.findAllApys(userid);
      const result = [];
      const message = {};
      if (allApy.length === 0) {
        message.message = 'No data found !';
        message.status = 404;
      } else {
        allApy.map((item) => {
          const apy = Math.pow((1 + (item.Interest_rate / item.yearly_compound_times)), item.yearly_compound_times) - 1;
          const gainBack = (item.deposit * apy) + item.deposit;
          result.push(
            {
              rate: apy,
              gainBack
            }
          );
        });
      }
      response.successMessage(
        res,
        message.message || 'APY(S) retrieved successfully',
        message.status || 200,
        !message.message && result

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


export default apyController;
