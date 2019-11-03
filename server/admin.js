const path = require('path');
const express = require('express');

module.exports = app => {
  app.use(express.static(path.resolve(__dirname, '../admin/build')));

  app.get('/open/admin', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../admin/build', '_admin.html'));
  });
};
