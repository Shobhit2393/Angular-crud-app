import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Blog } from 'src/app/model/blog.model';
import { BlogsService } from 'src/app/service/blogs.service';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.scss']
})
export class EditblogComponent implements OnInit {
  IsNewRequest: boolean = false;
  Pagehead: string = '';
  OneBlogData: any = [];
  blogId: string = '';

  BlogData: Blog = new Blog();
  constructor(private activatedRoute: ActivatedRoute, private blogsService: BlogsService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['id'] != null) {
        this.blogId = params['id'];
        this.getBlogDataById(this.blogId);
      }
      else {
        this.Pagehead = "New";
        this.IsNewRequest = true;
      }
    });
  }
  getBlogDataById(blogId) {               //Method For Get Record By Id For Edit
    this.Pagehead = "Edit";
    this.blogsService.GetBlogDataForEdit(blogId).subscribe(res => {
      this.BlogData.title = res[0].title;
      this.BlogData.blog = res[0].blog;
    })
  }

  update() {                              //Method For Update Old Record
    this.blogsService.UpdateBlogData(this.BlogData, +this.blogId).subscribe(res => {
      this.OneBlogData = res[0];
    })
  }
  saveNewBlog() {                         //Method for Save New Record
    this.blogsService.saveBlogData(this.BlogData).subscribe(res => {
      if (res != null && res != "")
        this.router.navigate(['/home/allrecord']);
    })
  }
}
