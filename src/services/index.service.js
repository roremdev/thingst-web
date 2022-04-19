import { gql, useQuery } from '@apollo/client'
import ErrorController from '@controllers/Error.controller'

const queryProjectinfo = gql`
    query ProjectInfo {
        project
    }
`

/**
 * @function
 * @description Testing the getProjectinfo query
 * @return Project name */
export const getProjectinfo = () => {
    try {
        return useQuery(queryProjectinfo)
    } catch (error) {
        throw new ErrorController('CLIENT', error.message)
    }
}
