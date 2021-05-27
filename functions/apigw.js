module.exports.handler = async (event, context) => {
    console.log(JSON.stringify(event));

    const res = {
        statusCode: 200,
        body: JSON.stringify(`Hello from http api gw. Path: ${event.path} Method: ${event.httpMethod}`)
    };

    return res;
}
