# usn-notification

[![CircleCI](https://circleci.com/gh/oke-py/usn-notification.svg?style=svg)](https://circleci.com/gh/oke-py/usn-notification)

Ubuntu Security Notices DynamoDB stream Lambda function

## deploy

This Lambda function should be deployed only via CircleCI.

###  deploy to dev environment

```bash
sls deploy --stage dev
```

### deploy to prod environment

```bash
sls deploy --stage prod
```
