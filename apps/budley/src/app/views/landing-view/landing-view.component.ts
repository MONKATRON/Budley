import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'budley-landing-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-view.component.html',
  styleUrl: './landing-view.component.scss',
})

export class LandingViewComponent implements OnInit {

  ngOnInit(): void {
    gsap.delayedCall( 3, function(){
      window.location.href = '/dashboard';
    } );
  }
  
}
5