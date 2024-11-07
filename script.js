var currentButton = "";

function ShowPersonal() {
    document.getElementById("content").innerHTML = '<div class="row align-items-center"><div class="col-md-12"><br></div><div class="col-md-12"><h1 class="text-center font-weight-bold">Profile</h1></div><div class="col-md-12"><br></div><div class="col-md-4 pl-5"><br>Date of Birth</div><div class="col-md-8"><br>13th May 2000</div><div class="col-md-12"><br></div><div class="col-md-4 pl-5"><br>Place of Birth</div><div class="col-md-8"><br>Maumere, Nusa Tenggara Timur</div><div class="col-md-12"><br></div><div class="col-md-4 pl-5"><br>Gender</div><div class="col-md-8"><br>Male</div><div class="col-md-12"><br></div><div class="col-md-4 pl-5"><br>Nationality</div><div class="col-md-8"><br>Indonesia</div><div class="col-md-12"><br></div></div>';
    SetCurrentButtonId("personalButton");
}

function ShowEducations() {
    document.getElementById("content").innerHTML = '<div class="row align-items-center"><div class="col-md-12"><br></div><div class="col-md-12"><h1 class="text-center font-weight-bold">Educations</h1></div><div class="col-md-12"><br></div><div class="col-md-2 text-center"><img src="icons\\its.png" class="img-fluid custom-icon-size-2"></div><div class="col-md-10"><h2 class="font-weight-bold">Master of Computers</h2><h4>Institut Teknologi Sepuluh Nopember</h4><h6>Aug 2022 - Sep 2024</h6><p>Thesis: <i>Neural Style Transfer of Batik Motifs to Fractal Shapes Using Convolution Layers of VGG Architecture</i></p></div><div class="col-md-12"><br></div><div class="col-md-2 text-center"><img src="icons\\its.png" class="img-fluid custom-icon-size-2"></div><div class="col-md-10"><h2 class="font-weight-bold">Bachelor of Computers</h2><h4>Institut Teknologi Sepuluh Nopember</h4><h6>Aug 2018 - Mar 2022</h6><p>Final Project: <i>Development of Educational Puzzle Game Application to Help High School Students Learn Mathematics</i></p></div><div class="col-md-12"><br></div></div>';
    SetCurrentButtonId("eduButton");
}

function ShowPublications() {
    document.getElementById("content").innerHTML = '<div class="row align-items-center"><div class="col-md-12"><br></div><div class="col-md-12"><h1 class="text-center font-weight-bold">Publications</h1></div><div class="col-md-12"><br></div><div class="col-md-2 text-center"><img src="icons\\siml.png" class="img-fluid"></div><div class="col-md-10"><a class="text-reset" href="https://ieeexplore.ieee.org/document/10578183"><h2 class="font-weight-bold">A Comparison of VGG Architecture Convolutional Layers in Migrating Batik Style into Fractal Shape</h2></a><h4>2024 International Conference on Smart Computing, IoT and Machine Learning (SIML)</h4><h6>4 Oct 2023</h6><p>Keywords: Neural Style Transfer, Batik, Fractal, VGG16, VGG19</p></div><div class="col-md-12"><br></div><div class="col-md-2 text-center"><img src="icons\\icts.png" class="img-fluid"></div><div class="col-md-10"><a class="text-reset" href="https://ieeexplore.ieee.org/document/10330857"><h2 class="font-weight-bold">Batik Style Transfer into Fractal Shape</h2></a><h4>2023 14th International Conference on Information & Communication Technology and System (ICTS)</h4><h6>4 Oct 2023</h6><p>Keywords: Neural Style Transfer, Image Filtering, Batik, Fractal, VGG19</p></div><div class="col-md-12"><br></div><div class="col-md-2 text-center"><img src="icons\\isemantic.png" class="img-fluid"></div><div class="col-md-10"><a class="text-reset" href="https://ieeexplore.ieee.org/document/10295276"><h2 class="font-weight-bold">The Effects of Mathematics Game-based Learning with Random Maze Generation</h2></a><h4>2023 International Seminar on Application for Technology of Information and Communication (iSemantic)</h4><h6>16 Sep 2023</h6><p>Keywords: Game-based Learning, Mathematics, Education, Game Design, Procedural Content</p></div><div class="col-md-12"><br></div><div class="col-md-2 text-center"><img src="icons\\iccosite.png" class="img-fluid"></div><div class="col-md-10"><a class="text-reset" href="https://ieeexplore.ieee.org/document/10127738"><h2 class="font-weight-bold">Visualizing Texture of Fractal Arts in Unity3D Framework</h2></a><h4>2023 International Conference on Computer Science, Information Technology and Engineering (ICCoSITE)</h4><h6>16 Feb 2023</h6><p>Keywords: Fractal, Art, Image, Unity3D, Shader</p></div><div class="col-md-12"><br></div></div>';
    SetCurrentButtonId("publicationButton");
}

function SetCurrentButtonId(nextButton) {
    if (currentButton != "")
        document.getElementById(currentButton).classList.remove('disabled');
    document.getElementById(nextButton).classList.add('disabled');
    currentButton = nextButton;
}

ShowPersonal();