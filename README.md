---

# Node GraphQL Server for Azure Cosmos DB

This Node.js server utilizes Apollo Server to handle GraphQL requests and interacts with Azure Cosmos DB to manage user data. The server is designed to provide a robust API for user operations including fetching and creating user records.

## Prerequisites

- Node.js installed (v12.x or higher recommended)
- Access to an Azure Cosmos DB account
- An environment where Node.js can run (local machine, server, or a cloud environment)

## Configuration

1. **Environment Variables**: Before running the server, you must configure the necessary environment variables. Create a `.env` file in the root directory and add the following keys:

   ```plaintext
   COSMOS_ENDPOINT=your_cosmos_db_endpoint
   COSMOS_KEY=your_cosmos_db_key
   DATABASE_ID=your_database_id
   CONTAINER_ID=your_container_id
   ```

   Replace `your_cosmos_db_endpoint`, `your_cosmos_db_key`, `your_database_id`, and `your_container_id` with your actual Azure Cosmos DB settings.

2. **Dependencies**: Install the required packages defined in `package.json`.

   ```bash
   npm install
   ```

## Running the Server

To start the server, run the following command in the terminal:

```bash
npm start
```

This will initiate the server on the default port (4000) and make the GraphQL API available for interaction.

## GraphQL Schema

The GraphQL schema defines the following main types and operations:

- **User Type**: Represents a user with fields such as `id`, `name`, and `email`.
- **Queries**:
  - `getUserById`: Retrieves a user by their unique ID.
- **Mutations**:
  - `createUser`: Creates a new user with provided details.

## Using the API

You can interact with the GraphQL API using any standard GraphQL client or tools like Apollo Studio, Postman, or simple CURL commands. Here’s an example query to fetch a user by ID:

```graphql
query {
  getUserById(id: "user_id_here") {
    id
    name
    email
  }
}
```

And a mutation to create a user:

```graphql
mutation {
  createUser(input: { name: "John Doe", email: "john.doe@example.com" }) {
    id
    name
    email
  }
}
```

## Development

- **Local Development**: For local development, ensure that you have configured the `.env` file as mentioned above.
- **Deployment**: For deployment instructions, refer to your specific hosting or cloud provider's documentation.

## Support

For any issues or support requests, please submit an issue on the GitHub repository page or contact the development team.

---

- [Azure Cosmos DB](https://docs.microsoft.com/azure/cosmos-db/introduction)
- [Azure Cosmos DB: SQL API](https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-introduction)
- [Azure Cosmos DB Node.js SDK](https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-sdk-node)
- [Azure Cosmos DB Node.js SDK Reference Documentation](http://azure.github.io/azure-documentdb-node/)
