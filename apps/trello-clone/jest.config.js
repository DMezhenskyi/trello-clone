module.exports = {
  name: 'trello-clone',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/trello-clone',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
