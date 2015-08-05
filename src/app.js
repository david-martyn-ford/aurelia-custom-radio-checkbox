import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','radio'], name: 'radio', moduleId: './radio', nav: true, title: 'Checkbox'}
    ]);

    this.router = router;
  }
}
