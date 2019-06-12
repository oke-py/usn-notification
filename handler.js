'use strict';

module.exports.run = async (event) => {
  const { IncomingWebhook } = require('@slack/webhook');
  const message = require('./src/message');

  Promise.all(event.Records.map(async record => {
    console.log('event type:', record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);

    if (record.eventName === 'INSERT') {
      const newItem = record.dynamodb.NewImage;

      if (['Critical', 'High', 'Medium'].includes(newItem.severity.S)) {
        const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);
        const body = message.create(newItem);
        console.log('to be sent: %j', body);

        const res = await webhook.send(body);
        console.log(res);
      }
    }
  }));

  return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
