import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogsService } from 'src/app/service/blogs.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-allrecord',
  templateUrl: './allrecord.component.html',
  styleUrls: ['./allrecord.component.scss']
})
export class AllrecordComponent implements OnInit {
  deleteBlogId: number = 0;
  msgs: Message[] = [];
  cols: any = [];
  BlogData: any = [];
  pageinationcount: any;

  constructor(private blogsService: BlogsService, private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) {
    this.GetAllBlogs();
  }

  ngOnInit(): void {
  }

  onPageChange(e) {
    this.pageinationcount = e.rows;
  }
  GetAllBlogs() {             //Method For Get All Record
    this.BlogData = [];
    this.BlogData = this.blogsService.AllBlogsData().subscribe(res => {
      this.BlogData = res;
    })
  }
  GetOneBlogForEdit(e) {      //Method for Navigate to Edit
    this.router.navigate(['home/editblog', e]);
  }
  deleteBlog(e) {             //Method For Delete Blog
    this.deleteBlogId = e;
    this.showConfirm();
  }

  showConfirm() {             //Show Confirmation Dialog Box at the time for Delete
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
  }
  onConfirm() {               //Click Yes on Confirm box
    this.messageService.clear('c');
    this.blogsService.DeleteBlog(this.deleteBlogId).subscribe(res => {
      if (res != null && res != "") {
        this.GetAllBlogs();
      }
    });
  }
  onReject() {                //Click No on Confirm box
    this.messageService.clear('c');
  }
}