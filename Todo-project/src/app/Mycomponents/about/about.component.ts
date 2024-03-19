import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <section class="py-3 py-md-5 py-xl-8">
  <div class="container">
    <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div class="col-12 col-lg-6 col-xl-5">
        <img class="img-fluid rounded" loading="lazy" src="./assets/about-img.jpg" alt="">
      </div>
      <div class="col-12 col-lg-6 col-xl-7">
        <div class="row justify-content-xl-center">
          <div class="col-12 col-xl-11">
            <h2 class="h1 mb-3">ABOUT TODO APP</h2>
            <p class="lead fs-3 text-secondary mb-3">Immerse yourself in heightened productivity through our meticulously crafted To-Do List Web App. Developed with HTML, CSS, and JavaScript, this project offers an intuitive solution for efficient task management. The user-friendly interface allows seamless addition, completion, and deletion of tasks, spotlighting the simplicity and potency of web development. It acts as a welcoming gateway for both beginners and enthusiasts, encouraging exploration of essential technologies and an uplift in productivity. Dive into the coding universe, where design and functionality harmonize, empowering you to effortlessly navigate your daily tasks in this captivating web development venture.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  `,
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
