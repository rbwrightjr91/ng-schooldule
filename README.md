# ng-schooldule

**Tools**

* [Angular 5](https://www.angular.io/)
* [Angular CLI](https://cli.angular.io/)
* [Angular Fire 2](https://github.com/angular/angularfire2/) / [Firebase](firebase.google.com)
* [Bootstrap](https://www.getbootstrap.com/) / [ng-bootstrap](https://ng-bootstrap.github.io/)

**Demo**

* [Schooldule Demo](https://github.com/rbwrightjr91/schooldule-demo)

## Setup

  1. Setup firestore:

  * Go to [firebase.google.com](firebase.google.com) and login with your Google account
  * Click 'Get Started'
  * Click 'Add Project' and enter a project name
  * Inside the 'Develop' menu under 'Authentication', select 'Sign-In Method' and enable 'Google' and 'Anonymous'
  * Inside the 'Develop' menu, select 'Database' and click 'Try Firestore Beta'
  * Under the 'Data' tab, click 'Add Collection' and title it 'Class'
  * In the 'Class' collection, click 'Add Document' and enter class details with the following fields:
              
| name                | field         |
|---------------------|---------------|
| class               | string        |
| title               | string        |
| days                | Array[string] |
| start*              | timestamp     |
| end*                | timestamp     |
| semester (optional) | string        |
| year (optional)     | number        |

\* a note about timestamps: The month/day/year of the timestamp doesn't matter
                            but make sure they are the **same for all classes**

    
  * Under the 'Rules' tab, edit the rules to match:

```
  service cloud.firestore {
    match /databases/{database}/documents {
      match /{document=**} {
        allow write: if request.auth != null;
        allow read: if true;
      }
    }
  }
```

  * Click the gear next to "Project Overview" on the sidebar and click 'Project Settings'
  * Click 'Add Firebase to your web app' and copy these values into your `environment.ts` files, like so"

```Typescript
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'some-token',
    authDomain: 'some-domain',
    databaseURL: 'some-url',
    projectId: 'some-project-id',
    storageBucket: 'some-storage-bucket',
    messagingSenderId: 'some-sender-id'
  }
};
```


  2. Run `npm install firebase angularfire2 --save` and `npm install @rbwrightjr91/ng-schooldule`.

  3. Imports:

**In `app.module.ts`**:

  ```Typescript
  import { NgSchoolduleModule } from '@rbwrightjr91/ng-schooldule';
  import { AngularFireModule } from 'angularfire2';

  import { environment } from '../environments/environment';
  export const firebaseConfig = environment.firebaseConfig; 

  @NgModule({
    imports: [
      NgSchoolduleModule,
      AngularFireModule.initializeApp(firebaseConfig)
    ]
  })

  ```

  4. Add Bootstrap style sheet:
  
  **In index.html:**
  
  ```
  <body>
    <app-root></app-root>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">

  </body>
  ```

  5. Usage: `<ng-schooldule [semester]="'Fall'" [year]='2018'></ng-schooldule>` inside your desired `component.html` file.


