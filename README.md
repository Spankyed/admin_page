# Admin_Page

### Dependencies

* Libraries in 'content' folder
* Styles in 'content' folder
* Local-store.js in 'services' folder
* Bootstrap

*Some css styles may break

```
------------------- app.js ----------------------
var modules = [ 'ivh.treeview',
                'LocalStorageModule' ] ;

var app = angular.module('app', modules);

----------------- index.html --------------------
<!-- Styling -->
<link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="Content/css/ivh-treeview.css"> 

<!-- Libraries -->
<script src="Content/libs/angular/ivh-treeview.js"></script>
<script src="Content/libs/angular/angular-local-storage.min.js"></script>

<!-- Application -->
<script src="Angular/services/local-store.js"></script>
<script src="Angular/attendance/admin/models/mock-subjects.js"></script>
<script src="Angular/attendance/admin/models/mock-items.js"></script>
<script src="Angular/attendance/admin/controller/adminController.js?version=1"></script>
```

### Features
* Create/Edit/Delete - Subjects/Areas/Grades
* Search Subjects
* Save data to local store (replace with database service).
* Get data from local store (replace with database service).

