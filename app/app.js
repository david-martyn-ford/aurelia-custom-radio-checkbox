import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','radio'],  name: 'radio',    moduleId: 'routes/radio/index',     nav: true, title: 'Radio'     }
    ]);

    this.router = router;
  }
}
