import { createServer } from 'miragejs'
import { createGraphQLHandler } from '@miragejs/graphql'
import { gql } from '@apollo/client'

const schema = gql`
    type Query {
        project: String!
    }
`
export default function ({ environment }) {
    console.log('miragejs sesrver')
    return createServer({
        environment,
        routes() {
            this.post(
                '/api/graphql',
                createGraphQLHandler(schema, this.schema, {
                    context: {},
                    root: {},
                    resolvers: {
                        Query: {
                            project: () => 'Hello World',
                        },
                    },
                })
            )
        },
    })
}
