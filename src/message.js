'use strict';

module.exports.create = (notice) => {
  const link = 'https://usn.ubuntu.com/' + notice.usn_id.S.slice(4) + '/';
  const affects1604 = notice.affects_1604.BOOL ? 'Affected' : 'Not Affected';
  const affects1804 = notice.affects_1804.BOOL ? 'Affected' : 'Not Affected';

  return {
    'attachments': [
      {
        'fallback': `${notice.usn_id.S}: ${notice.name.S} vulnerability`,
        'color': 'danger',
        'title': notice.usn_id.S,
        'title_link': link,
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
            'value': affects1604,
            'short': true
          },
          {
            'title': 'Ubuntu 18.04 LTS',
            'value': affects1804,
            'short': true
          }
        ]
      }
    ]
  };
};
