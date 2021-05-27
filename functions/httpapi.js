module.exports.handler = async (event, context) => {
    console.log(JSON.stringify(event));

    const res = {
        statusCode: 200,
        body: JSON.stringify(`Hello from api httpapi. Path: ${event.requestContext.http.path} Method: ${event.requestContext.http.method}`)
    };

    return res;
}
