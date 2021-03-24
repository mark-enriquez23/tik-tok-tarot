<template>
  <div class="">
  <header class="masthead">
    <div class="container h-100">
        <div class="row h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-10 align-self-end">
                <img :src="srcLogoOnly" style="mix-blend-mode: luminosity; width: 350px" srcset="" >
                <h1 class="text-uppercase font-weight-bold text-white mt-2">Welcome to Test a Psychic</h1>
                <hr class="divider my-2 col-2" style="background: #ffff" />
            </div>
            <div class="col-lg-8 align-self-baseline">
                <h4 class="font-weight-light mb-5 text-white">Where you Own the Power to Click.</h4>
                <div class="row no-gutters text-center" >
                  <div class="col-lg-6 mx-auto">
                    <a class="btn btn-danger btn-xl w-lg-50 w-75 text-white">Become a Reader</a>
                  </div>
                </div>
            </div>
        </div>
    </div>
</header>
<section class="container my-5">
  <div class="">
    <div class="section-title">
      <h2>Featured Vlogs</h2>
      <p>Magnam dolores commodi suscipit uisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>
  </div>
  <div class="mb-2">
    <div class="row">
      <div class="col-md-4">
        <div class="card ">
          <a href="#">
          <img class="card-img-top" src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet.</h5>
            <p class="card-text text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad alias, aliquid amet aspernatur atque culpa cum debitis dicta doloremque, dolorum ea eos et excepturi explicabo facilis harum illo impedit incidunt laborum laudantium...
            </p>
        </div>
          </a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card ">
          <a href="#">
          <img class="card-img-top" src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet.</h5>
            <p class="card-text text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad alias, aliquid amet aspernatur atque culpa cum debitis dicta doloremque, dolorum ea eos et excepturi explicabo facilis harum illo impedit incidunt laborum laudantium...
            </p>
        </div>
          </a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card ">
          <a href="#">
          <img class="card-img-top" src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet.</h5>
            <p class="card-text text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad alias, aliquid amet aspernatur atque culpa cum debitis dicta doloremque, dolorum ea eos et excepturi explicabo facilis harum illo impedit incidunt laborum laudantium...
            </p>
        </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-5 mx-auto col-md-3 mx-auto ">
    <div class="btn btn-danger w-100">
      <div class=" row no-gutters mx-auto justify-content-center">
        <div class="my-auto mr-2">Show More</div> <fa :icon="['fas', 'chevron-right']" class="my-auto" />
      </div>
    </div>
  </div>
</section>
 <!-- ======= Testimonials Section ======= -->
<section id="testimonials" class="testimonials section-bg">
  <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="section-title">
              <h2>Testimonials</h2>
              <p>Magnam dolores commodi suscipit uisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
          </div>
          <div class="col-lg-8">
           <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner testimonials-carousel">
                <div class="testimonial-item carousel-item active">
                    <p>
                      <fa class="quote-icon-left" :icon="['fas', 'quote-left']" />
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <fa class="quote-icon-right" :icon="['fas', 'quote-right']" />
                    </p>
                    <img :src="testimonialImage1" class="testimonial-img" alt="">
                    <h3>John Doe</h3>
                    <h4>Client</h4>
                    <p class="client-review-stars">
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star-half']" />
                    </p>
                  </div>

                  <div class="testimonial-item carousel-item">
                    <p>
                      <fa class="quote-icon-left" :icon="['fas', 'quote-left']" />
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <fa class="quote-icon-right" :icon="['fas', 'quote-right']" />
                    </p>
                    <img :src="testimonialImage2" class="testimonial-img" alt="">
                    <h3>John Doe</h3>
                    <h4>Client</h4>
                    <p class="client-review-stars">
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star-half']" />
                    </p>
                  </div>

                  <div class="testimonial-item carousel-item">
                    <p>
                      <fa class="quote-icon-left" :icon="['fas', 'quote-left']" />
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <fa class="quote-icon-right" :icon="['fas', 'quote-right']" />
                    </p>
                    <img :src="testimonialImage3" class="testimonial-img" alt="">
                    <h3>John Doe</h3>
                    <h4>Client</h4>
                    <p class="client-review-stars">
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star-half']" />
                    </p>
                  </div>

                  <div class="testimonial-item carousel-item">
                    <p>
                      <fa class="quote-icon-left" :icon="['fas', 'quote-left']" />
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <fa class="quote-icon-right" :icon="['fas', 'quote-right']" />
                    </p>
                    <img :src="testimonialImage4" class="testimonial-img" alt="">
                    <h3>John Doe</h3>
                    <h4>Client</h4>
                    <p class="client-review-stars">
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star-half']" />
                    </p>
                  </div>

                  <div class="testimonial-item carousel-item">
                    <p>
                      <fa class="quote-icon-left" :icon="['fas', 'quote-left']" />
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <fa class="quote-icon-right" :icon="['fas', 'quote-right']" />
                    </p>
                    <img :src="testimonialImage5" class="testimonial-img" alt="">
                    <h3>John Doe</h3>
                    <h4>Client</h4>
                    <p class="client-review-stars">
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star-half']" />
                    </p>
                  </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
          </div>
          </div>
        </div>

      </div>
    </section><!-- End Testimonials Section -->

    <!-- ======= Live Session Section ======= -->
    <section id="team" class="team">
      <div class="container">

        <div class="row">
          <div class="col-lg-4">
            <div class="section-title" data-aos="fade-right">
              <h2>Active Live Sessions</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-6">
                <div class="member" data-aos="zoom-in" data-aos-delay="100">
                  <div class="pic"><img :src="testimonialImage5" class="img-fluid" alt=""></div>
                  <div class="member-info">
                    <h4>John Doe</h4>
                    <span>Reader 1</span>
                    <p class="text-success mb-0">online</p>
                    <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-lg-6 mt-4 mt-lg-0">
                <div class="member" data-aos="zoom-in" data-aos-delay="100">
                  <div class="pic"><img :src="testimonialImage1" class="img-fluid" alt=""></div>
                  <div class="member-info">
                    <h4>John Doe</h4>
                    <span>Reader 2</span>
                    <p class="text-success mb-0">online</p>
                    <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 mt-4">
                <div class="member" data-aos="zoom-in" data-aos-delay="100">
                  <div class="pic"><img :src="testimonialImage3" class="img-fluid" alt=""></div>
                  <div class="member-info">
                    <h4>John Doe</h4>
                    <span>Reader 3</span>
                    <p class="text-success mb-0">online</p>
                    <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 mt-4">
                <div class="member" data-aos="zoom-in" data-aos-delay="200">
                  <div class="pic"><img :src="testimonialImage2" class="img-fluid" alt=""></div>
                  <div class="member-info">
                    <h4>John Doe</h4>
                    <span>Reader 4</span>
                    <p class="text-success mb-0">online</p>
                    <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 mt-4">
                <div class="member" data-aos="zoom-in" data-aos-delay="300">
                  <div class="pic"><img :src="testimonialImage1" class="img-fluid" alt=""></div>
                  <div class="member-info">
                    <h4>John Doe</h4>
                    <span>Reader 4</span>
                    <p class="text-success mb-0">online</p>
                    <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 mt-4">
                <div class="member" data-aos="zoom-in">
                  <div class="pic"><img :src="testimonialImage4" class="img-fluid" alt=""></div>
                  <div class="member-info">
                    <h4>John Doe</h4>
                    <span>Reader 5</span>
                    <p class="text-success mb-0">online</p>
                    <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section><!-- End Live Session Section -->

    <!-- ======= Cta Section ======= -->
    <section id="cta" class="cta">
      <div class="container">

        <div class="text-center" data-aos="zoom-in">
          <h3>Join us Now!</h3>
          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div class="row col-md-6 mx-auto">
            <div class="col-md-6 ">
              <button class="w-100 btn btn-secondary">Login</button>
            </div>
            <div class="col-md-6  mt-md-0 mt-4">
              <button class="w-100 btn btn-danger">Register</button>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End Cta Section -->

    <!-- ======= Why Us Section ======= -->
    <section id="why-us" class="why-us">
      <div class="container">

        <div class="row">
          <div class="col-lg-4 d-flex align-items-stretch" data-aos="fade-right">
            <div class="content">
              <h3>How to use Test a Psychic?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
              </p>
              <div class="text-center">
                <a href="#" class="more-btn">Learn More <i class="bx bx-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-8 d-flex align-items-stretch">
            <div class="icon-boxes d-flex flex-column justify-content-center">
              <div class="row">
                <div class="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                  <div class="icon-box mt-4 mt-xl-0">
                      <fa :icon="['fas', 'receipt']" />
                    <h4>Corporis voluptates sit</h4>
                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                  </div>
                </div>
                <div class="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
                  <div class="icon-box mt-4 mt-xl-0">
                      <fa :icon="['fas', 'images']" />
                    <h4>Ullamco laboris ladore pan</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                  </div>
                </div>
                <div class="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
                  <div class="icon-box mt-4 mt-xl-0">
                    <fa :icon="['fas', 'video']" />
                    <h4>Labore consequatur</h4>
                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                  </div>
                </div>
              </div>
            </div><!-- End .content-->
          </div>
        </div>

      </div>
    </section><!-- End Why Us Section -->

    <section class="section-bg">
    <div class="container">
    <div class="section-title">
      <h2>Frequently Asked Questions</h2>
      <p>Magnam dolores commodi suscipit uisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>
    <div class="row">
        <div class="col-lg-4">
            <div class="nav nav-pills faq-nav" id="faq-tabs" role="tablist" aria-orientation="vertical">
                <a href="#tab1" class="nav-link active" data-toggle="pill" role="tab" aria-controls="tab1" aria-selected="true">
                    <fa :icon="['fas', 'book']" class="text-danger" /> Reader
                </a>
                <a href="#tab2" class="nav-link" data-toggle="pill" role="tab" aria-controls="tab2" aria-selected="false">
                    <fa :icon="['fas', 'user']" class="text-danger" /> Account
                </a>
                <a href="#tab3" class="nav-link" data-toggle="pill" role="tab" aria-controls="tab3" aria-selected="false">
                    <fa :icon="['fas', 'user-tie']" class="text-danger" /> Client
                </a>
                <a href="#tab4" class="nav-link" data-toggle="pill" role="tab" aria-controls="tab4" aria-selected="false">
                    <fa :icon="['fas', 'hands-helping']" class="text-danger" /> General help
                </a>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="tab-content" id="faq-tab-content">
                <div class="tab-pane show active" id="tab1" role="tabpanel" aria-labelledby="tab1">
                    <div class="accordion" id="accordion-tab-1">
                        <div class="card">
                            <div class="card-header" id="accordion-tab-1-heading-1">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-1" aria-expanded="false" aria-controls="accordion-tab-1-content-1">Just once I'd like to eat dinner with a celebrity?</button>
                                </h5>
                            </div>
                            <div class="collapse show" id="accordion-tab-1-content-1" aria-labelledby="accordion-tab-1-heading-1" data-parent="#accordion-tab-1">
                                <div class="card-body">
                                    <p>Yes, if you make it look like an electrical fire. When you do things right, people won't be sure you've done anything at all. I was having the most wonderful dream. Except you were there, and you were there, and you were there! No argument here. Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be.</p>
                                    <p><strong>Example: </strong>Shut up and get to the point!</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="accordion-tab-1-heading-2">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-2" aria-expanded="false" aria-controls="accordion-tab-1-content-2">Bender, I didn't know you liked cooking?</button>
                                </h5>
                            </div>
                            <div class="collapse" id="accordion-tab-1-content-2" aria-labelledby="accordion-tab-1-heading-2" data-parent="#accordion-tab-1">
                                <div class="card-body">
                                    <p>That's so cute. Can we have Bender Burgers again? Is the Space Pope reptilian!? I wish! It's a nickel. Bender! Ship! Stop bickering or I'm going to come back there and change your opinions manually!</p>
                                    <p><strong>Example: </strong>Okay, I like a challenge. Is that a cooking show? No argument here.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="accordion-tab-1-heading-3">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-3" aria-expanded="false" aria-controls="accordion-tab-1-content-3">My fellow Earthicans?</button>
                                </h5>
                            </div>
                            <div class="collapse" id="accordion-tab-1-content-3" aria-labelledby="accordion-tab-1-heading-3" data-parent="#accordion-tab-1">
                                <div class="card-body">
                                    <p>As I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards. Fry, you can't just sit here in the dark listening to classical music.</p>
                                    <p><strong>Example: </strong>Actually, that's still true. Well, let's just dump it in the sewer and say we delivered it.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="accordion-tab-1-heading-4">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-4" aria-expanded="false" aria-controls="accordion-tab-1-content-4">Who am I making this out to?</button>
                                </h5>
                            </div>
                            <div class="collapse" id="accordion-tab-1-content-4" aria-labelledby="accordion-tab-1-heading-4" data-parent="#accordion-tab-1">
                                <div class="card-body">
                                    <p>Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat. Also Zoidberg. Can we have Bender Burgers again? Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords.</p>
                                    <p><strong>Example: </strong>Cruel though they may be...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="tab2" role="tabpanel" aria-labelledby="tab2">
                    <div class="accordion" id="accordion-tab-2">
                        <div class="card">
                            <div class="card-header" id="accordion-tab-2-heading-1">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-1" aria-expanded="false" aria-controls="accordion-tab-2-content-1">Does anybody else feel jealous and aroused and worried?</button>
                                </h5>
                            </div>
                            <div class="collapse show" id="accordion-tab-2-content-1" aria-labelledby="accordion-tab-2-heading-1" data-parent="#accordion-tab-2">
                                <div class="card-body">
                                    <p>Kif, I have mated with a woman. Inform the men. This is the worst part. The calm before the battle. Bender, being God isn't easy. If you do too much, people get dependent on you, and if you do nothing, they lose hope. You have to use a light touch. Like a safecracker, or a pickpocket.</p>
                                    <p><strong>Example: </strong>There's no part of that sentence I didn't like! You, a bobsleder!? That I'd like to see!</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="accordion-tab-2-heading-2">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-2" aria-expanded="false" aria-controls="accordion-tab-2-content-2">This opera's as lousy as it is brilliant?</button>
                                </h5>
                            </div>
                            <div class="collapse" id="accordion-tab-2-content-2" aria-labelledby="accordion-tab-2-heading-2" data-parent="#accordion-tab-2">
                                <div class="card-body">
                                    <p>Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! It's okay, Bender. I like cooking too. Interesting. No, wait, the other thing: tedious.</p>
                                    <p><strong>Example: </strong>Of all the friends I've had… you're the first. But I know you in the future. I cleaned your poop. Then we'll go with that data file!</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="accordion-tab-2-heading-3">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-3" aria-expanded="false" aria-controls="accordion-tab-2-content-3">Who are you, my warranty?!</button>
                                </h5>
                            </div>
                            <div class="collapse" id="accordion-tab-2-content-3" aria-labelledby="accordion-tab-2-heading-3" data-parent="#accordion-tab-2">
                                <div class="card-body">
                                    <p>Oh, I think we should just stay friends. I'll tell them you went down prying the wedding ring off his cold, dead finger. Aww, it's true. I've been hiding it for so long. Say it in Russian! Then throw her in the laundry room, which will hereafter be referred to as "the brig".</p>
                                    <p><strong>Example: </strong> We're rescuing ya. Robot 1-X, save my friends! And Zoidberg! <em>Then we'll go with that data file!</em> Okay, I like a challenge.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="accordion-tab-2-heading-4">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-4" aria-expanded="false" aria-controls="accordion-tab-2-content-4">I haven't felt much of anything since my guinea pig died?</button>
                                </h5>
                            </div>
                            <div class="collapse" id="accordion-tab-2-content-4" aria-labelledby="accordion-tab-2-heading-4" data-parent="#accordion-tab-2">
                                <div class="card-body">
                                    <p>And I'm his friend Jesus. Oh right. I forgot about the battle. OK, if everyone's finished being stupid. We'll need to have a look inside you with this camera. I'm just glad my fat, ugly mama isn't alive to see this day.</p>
                                    <p><strong>Example: </strong> Isn't it true that you have been paid for your testimony? Quite possible.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="tab3" role="tabpanel" aria-labelledby="tab3">
                    <div class="accordion" id="accordion-tab-3">
                        <div class="card">
                            <div class="card-header" id="accordion-tab-3-heading-1">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-3-content-1" aria-expanded="false" aria-controls="accordion-tab-3-content-1">Michelle, I don't regret this, but I both rue and lament it?</button>
                                </h5>
                            </div>
                            <div class="collapse show" id="accordion-tab-3-content-1" aria-labelledby="accordion-tab-3-heading-1" data-parent="#accordion-tab-3">
                                <div class="card-body">
                                    <p>Look, last night was a mistake. We'll need to have a look inside you with this camera. Good news, everyone! There's a report on TV with some very bad news! You know, I was God once. You lived before you met me?!</p>
                                    <p><strong>Example: </strong>I'm Santa Claus! Pansy. That's a popular name today. Little "e", big "B"?</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="accordion-tab-3-heading-2">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-3-content-2" aria-expanded="false" aria-controls="accordion-tab-3-content-2">Why am I sticky and naked?</button>
                                </h5>
                            </div>
                            <div class="collapse" id="accordion-tab-3-content-2" aria-labelledby="accordion-tab-3-heading-2" data-parent="#accordion-tab-3">
                                <div class="card-body">
                                    <p>Did I miss something fun? Humans dating robots is sick. You people wonder why I'm still single? It's 'cause all the fine robot sisters are dating humans! Kids don't turn rotten just from watching TV.</p>
                                    <p><strong>Example: </strong>I usually try to keep my sadness pent up inside where it can fester quietly as a mental illness.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="accordion-tab-3-heading-3">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-3-content-3" aria-expanded="false" aria-controls="accordion-tab-3-content-3">Is that a cooking show?</button>
                                </h5>
                            </div>
                            <div class="collapse" id="accordion-tab-3-content-3" aria-labelledby="accordion-tab-3-heading-3" data-parent="#accordion-tab-3">
                                <div class="card-body">
                                    <p>OK, this has gotta stop. I'm going to remind Fry of his humanity the way only a woman can. You seem malnourished. Are you suffering from intestinal parasites? Check it out, y'all. Everyone who was invited is here. I am Singing Wind, Chief of the Martians.</p>
                                    <p><strong>Example: </strong>Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="accordion-tab-3-heading-4">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-3-content-4" aria-expanded="false" aria-controls="accordion-tab-3-content-4">You are the last hope of the universe?</button>
                                </h5>
                            </div>
                            <div class="collapse" id="accordion-tab-3-content-4" aria-labelledby="accordion-tab-3-heading-4" data-parent="#accordion-tab-3">
                                <div class="card-body">
                                    <p>I don't want to be rescued. I videotape every customer that comes in here, so that I may blackmail them later. Ah, computer dating. It's like pimping, but you rarely have to use the phrase "upside your head."</p>
                                    <p><strong>Example: </strong>Tell them I hate them.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="tab4" role="tabpanel" aria-labelledby="tab4">
                    <div class="accordion" id="accordion-tab-4">
                        <div class="card">
                            <div class="card-header" id="accordion-tab-4-heading-1">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-4-content-1" aria-expanded="false" aria-controls="accordion-tab-4-content-1">You, minion. Lift my arm?</button>
                                </h5>
                            </div>
                            <div class="collapse show" id="accordion-tab-4-content-1" aria-labelledby="accordion-tab-4-heading-1" data-parent="#accordion-tab-4">
                                <div class="card-body">
                                    <p>AFTER HIM! A true inspiration for the children. What are you hacking off? Is it my torso?! 'It is!' My precious torso! I saw you with those two "ladies of the evening" at Elzars. Explain that. She also liked to shut up! Why not indeed!</p>
                                    <p><strong>Example: </strong>I feel like I was mauled by Jesus. Hello, little man. I will destroy you!</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="accordion-tab-4-heading-2">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-4-content-2" aria-expanded="false" aria-controls="accordion-tab-4-content-2">No, I'm Santa Claus?</button>
                                </h5>
                            </div>
                            <div class="collapse" id="accordion-tab-4-content-2" aria-labelledby="accordion-tab-4-heading-2" data-parent="#accordion-tab-4">
                                <div class="card-body">
                                    <p>I meant 'physically'. Look, perhaps you could let me work for a little food? I could clean the floors or paint a fence, or service you sexually? When the lights go out, it's nobody's business what goes on between two consenting adults.</p>
                                    <p><strong>Example: </strong>Nay, I respect and admire Harold Zoid too much to beat him to death with his own Oscar.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="accordion-tab-4-heading-3">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-4-content-3" aria-expanded="false" aria-controls="accordion-tab-4-content-3">Belligerent and numerous?</button>
                                </h5>
                            </div>
                            <div class="collapse" id="accordion-tab-4-content-3" aria-labelledby="accordion-tab-4-heading-3" data-parent="#accordion-tab-4">
                                <div class="card-body">
                                    <p>Hey, what kinda party is this? There's no booze and only one hooker. I'm just glad my fat, ugly mama isn't alive to see this day. Wow! A superpowers drug you can just rub onto your skin? You'd think it would be something you'd have to freebase. Well, let's just dump it in the sewer and say we delivered it. You guys realize you live in a sewer, right? </p>
                                    <p><strong>Example: </strong>Oh Leela! You're the only person I could turn to; you're the only person who ever loved me.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="accordion-tab-4-heading-4">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-4-content-4" aria-expanded="false" aria-controls="accordion-tab-4-content-4">Take me to your leader?</button>
                                </h5>
                            </div>
                            <div class="collapse" id="accordion-tab-4-content-4" aria-labelledby="accordion-tab-4-heading-4" data-parent="#accordion-tab-4">
                                <div class="card-body">
                                    <p>PUNY HUMAN NUMBER ONE, PUNY HUMAN NUMBER TWO, and Morbo's good friend, Richard Nixon. Interesting. No, wait, the other thing: tedious. All I want is to be a monkey of moderate intelligence who wears a suit… that's why I'm transferring to business school! Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.</p>
                                    <p><strong>Example: </strong>If rubbin' frozen dirt in your crotch is wrong, hey I don't wanna be right.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </section>

<!--News Letter Section -->
<section class="subscribe-panel cta">
    <div class="container text-center text-white">
    <h1>Join Our Newsletter</h1>
    <p>Subscribe to our weekly Newsletter and stay tuned.</p>
    <form action="" method="post">
        <div class="col-5 mx-auto">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <fa :icon="['fas', 'envelope']" class="input-group-text" id="basic-addon1" style="font-size: 38px" />
            </div>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
          </div>
        </div>
          <button class="btn btn-danger btn-lg">Subscribe Now!</button>
    </form>
  </div>
  </section>
  <!-- ======= About Section ======= -->
  <section id="about" class="about">
      <div class="container">

        <div class="row content">
          <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <h2>Lorem ipsum dolor sit amet</h2>
            <h3>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay="200">
            <p>
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <ul>
              <li><fa class="text-danger" :icon="['fas', 'check-double']" id="basic-addon1" /> Consectetur adipiscing elit, sed do eiusmod tempor incididunt</li>
              <li><fa class="text-danger" :icon="['fas', 'check-double']" id="basic-addon1" /> Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li><fa class="text-danger" :icon="['fas', 'check-double']" id="basic-addon1" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            </ul>
            <p class="font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
          </div>
        </div>

      </div>
    </section><!-- End About Section -->
    <Footer />
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Footer from '../components/Footer.vue'

export default {
  components: { Footer },
  layout: 'default',

  metaInfo () {
    return { title: this.$t('home') }
  },

  data: () => ({
    title: window.config.appName,
    testimonialImage1: window.config.assetURL + 'images/testimonials/testimonials-1.jpg',
    testimonialImage2: window.config.assetURL + 'images/testimonials/testimonials-2.jpg',
    testimonialImage3: window.config.assetURL + 'images/testimonials/testimonials-3.jpg',
    testimonialImage4: window.config.assetURL + 'images/testimonials/testimonials-4.jpg',
    testimonialImage5: window.config.assetURL + 'images/testimonials/testimonials-5.jpg',
    srcLogoOnly: window.config.assetURL + 'images/sample-logo.png',
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  }),
  beforeCreate() {
    this.$store.dispatch('footer/fetchFooterData')
  }
}
</script>

<style lang="scss" scoped>
.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}
.reader {
  height: calc(28rem + 74px);
}

#client-testimonial-carousel {min-height: 200px;}

.title {
  font-size: 85px;
}

.cover-bg {
  padding-top: calc(28rem + 74px);
  padding-bottom: 6rem;
}

.masthead {
  padding-top: 10.5rem;
  padding-bottom: 10.5rem;
  text-align: center;
  background-image: radial-gradient(at top center, rgba(25,7,0,0) 28%, #000000 100%), url('/images/tarot2.jpg');
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
  position: relative;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border: none;
  .card-text {
    font-size: .8rem;
  }
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
  }
  a {
    color: initial;
    &:hover {
      text-decoration: initial;
    }
  }
  .text-muted i {
    margin: 0 10px;
  }
}

// FAQ
.faq-nav {
    flex-direction: column;
    margin: 0 0 32px;
    border-radius: 2px;
    border: 1px solid #ddd;
    box-shadow: 0 1px 5px rgba(85, 85, 85, 0.15);

    .nav-link {
        position: relative;
        display: block;
        margin: 0;
        padding: 13px 16px;
        background-color: #fff;
        border: 0;
        border-bottom: 1px solid #ddd;
        border-radius: 0;
        color: #616161;
        transition: background-color .2s ease;

        &:hover {
            background-color: #f6f6f6;
        }

        &.active {
            background-color: #f6f6f6;
            font-weight: 700;
            color: rgba(0,0,0,.87);
        }

        &:last-of-type {
            border-bottom-left-radius: 2px;
            border-bottom-right-radius: 2px;
            border-bottom: 0;
        }

        i.mdi {
            margin-right: 5px;
            font-size: 18px;
            position: relative;
        }
    }
}

// TAB CONTENT
.tab-content {
    box-shadow: 0 1px 5px rgba(85, 85, 85, 0.15);

    .card {
        border-radius: 0;
    }

    .card-header {
        padding: 15px 16px;
        border-radius: 0;
        background-color: #f6f6f6;

        h5 {
            margin: 0;

            button {
                display: block;
                width: 100%;
                padding: 0;
                border: 0;
                font-weight: 700;
                color: rgba(0,0,0,.87);
                text-align: left;
                white-space: normal;

                &:hover,
                &:focus,
                &:active,
                &:hover:active {
                    text-decoration: none;
                }
            }
        }
    }

    .card-body {
        p {
            color: #616161;

            &:last-of-type {
                margin: 0;
            }
        }
    }
}


// BORDER FIX
.accordion {
    > .card {
        &:not(:first-child) {
            border-top: 0;
        }
    }
}

.collapse.show {
    .card-body {
        border-bottom: 1px solid rgba(0,0,0,.125);
    }
}
</style>

<style lang="scss">
  .btn {
    cursor: pointer;
  }
</style>
