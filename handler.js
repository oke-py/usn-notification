'use strict';

module.exports.run = async (event) => {
  event.Records.forEach((record) => {
    console.log('イベント種別', record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
  });
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
