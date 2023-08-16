$(document).ready(function () {
  $("header button").click(function () {
    $("#container").slideDown();
  });

  $(".btnCancel").click(function () {
    $("#container").slideUp();
  });

  $(".form").on("submit", function (e) {
    e.preventDefault();
    const novoElemento = $(".inputTarefa").val();

    if (novoElemento.trim() !== "") {
      const novoItem = `<li>${novoElemento}</li>`;
      $("ul").append(novoItem);
      $(".inputTarefa").val("");
    }

    $("li").click(function () {
        $(this).css({
          "text-decoration":"line-through"
        });
      });

  });

 
});
