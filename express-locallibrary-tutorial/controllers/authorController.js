var Author = require('../models/author');

//Display list of all authors
exports.author_list = (req, res) => {
  res.send('NOT IMPLEMENTED: Author list');
};

//Display detail page for a specific Author
exports.author_detail = (req, res) => {
  res.send('NOT IMPLEMENTED: Author detail:' + req.params.id);
};

//Display Author create form on GET
exports.author_create_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Author create GET');
};

// --- create on POST
exports.author_create_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Author create POST');
};

// --- delete from on GET
exports.author_delete_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Author delete GET');
};

//Handle Author delete on POST
exports.author_delete_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Author update from on GET
exports.author_update_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Author update GET');
};

//Handle Author update on POST
exports.author_update_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Author update POST');
};
