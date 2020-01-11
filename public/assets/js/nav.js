console.log('nav');
$(document).ready(function() {
  const hamburgerDisplayLink = () => {
    document.getElementById('logo').hidden = !document.getElementById('logo')
      .hidden;
    document.getElementById('mobile-links').hidden = !document.getElementById(
      'mobile-links'
    ).hidden;
  };

  const signInIndex = () => {
    document.getElementById('signin-showing').hidden = false;
  };

  $('#go-home-click').click(function() {
    location.assign(`/`);
  });

  $('#nav-profile').click(function() {
    const url = window.location.search;
    let userId;
    if (url.indexOf('?user_id=') !== -1) {
      userId = url.split('=')[1];
    }
    let nextPage = `/profile?user_id=${userId}`;
    location.assign(nextPage);
  });

  $('#login-trigger').click(function() {
    $('#login-content').slideToggle();
  });
});
