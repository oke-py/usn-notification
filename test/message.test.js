/* eslint-env mocha */
'use strict';

const assert = require('assert');
const message = require('../src/message');

describe('message', () => {
  describe('#create', () => {
    it('should create slack attachment', () => {
      const stream = {
        "ApproximateCreationDateTime": 1560307609,
        "Keys": {
          "usn_id": {
            "S": "USN-4016-1"
          },
          "published": {
            "S": "2019-06-11T17:34:10Z"
          }
        },
        "NewImage": {
          "severity": {
            "S": "Medium"
          },
          "affects_1604": {
            "BOOL": true
          },
          "affects_1804": {
            "BOOL": true
          },
          "usn_id": {
            "S": "USN-4016-1"
          },
          "name": {
            "S": "vim"
          },
          "published": {
            "S": "2019-06-11T17:34:10Z"
          },
          "updated": {
            "S": "2019-06-11T17:34:10Z"
          },
          "CVEs": {
            "L": [
              {
                "S": "CVE-2017-5953"
              },
              {
                "S": "CVE-2019-12735"
              }
            ]
          }
        },
        "SequenceNumber": "22285000000000022260606301",
        "SizeBytes": 200,
        "StreamViewType": "NEW_AND_OLD_IMAGES"
      }

      const expected = {
        "attachments": [
          {
            "fallback": "USN-4016-1: vim vulnerability",
            "color": "danger",
            "title": "USN-4016-1",
            "title_link": "https://usn.ubuntu.com/4016-1/",
            "fields": [
              {
                "title": "Package name",
                "value": "vim",
                "short": true
              },
              {
                "title": "Priority",
                "value": "Medium",
                "short": true
              },
              {
                "title": "Ubuntu 16.04 LTS",
                "value": "Affected",
                "short": true
              },
              {
                "title": "Ubuntu 18.04 LTS",
                "value": "Affected",
                "short": true
              }
            ]
          }
        ]
      };

      assert.deepEqual(message.create(stream.NewImage), expected);
    });
  });
});
