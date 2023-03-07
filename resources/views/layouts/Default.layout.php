<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>{pageTitle}</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css">
    <!-- <link rel="stylesheet" href="../assets/css/owl.theme.default.min.css"> -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link rel="stylesheet" href="assets/css/style.min.css">
  </head>
  <body>
    <div class="container-fluid">

      <div class="row">
        <div class="col">
            <?php
            require_once __DIR__ . '/../partials/header.partial.php';
            ?>
        </div>
      </div>

      <div class="row">
        <div class="col">
        	<main>
            	{pageContent}
        	</main>
        </div>
      </div>

			<?php
			require_once __DIR__ . '/../partials/footer.partial.php';
			?>

    </div>
  </body>
  <script src="assets/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/script.min.js"></script>
  <!-- <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
  <script src="/path/to/masonry.pkgd.min.js"></script> -->
  <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"></script>
</html>
