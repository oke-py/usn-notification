# usn-notification

[![CircleCI](https://circleci.com/gh/oke-py/usn-notification.svg?style=svg)](https://circleci.com/gh/oke-py/usn-notification)
[![Coverage Status](https://coveralls.io/repos/github/oke-py/usn-notification/badge.svg?branch=master)](https://coveralls.io/github/oke-py/usn-notification?branch=master)
[![Known Vulnerabilities](https://snyk.io//test/github/oke-py/usn-notification/badge.svg?targetFile=package.json)](https://snyk.io//test/github/oke-py/usn-notification?targetFile=package.json)

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
