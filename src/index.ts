import 'source-map-support/register'
import { IterationTasks } from './models/IterationTasks'
import { sequelize } from './sequelize';
import { V0MODELS } from './model.index';

exports.handler = async (event: any = {}): Promise<any> => {
    console.log(`processing lambda for ${event}`)
    let contractId
    let response
    
    await sequelize.addModels(V0MODELS);
    await sequelize.sync();

    try{
        contractId = parseContractId(event)
    }
    catch(e){
        console.log('Invalid parameters', e.message)
        return {
            statusCode: 400,
            ders: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                error: 'Failed to fetch contractId value'
            })
        }
    }

    console.log('contractId: ', contractId)

    const result = await IterationTasks.findByPk(contractId)

    console.log('Result: ', result)

    response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            result
        })
    };

    return response
         
}

function parseContractId(event: any){
    const contractId = event.contractId
    if(!contractId){
        console.log('No contractId param specified')
        return undefined 
    }

    return parseInt(contractId)
}

/**
 * Get value of the limit parameter.
 *
 * @param {Object} event HTTP event passed to a Lambda function
 * 
 * @param {Object} name query parameter name
 *
 * @returns {Object} parsed "limitValue" parameter
 */
function getQueryParameter(event: any, name: string){
    console.log(`query parameter processing for ${name}`)
    const queryParams = event.queryStringParameters
    if(!queryParams){
        return undefined
    }    

    console.log(`fetching ${name} from query params`)
    return queryParams[name]
}