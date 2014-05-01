(function() {
  $(function() {
    $(".js-popup").click(function() {
      var $panel, name;
      $(".panel").addClass("hidden");
      name = $(this).parents(".icon").data("name");
      $panel = $(".js-" + name);
      return $panel.removeClass("hidden");
    });
    return $(".js-close").click(function() {
      return $(this).parents(".panel").addClass("hidden");
    });
  });

}).call(this);
