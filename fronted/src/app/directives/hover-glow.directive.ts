import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverGlow]',
  standalone: true
})
export class HoverGlowDirective {
  @Input('appHoverGlow') glowShadow: string = 'rgba(99, 102, 241, 0.2)';
  @Input() glowBorderColor: string = '#6366f1';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', `0 12px 20px ${this.glowShadow}`);
    this.renderer.setStyle(this.el.nativeElement, 'border-color', this.glowBorderColor);
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(-4px)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'border-color', '#e2e8f0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
  }
}
