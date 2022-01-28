import apyServices from '../servises/apy';
import response from '../helpers/response.helper';
import apy from '../database/models/apy';


class Delete {

    static async DeleteData(req, res) {
        try {
            const IdToBeDeleted = parseInt(req.params.id, 10);
            const table = req.params.tableName;
            const Result = await apyServices.Delete(table, IdToBeDeleted);
            response.successMessage(
                res,
                'Data deleted successfully',
                200,
                Result
            );
        } catch (e) {
            return response.errorMessage(
                res,
                e.message,
                500,
            );
        }
    }
    static async DeleteAllApy(req, res) {
        try {
            const IdToBeDeleted = parseInt(req.params.userID, 10);
            const Result = await apyServices.DeleteAllApy('apy', IdToBeDeleted);
            response.successMessage(
                res,
                'Data deleted successfully',
                200,
                Result
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


export default Delete;
