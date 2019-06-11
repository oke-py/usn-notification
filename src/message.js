'use strict';

module.exports.create = (notice) => {
  return {
    'attachments': [
      {
        'fallback': 'some text',
        'color': 'danger',
        'title': notice.usn_id.S,
        'title_link': '',
        'fields': [
          {
            'title': 'Package name',
            'value': notice.name.S,
            'short': true
          },
          {
            'title': 'Priority',
            'value': notice.severity.S,
            'short': true
          },
          {
            'title': 'Ubuntu 16.04 LTS',
            'value': 'Affected',
            'short': true
          },
          {
            'title': 'Ubuntu 18.04 LTS',
            'value': 'Not Affected',
            'short': true
          }
        ]
      }
    ]
  };
};
