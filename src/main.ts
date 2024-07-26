// import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowser } from '@angular/platform-browser';


// import { AppComponent } from './app/app.component';
// // import { HeaderComponent } from './app/header.component';
import { AppModule } from './app/app.module';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
// bootstrapApplication(HeaderComponent)

platformBrowser().bootstrapModule(AppModule)
