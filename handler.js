'use strict';

module.exports.run = async (event) => {
  const { IncomingWebhook } = require('@slack/webhook');
  const message = require('./src/message');

  event.Records.forEach((record) => {
    console.log('event type:', record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);

    if (record.eventName === 'INSERT') {
      const newItem = record.dynamodb.NewImage;

      if (['Critical', 'High', 'Medium'].includes(newItem.severity.S)) {
        const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);
        const body = message.create(newItem);
        console.log('to be sent: %j', body);

        webhook.send(body).then((res) => {
          console.info(res);
        }).catch((error) => {
          throw new Error(error);
        });
      }
    }
  });

  return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
