const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

type Book{
    bid: Int!
    bName: String!
    author: Author
}

type Author{
    aid: Int!
    aName: String!
    books: [Book!]
}


type Query{
    getBooks: [Book]
    getAuthors: [Author]
}

`;

const books = [
    {
      bid: 1,
      bName: 'Kate Chopin',
    },
    {
        bid: 2,
        bName: 'Kate Chopin',
    },
  ];

const resolvers = {
    Query : {
        getBooks: () => books,
        getAuthors: () => []
    },
};

const server = new ApolloServer({typeDefs,resolvers});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
