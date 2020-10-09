  export const handler = async (event, context) => {
    return {
      statusCode: 200,
      body: {
        text: "Hello from the API"
      }
    }
  }
