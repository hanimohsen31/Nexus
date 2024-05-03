const fs = require("fs");
const { promisify } = require("util");
const exec = promisify(require("child_process").exec);

// ------------------------------------  DIVIDER  index.html --------------------------------------
const AdjustIndex = () => {
  const htmlIndexPath = `${__dirname}/src/index.html`;
  let bootstrapCss = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" integrity="sha512-jnSuA4Ss2PkkikSOLtYs8BlYIeeIK1h99ty4YfvRPAlzr377vr3CXDb7sb7eEEBYjDtcYj+AjBH3FLv5uSJuXg==" crossorigin="anonymous" referrerpolicy="no-referrer" />';
  let bootstrapJs = '<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.bundle.min.js" integrity="sha512-7Pi/otdlbbCR+LnW+F7PwFcSDJOuUJB3OxtEHbg4vSMvzvJjde4Po1v4BR9Gdc9aXNUNFVUY+SK51wWT8WF0Gg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>';
  let normalizeCss = "<style>* { box-sizing: border-box; margin: 0; padding: 0;} html {height: 100%;} body {height: 100%;}</style>";
  let cssMark = '<link rel="icon" type="image/x-icon" href="favicon.ico">';
  let cssMarkFormatted = '<link rel="icon" type="image/x-icon" href="favicon.ico" />';
  let jsMark = "<app-root></app-root>";
  let bootstrapMark = `cdnjs.cloudflare.com/ajax/libs/bootstrap`;
  // currunt content
  let currentIndexContent = fs.readFileSync(htmlIndexPath, "utf-8");
  // new content
  let newIndexContent = currentIndexContent.replace(cssMark, `${cssMark} \n ${bootstrapCss} \n ${normalizeCss}`).replace(cssMarkFormatted, `${cssMarkFormatted} \n ${bootstrapCss} \n ${normalizeCss}`).replace(jsMark, `${jsMark} \n ${bootstrapJs}`);
  // apply change
  if (!currentIndexContent.includes(bootstrapMark)) {
    fs.writeFileSync(htmlIndexPath, newIndexContent);
  }
};
AdjustIndex();
// ------------------------------------  DIVIDER  ------------------------------------------
let core = [
  // routes
  {
    path: `${__dirname}/src/app/core/core.routes.ts`,
    content: `import { Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { CoreComponent } from './core.component';

export const CORE_ROUTES: Routes = [
  { path: '', component: CoreComponent },
  { path: 'comp1', component: Comp1Component },
  { path: 'comp2', component: Comp2Component },
];
`,
  },
  // component html
  {
    path: `${__dirname}/src/app/core/core.component.html`,
    content: `<h2>Core Component</h2>`,
  },
  // component ts
  {
    path: `${__dirname}/src/app/core/core.component.ts`,
    content: `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-core',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './core.component.html',
})
export class CoreComponent {}`,
  },
  // child 1
  {
    path: `${__dirname}/src/app/core/comp1/comp1.component.html`,
    content: `<p>comp1 works!</p>`,
  },
  {
    path: `${__dirname}/src/app/core/comp1/comp1.component.ts`,
    content: `import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
})
export class Comp1Component {}
`,
  },
  // child 2
  {
    path: `${__dirname}/src/app/core/comp2/comp2.component.html`,
    content: `<p>comp2 works!</p>`,
  },
  {
    path: `${__dirname}/src/app/core/comp2/comp2.component.ts`,
    content: `import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [],
  templateUrl: './comp2.component.html',
})
export class Comp2Component {}
`,
  },
];

let shared = [
  // export
  {
    path: `${__dirname}/src/app/shared/shared.ts`,
    content: `export * from './footer/footer.component';
export * from './navbar/navbar.component';
export * from './sidebar/sidebar.component';
export * from './not-found/not-found.component';
`,
  },
];

let navbar = [
  // component html
  {
    path: `${__dirname}/src/app/shared/navbar/navbar.component.html`,
    content: `<nav class="navbar navbar-expand-sm bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-0">
        @for(link of links; track link.path){
        <!-- check if link has children -->
        @if(link.children.length){
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle">
            {{ link?.header }}
          </a>
          <ul class="dropdown-menu dropdown-children">
            <li>
              <a class="dropdown-item" [routerLink]="'/' + link?.path">
                {{ link?.header }}
              </a>
            </li>
            @for(subLink of link.children; track subLink){
            <li>
              <a class="dropdown-item" [routerLink]="link?.path + '/' + subLink?.path">
                {{ subLink?.header }}
              </a>
            </li>
            }
          </ul>
        </li>
        } @else {
        <li class="nav-item">
          <a class="nav-link" [routerLink]="'/' + link?.path">
            {{ link?.header }}
          </a>
        </li>
        } }
      </ul>
    </div>
  </div>
</nav>
`,
  },
  {
    path: `${__dirname}/src/app/shared/navbar/navbar.component.scss`,
    content: `.nav-item {
  cursor: pointer;
  &:hover {
    .dropdown-children {
      display: flex;
      border: none;
      flex-direction: column;
      box-shadow: 0px 0px 35px -15px rgba(0,0,0,0.3);
      border-radius: 0;
      opacity: 0.9;
    }
  }
  .dropdown-children {
    display: none;
  }
}
`,
  },
  {
    path: `${__dirname}/src/app/shared/navbar/navbar.component.ts`,
    content: `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { links } from '../../../environments/links';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  links: any[]= links;
}
`,
  },
];

let footer = [
  {
    path: `${__dirname}/src/app/shared/footer/footer.component.html`,
    content: `<h2>Footer Component</h2>`,
  },
  {
    path: `${__dirname}/src/app/shared/footer/footer.component.scss`,
    content: ``,
  },
  {
    path: `${__dirname}/src/app/shared/footer/footer.component.ts`,
    content: `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
`,
  },
];

let notFound = [
  {
    path: `${__dirname}/src/app/shared/not-found/not-found.component.html`,
    content: `<div class="container d-flex justify-content-center align-items-center">
  <img class="w-100" src="https://images2.imgbox.com/7f/f6/z7UzooxG_o.png" alt="" />
</div>
`,
  },
  {
    path: `${__dirname}/src/app/shared/not-found/not-found.component.scss`,
    content: ``,
  },
  {
    path: `${__dirname}/src/app/shared/not-found/not-found.component.ts`,
    content: `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {}
`,
  },
];

let sidebar = [
  {
    path: `${__dirname}/src/app/shared/sidebar/sidebar.component.html`,
    content: `<h2>Sidebar Component</h2>`,
  },
  {
    path: `${__dirname}/src/app/shared/sidebar/sidebar.component.scss`,
    content: ``,
  },
  {
    path: `${__dirname}/src/app/shared/sidebar/sidebar.component.ts`,
    content: `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {}
`,
  },
];

let app = [
  // routes
  {
    path: `${__dirname}/src/app/app.routes.ts`,
    content: `import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'core',
    loadChildren: () => import('./core/core.routes').then((m) => m.CORE_ROUTES),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'core',
  },
  {
    path: '**',
    loadComponent: () => import('./shared/not-found/not-found.component').then((c) => c.NotFoundComponent),
  },
];
`,
  },
  {
    path: `${__dirname}/src/app/app.component.html`,
    content: `<app-navbar></app-navbar>
<div class="container my-3">
  <router-outlet></router-outlet>
</div>
`,
  },
  {
    path: `${__dirname}/src/app/app.component.ts`,
    content: `import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FooterComponent,
  NavbarComponent,
  SidebarComponent,
  NotFoundComponent,
} from './shared/shared';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NotFoundComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
`,
  },
  {
    path: `${__dirname}/src/app/app.config.ts`,
    content: `import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes)
  ]
};
`
  },
];

let environment = [
  {
    path: `${__dirname}/src/environments/environment.ts`,
    content: `export const environment = {
production: false
}`,
  },
  {
    path: `${__dirname}/src/environments/links.ts`,
    content: `export const links = [
{
  path: 'core',
  header: 'Core',
  children: [
    { path: 'comp1', header: 'Comp1' },
    { path: 'comp2', header: 'Comp2' },
  ],
},
{ path: 'not-found', header: '404', children: [] },
];
`,
  },
];

let elements = [...core, ...shared, ...navbar, ...footer, ...notFound, ...sidebar, ...app, ...environment];

async function writeFile(filePath, fileContent) {
  let directoryPath = filePath.split(`/`);
  let filename = directoryPath.pop();
  directoryPath = directoryPath.join("/");

  await fs.mkdir(directoryPath, { recursive: true }, async (err) => {
    if (err) console.error(err);
    else {
      await fs.writeFile(filePath, fileContent, (err) => {
        if (err) console.error(err);
        else console.log("File created successfully!");
      });
    }
  });
}

const RunBashCommand = async (command) => {
  try {
    const { stdout, stderr } = await exec(command);
    if (stderr) console.error(`Error: ${stderr}`);
  } catch (error) {
    console.error(`Executing Error: ${error.message}`);
  }
};

const UpdateJson = () => {
  let filepath = `${__dirname}/package.json`;
  const jsonFile = fs.readFileSync(filepath, "utf-8");
  if (jsonFile.includes(`"start": "ng serve"`)) {
    let updatedJson = jsonFile.replace(`"start": "ng serve"`, `"start": "ng serve --open"`);
    fs.writeFileSync(filepath, updatedJson);
    console.log("json updated");
  } else {
    console.log("json no change");
  }
};

const removeStylesFromModuleComponents = (moduleName, path = "") => {
  moduleName = moduleName.toLowerCase();
  let componentPath = `${__dirname}/src/app/`;
  let defaultPath = `${moduleName}/${moduleName}.component.ts`;
  // path
  if (path) componentPath = componentPath + path;
  else componentPath = componentPath + defaultPath;
  let currentContent = fs.readFileSync(componentPath, "utf-8");
  // styles list
  let styles = [`styleUrls: ['./${moduleName}.component.scss']`, `styleUrl: './${moduleName}.component.scss'`, ` ,`];
  // create new content
  styles.map((elm) => {
    currentContent = currentContent.replace(elm, "");
  });
  // apply new content
  fs.writeFileSync(componentPath, currentContent);
};

UpdateJson();
removeStylesFromModuleComponents("app", "app.component.ts");
elements.map((elm) => writeFile(elm.path, elm.content));
RunBashCommand(`del src\\app\\app.component.spec.ts src\\app\\app.component.scss`);
console.log("Running Script Done")
