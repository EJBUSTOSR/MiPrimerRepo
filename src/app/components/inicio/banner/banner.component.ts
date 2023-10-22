import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  name: string = 'Mi banner';
  urlImg: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQebHn9VmTvOqmBQ25k6ssI9dNDmHllZV0gOA&usqp=CAU';
  photo: string = `url('${this.urlImg}')`;
}
