import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AuthorComponent } from './author/author.component';
import { LoanComponent } from './loan/loan.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { PublishersComponent } from './publishers/publishers.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'books',
    component: BookComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'author',
    component: AuthorComponent,
  },
  {
    path: 'loan',
    component: LoanComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'publishers',
    component: PublishersComponent,
  },
  {
    path:'add-book',
    component: AddBookComponent,
  },
  {
    path:'add-admin',
    component: AddAdminComponent,
  },
  {
    path:'add-author',
    component: AddAuthorComponent,
  },
  {
    path:'add-loan',
    component: AddLoanComponent,
  },
  {
    path:'add-publisher',
    component: AddPublisherComponent,
  },
  {
    path:'add-student',
    component: AddStudentComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
