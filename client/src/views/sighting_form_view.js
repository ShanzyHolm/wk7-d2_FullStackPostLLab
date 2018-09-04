const PubSub = require('../helpers/pub_sub.js')

const SightingFormView = function (form) {
  this.form = form;
};

SightingFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

SightingFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newSighting = this.createSighting(event.target);
  PubSub.publish('SightingView:sighting-submitted', newSighting);
  event.target.reset();
}

SightingFormView.prototype.createSighting = function (form) {
  const newSighting = {
    species: form.species.value,
    location: form.location.value,
    date: form.date.value
  };
  return newSighting;
};

module.exports = SightingFormView;
