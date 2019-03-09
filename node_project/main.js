var HTMLParser = require('node-html-parser');
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var url = require('url');
var path = require('path');

var template = {
    HTML: function (file) {
        return `
      <!doctype html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Min Blog</title>

  <!-- Bootstrap core CSS -->
  <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom fonts for this template -->
  <link href="/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>

  <!-- Custom styles for this template -->
  <link href="/css/clean-blog.min.css" rel="stylesheet">

</head>

<body>

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="/">Node.js Project</a>
    </div>
  </nav>

  <!-- Page Header -->
  <header class="masthead" style="background-image: url('img/home-bg.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>Min Blog</h1>
            <span class="subheading">상민의 블로그</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="post-preview">
        
          ${file}
          
        <!-- Pager -->
          <a href ="/create" class="btn btn-success float-right">Create</a>
      </div>
    </div>
  </div>

  <hr>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <ul class="list-inline text-center">
            <li class="list-inline-item">
              <a href="https://github.com/LeeSM0518">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
          <p class="copyright text-muted">Copyright &copy; Your Website 2019</p>
        </div>
      </div>
    </div>
  </footer>

  <!-- Bootstrap core JavaScript -->
  <script src="/vendor/jquery/jquery.min.js"></script>
  <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Custom scripts for this template -->
  <script src="js/clean-blog.min.js"></script>

</body>

</html>

      `;
    },
    create: function () {
        return `
        <!doctype html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Writing</title>

  <!-- Bootstrap core CSS -->
  <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom fonts for this template -->
  <link href="/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>

  <!-- Custom styles for this template -->
  <link href="/css/clean-blog.min.css" rel="stylesheet">

</head>

<body>

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="/">Node.js Project</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </nav>

  <!-- Page Header -->
  <header class="masthead" style="background-image: url('/img/contact-bg.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="page-heading">
            <h1>글 작성</h1>
            <span class="subheading">오늘 하루는 어땠나요?</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <!-- Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. -->
        <!-- WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! -->
        <!-- To use the contact form, your site must be on a live web host with PHP! The form will not work locally! -->
        <form action="/create_process" method="post">
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Title</label>
              <input name="title" type="text" class="form-control" placeholder="Title" id="Title" required data-validation-required-message="Please enter title.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>Content</label>
              <input name="content" type="tel" class="form-control" placeholder="Content" id="Content" required data-validation-required-message="Please enter content.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>PostedByOn</label>
              <textarea name="postedByOn" rows="1" class="form-control" placeholder="Posted by on" id="postedByOn" required data-validation-required-message="Please enter posted by on"></textarea>
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <br>
          <div id="success"></div>
            <button type="submit" class="btn btn-primary" id="sendMessageButton">Write</button>
            </form>
      </div>
    </div>
  </div>

  <hr>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <ul class="list-inline text-center">
            <li class="list-inline-item">
              <a href="https://github.com/LeeSM0518">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
          <p class="copyright text-muted">Copyright &copy; Your Website 2019</p>
        </div>
      </div>
    </div>
  </footer>

  <!-- Bootstrap core JavaScript -->
  <script src="/vendor/jquery/jquery.min.js"></script>
  <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Contact Form JavaScript -->
  <script src="/js/jqBootstrapValidation.js"></script>
  <script src="/js/contact_me.js"></script>

  <!-- Custom scripts for this template -->
  <script src="/js/clean-blog.min.js"></script>

</body>

</html>

        `
    },
    createFile: function (title, content, postedByOn) {
        fs.readdir(`./data`, function (error, filelist) {
            fs.writeFile(`data/${filelist.length + 1}`, `
            <a>
    <h2 id="${title}" class="post-title">
      ${title}
    </h2>
    <h3 id="${content}" class="post-subtitle">
      ${content}
    </h3>
    <a href ="/delete/${filelist.length + 1}" class="btn btn-danger float-right">delete</a>
    <a href ="/adjust/${filelist.length + 1}" class="btn btn-secondary float-right">Adjust</a>
  <p id="${postedByOn}" class="post-meta">Posted by on ${postedByOn}</p>
<hr></a>`, 'utf8', function (err) {

            });
        });
    },
    adjust: function (title, content, postedByOn, id) {
        return `
        <!doctype html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Writing</title>

  <!-- Bootstrap core CSS -->
  <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom fonts for this template -->
  <link href="/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>

  <!-- Custom styles for this template -->
  <link href="/css/clean-blog.min.css" rel="stylesheet">

</head>

<body>

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="/">Node.js Project</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </nav>

  <!-- Page Header -->
  <header class="masthead" style="background-image: url('/img/contact-bg.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="page-heading">
            <h1>글 수정</h1>
            <span class="subheading">글을 수정하실껀가요?</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <!-- Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. -->
        <!-- WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! -->
        <!-- To use the contact form, your site must be on a live web host with PHP! The form will not work locally! -->
        <form action="/adjust_process" method="post">
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Title</label>
              <input type="hidden" name="id" value="${id}">
              <input value="${title}" name="title" type="text" class="form-control" placeholder="Title" id="Title" required data-validation-required-message="Please enter title.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>Content</label>
              <input value="${content}" name="content" type="tel" class="form-control" placeholder="Content" id="Content" required data-validation-required-message="Please enter content.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>PostedByOn</label>
              <textarea name="postedByOn" rows="1" class="form-control" placeholder="Posted by on" id="postedByOn" required data-validation-required-message="Please enter posted by on">${postedByOn}</textarea>
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <br>
          <div id="success"></div>
            <button type="submit" class="btn btn-primary" id="sendMessageButton">Write</button>
            </form>
      </div>
    </div>
  </div>

  <hr>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <ul class="list-inline text-center">
            <li class="list-inline-item">
              <a href="https://github.com/LeeSM0518">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
          <p class="copyright text-muted">Copyright &copy; Your Website 2019</p>
        </div>
      </div>
    </div>
  </footer>

  <!-- Bootstrap core JavaScript -->
  <script src="/vendor/jquery/jquery.min.js"></script>
  <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Contact Form JavaScript -->
  <script src="/js/jqBootstrapValidation.js"></script>
  <script src="/js/contact_me.js"></script>

  <!-- Custom scripts for this template -->
  <script src="/js/clean-blog.min.js"></script>

</body>

</html>

        `
    },
    delete: function (id) {
        return `
        
<!doctype html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Min Blog</title>

  <!-- Bootstrap core CSS -->
  <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom fonts for this template -->
  <link href="/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>

  <!-- Custom styles for this template -->
  <link href="/css/clean-blog.min.css" rel="stylesheet">

</head>

<body>

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="/">Node.js Project</a>
    </div>
  </nav>

  <!-- Page Header -->
  <header class="masthead" style="background-image: url('/img/about-bg.jpg">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>글 삭제</h1>
            <span class="subheading">정말로 삭제하시겠습니까?</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="post-preview">
          <a>
            
            <a href ="/" class="btn btn-danger float-right">No</a>
          </a>
          
        <!-- Pager -->
        <form action="/delete_process" method="post">
        <input type="hidden" name="id" value="${id}">
          <button type="submit" class="btn btn-success float-right">Yes</button>
          </form>
      </div>
    </div>
  </div>

  <hr>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <ul class="list-inline text-center">
            <li class="list-inline-item">
              <a href="https://github.com/LeeSM0518">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
          <p class="copyright text-muted">Copyright &copy; Your Website 2019</p>
        </div>
      </div>
    </div>
  </footer>

  <!-- Bootstrap core JavaScript -->
  <script src="/vendor/jquery/jquery.min.js"></script>
  <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Custom scripts for this template -->
  <script src="/js/clean-blog.min.js"></script>

</body>

</html>


        `
    }
};

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (request, response) {
    var fileInput = '';
    fs.readdir(`./data`, function (error, filelist) {
        var i = filelist.length;
        while (i >= 1) {
            fileInput += fs.readFileSync(`data/${i}`, 'utf8');
            i -= 1;
        }
        response.send(template.HTML(fileInput));
    });
});

app.get('/create', function (request, response) {
    response.send(template.create());
});

app.post('/create_process', function (request, response) {
    var post = request.body;
    var title = post.title;
    var content = post.content;
    var postedByOn = post.postedByOn;
    template.createFile(title, content, postedByOn);
    response.writeHead(302, {Location: `/`});
    response.end();
});

app.get('/adjust/:pageId', function(request, response) {
    var id = request.params.pageId;
    fs.readFile(`data/${id}`, 'utf8', function(err, description) {
        var root = HTMLParser.parse(description);
        var title = root.childNodes[0].childNodes[1].id;
        var content = root.childNodes[0].childNodes[3].id;
        var postedByOn = root.childNodes[0].childNodes[9].id;
        response.send(template.adjust(title, content, postedByOn, id));
    });
});

app.post('/adjust_process', function (request, response) {
    var post = request.body;
    var id = post.id;
    console.log(id);
    var title = post.title;
    var content = post.content;
    var postedByOn = post.postedByOn;
    fs.writeFile(`data/${id}`, `
            <a>
    <h2 id="${title}" class="post-title">
      ${title}
    </h2>
    <h3 id="${content}" class="post-subtitle">
      ${content}
    </h3>
    <a href ="/delete" class="btn btn-danger float-right">delete</a>
    <a href ="/adjust/${id}" class="btn btn-secondary float-right">Adjust</a>
  <p id="${postedByOn}" class="post-meta">Posted by on ${postedByOn}</p>
<hr></a>`, 'utf8', function (err) {

    });
    response.writeHead(302, {Location: `/`});
    response.end();
});

app.get('/delete/:pageId', function(request, response) {
    var id = request.params.pageId;
    response.send(template.delete(id));
});

app.post('/delete_process', function (request, response) {
    var post = request.body;
    var id = post.id;
    console.log(id);
    fs.unlink(`data/${id}`, function (error) {
        response.redirect('/');
    })
});

app.listen(3000, function () {
    console.log(`http://localhost:3000`);
});